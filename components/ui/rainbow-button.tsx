import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={twMerge(
        clsx(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-neutral-950 px-8 py-3 font-mono font-medium text-white transition-transform duration-300 hover:scale-[1.02] active:scale-95",
          className
        )
      )}
      {...props}
    >
      {/* Rainbow Bottom Line (Sharp) */}
      <span className="absolute bottom-0 left-0 h-[2px] w-full animate-rainbow bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] bg-[length:200%]" />
      
      {/* Rainbow Bottom Glow (Blurred) */}
      <span className="absolute -bottom-1 left-0 h-[10px] w-full animate-rainbow bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] bg-[length:200%] blur-md opacity-60" />

      {/* Subtle Top Highlight for depth */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}