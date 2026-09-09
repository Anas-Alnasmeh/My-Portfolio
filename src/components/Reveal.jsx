import { forwardRef } from "react";
import { motion } from "framer-motion";

const DIRECTIONS = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

const Reveal = forwardRef(function Reveal(
  { children, direction = "up", delay = 0, duration = 0.6, as: Component = "div", className, ...rest },
  ref
) {
  const offset = DIRECTIONS[direction] ?? DIRECTIONS.up;
  
  const MotionComponent = typeof Component === "string" ? motion[Component] : motion(Component);

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
});

export default Reveal;