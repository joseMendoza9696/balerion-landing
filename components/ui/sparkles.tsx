import React, { useEffect, useId, useRef, useState } from "react";

export const SparklesCore = (props: {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleDensity?: number;
  className?: string;
  particleColors?: string[];
}) => {
  const {
    id,
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    speed = 0.5,
    particleDensity = 100,
    className,
    particleColors = ["#000000"],
  } = props;
  
  const generatedId = useId();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [particles, setParticles] = useState<any[]>([]);
  const animationFrameId = useRef<number>(undefined);
  const mousePosition = useRef<{x: number, y: number}>({ x: -9999, y: -9999 });

  useEffect(() => {
    if (canvasRef.current) {
      setContext(canvasRef.current.getContext("2d"));
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        mousePosition.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }
    };

    // Listen on window to ensure we catch movement even if overlay elements block the canvas
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (canvasRef.current && context) {
      const canvas = canvasRef.current;
      const dpr = window.devicePixelRatio || 1;
      
      const resizeCanvas = () => {
        if (!canvas.parentElement) return;
        canvas.width = canvas.parentElement.clientWidth * dpr;
        canvas.height = canvas.parentElement.clientHeight * dpr;
        canvas.style.width = `${canvas.parentElement.clientWidth}px`;
        canvas.style.height = `${canvas.parentElement.clientHeight}px`;
        context.scale(dpr, dpr);
      };

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      // Initialize particles
      const newParticles = [];
      const particleCount = particleDensity;
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * canvas.parentElement!.clientWidth,
          y: Math.random() * canvas.parentElement!.clientHeight,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          opacity: Math.random(),
          opacitySpeed: (Math.random() - 0.5) * 0.01,
        });
      }
      setParticles(newParticles);

      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }
  }, [maxSize, minSize, particleDensity, speed, particleColors, context]);

  useEffect(() => {
    if (canvasRef.current && context) {
      const canvas = canvasRef.current;
      
      const render = () => {
        if (!canvas.parentElement) return;
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background if needed (though usually transparent)
        if (background !== "transparent") {
            context.fillStyle = background;
            context.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
        }

        particles.forEach((particle) => {
          // Standard Movement
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.opacity += particle.opacitySpeed;

          // Mouse Repulsion Interaction
          const dx = particle.x - mousePosition.current.x;
          const dy = particle.y - mousePosition.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repulsionRadius = 80; // Reduced radius even further for subtlety

          if (distance < repulsionRadius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (repulsionRadius - distance) / repulsionRadius;
            const strength = 4; // Reduced strength for gentle push

            particle.x += forceDirectionX * force * strength;
            particle.y += forceDirectionY * force * strength;
          }

          // Wrap around screen
          if (particle.x < 0) particle.x = canvas.parentElement!.clientWidth;
          if (particle.x > canvas.parentElement!.clientWidth) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.parentElement!.clientHeight;
          if (particle.y > canvas.parentElement!.clientHeight) particle.y = 0;
          
          // Oscillate opacity
          if (particle.opacity <= 0.1 || particle.opacity >= 1) {
             particle.opacitySpeed *= -1;
          }

          // Draw
          context.beginPath();
          context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          context.fillStyle = particle.color;
          context.globalAlpha = Math.max(0, Math.min(1, particle.opacity));
          context.fill();
          context.globalAlpha = 1; // Reset
        });

        animationFrameId.current = requestAnimationFrame(render);
      };

      render();

      return () => {
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      };
    }
  }, [particles, context, background]);

  return (
    <canvas
      ref={canvasRef}
      id={id || generatedId}
      className={className}
      style={{
        background: background === "transparent" ? "transparent" : background,
      }}
    />
  );
};