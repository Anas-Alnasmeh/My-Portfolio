import { useEffect, useState } from "react";

/**
 * Returns pointer position as percentages (0-100) relative to a container ref.
 * Falls back gracefully on touch devices (no listener cost — just stays centered).
 */
export function useMousePosition(containerRef) {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const handleMove = (event) => {
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      setPosition({ x, y });
    };

    node.addEventListener("mousemove", handleMove);
    return () => node.removeEventListener("mousemove", handleMove);
  }, [containerRef]);

  return position;
}
