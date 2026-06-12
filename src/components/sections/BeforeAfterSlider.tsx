"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface SliderProps {
  beforeImage: string;
  afterImage: string;
  label: string;
  index: number;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, label, index }: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pos = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setPosition(pos);
    },
    []
  );

  const onPointerDown = () => setIsDragging(true);
  const onPointerUp = () => setIsDragging(false);

  const onPointerMove = (e: React.PointerEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[400px] md:h-[500px] overflow-hidden group cursor-ew-resize select-none"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerUp}
      onTouchMove={onTouchMove}
      style={{ touchAction: "none" }}
    >
      <Image
        src={beforeImage}
        alt="Before"
        fill
        className="object-cover pointer-events-none"
        draggable={false}
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <Image
          src={afterImage}
          alt="After"
          fill
          className="object-cover pointer-events-none"
          draggable={false}
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-px bg-primary z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-[0_0_20px_rgba(127,212,32,0.4)]" />
      </div>
      <div className="absolute bottom-4 left-4 z-20 bg-background/70 backdrop-blur-sm px-4 py-2 text-primary font-semibold text-[13px] uppercase tracking-wider pointer-events-none">
        {label}
      </div>
    </div>
  );
}
