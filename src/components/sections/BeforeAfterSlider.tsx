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
      className={`relative h-[500px] rounded-xl overflow-hidden group cursor-ew-resize select-none ${
        index === 0 ? "lg:col-span-1" : ""
      }`}
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
        className="absolute top-0 bottom-0 w-1 bg-brand-primary z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(127,212,32,0.6)]" />
      </div>
      <div className="absolute bottom-4 left-4 z-20 bg-background/60 backdrop-blur-sm px-4 py-1 rounded text-primary font-label-md text-label-md pointer-events-none">
        {label}
      </div>
    </div>
  );
}
