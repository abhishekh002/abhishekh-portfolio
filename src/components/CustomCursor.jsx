import React, { useEffect, useState } from 'react';

// Detect touch-only devices — custom cursor is pointless and may cause jank
const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
    'ontouchstart' in window);

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isTouch] = useState(isTouchDevice);

  useEffect(() => {
    if (isTouch) return; // no listeners needed on touch devices

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setGlowPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';
      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouch]);

  // Don't render anything on touch devices
  if (isTouch) return null;

  return (
    <>
      <div
        className="cursor-glow"
        style={{
          left: `${glowPosition.x}px`,
          top: `${glowPosition.y}px`,
        }}
      />
      <div
        className={`interactive-cursor ${hovered ? 'hovered' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
