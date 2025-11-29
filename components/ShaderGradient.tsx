import React, { useRef, useEffect } from 'react';

const ShaderGradient: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Neon Rainbow Wave Shader
    const fragmentShaderSource = `
      precision mediump float;
      uniform float time;
      uniform vec2 resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        
        // Normalize coordinates centered vertically
        // We stretch x slightly to make the wave longer
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        
        float t = time * 0.5;
        vec3 finalColor = vec3(0.0);
        
        // Multiple wave layers
        for(float i = 0.0; i < 4.0; i++) {
            // Wave function: mix of sines
            float wave = sin(p.x * 0.8 + t + i * 1.5) * 0.4 + sin(p.x * 2.5 + t * 2.0) * 0.1;
            
            // Distance field
            // +0.9 moves the wave down (since p.y is -1 at bottom)
            float d = abs(p.y - wave + 0.9); 
            
            // Glow intensity (inverse distance)
            float glow = 0.02 / max(d, 0.001);
            
            // Color palette: Rainbow spectrum based on position and time
            vec3 color = 0.5 + 0.5 * cos(t + p.xyx + vec3(0, 2, 4) + i);
            
            // Accumulate color
            finalColor += color * glow * 0.6;
        }
        
        // Vignette / Fade to black at top to let text pop
        float vignette = smoothstep(1.0, 0.0, uv.y);
        
        // Dark background mixing
        gl_FragColor = vec4(finalColor * vignette, 1.0);
      }
    `;

    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, 'time');
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');

    let animationFrameId: number;
    const startTime = Date.now();

    const render = () => {
      if (!canvas || !gl) return;
      
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);

      const currentTime = (Date.now() - startTime) / 1000;
      gl.uniform1f(timeLocation, currentTime);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full bg-black blur-[50px]"
    />
  );
};

export default ShaderGradient;