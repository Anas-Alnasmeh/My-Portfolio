import { motion, AnimatePresence } from "framer-motion";
import "./loader.css";

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          aria-hidden="true"
        >
          <div className="loader__mark">
            <span className="loader__bracket">{"<"}</span>
            <span className="loader__name">AK</span>
            <span className="loader__bracket">{"/>"}</span>
          </div>
          <div className="loader__bar">
            <motion.div
              className="loader__bar-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
