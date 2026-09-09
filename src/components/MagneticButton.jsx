import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * Wraps any element (typically a button/link) and gives it a subtle
 * magnetic pull toward the cursor on hover. No-ops under reduced motion.
 */
export default function MagneticButton({ children, strength = 0.35, className, as, ...rest }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const Component = as || motion.button;

  const handleMove = (event) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * strength;
    const y = (event.clientY - rect.top - rect.height / 2) * strength;
    setOffset({ x, y });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <Component
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      {...rest}
    >
      {children}
    </Component>
  );
}
