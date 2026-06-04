'use client';

import { useState } from "react";

interface InteractiveTitleProps {
  message: string;
}

export default function InteractiveTitle({ message }: InteractiveTitleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <h1
      className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 cursor-pointer"
      style={{
        transform: isHovered 
          ? 'scale(1.3) translateY(-20px)' 
          : 'scale(1) translateY(0)',
        transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        animation: isHovered 
          ? 'jump 0.5s ease-in-out 0.3s' 
          : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes jump {
          0%, 100% { transform: scale(1.3) translateY(-20px); }
          50% { transform: scale(1.3) translateY(-40px); }
        }
      `}</style>
      {message}
    </h1>
  );
}
