import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowDown, HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { useMousePosition } from "../hooks/useMousePosition";
import { PROFILE } from "../utils/constants";
import MagneticButton from "../components/MagneticButton";
import "./hero.css";

const ROLES = ["Frontend Web Developer", "React Specialist", "UI Craftsman"];

function useTypingEffect(words, { typingSpeed = 70, deletingSpeed = 40, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { x, y } = useMousePosition(sectionRef);
  const typedRole = useTypingEffect(ROLES);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={sectionRef} className="hero">
      <div
        className="hero__mesh"
        style={{ "--mx": `${x}%`, "--my": `${y}%` }}
        aria-hidden="true"
      />
      <div className="hero__grid-overlay" aria-hidden="true" />

      <motion.div className="container hero__content" style={{ opacity: fade }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {PROFILE.location}
        </motion.p>

        <motion.h1
          className="hero__headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Hi, I'm <span className="text-gradient">{PROFILE.name}</span>
          <br />
          <span className="hero__typed">
            {typedRole}
            <span className="hero__caret" aria-hidden="true" />
          </span>
        </motion.h1>

        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {PROFILE.tagline} I turn designs and requirements into fast,
          accessible React applications — with the kind of polish that
          usually gets left for "later."
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton
            as={motion.a}
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View my work
          </MagneticButton>

          <MagneticButton
            as={motion.a}
            href={PROFILE.resumeUrl}
            className="btn btn-secondary"
          >
            <HiOutlineDocumentArrowDown size={18} />
            Download résumé
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.button
        className="hero__scroll-cue"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll to About section"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}
