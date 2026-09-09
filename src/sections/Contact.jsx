import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import { PROFILE, CONTACT_ENDPOINT } from "../utils/constants";
import "./contact.css";

const INITIAL_STATE = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Your name is required.";
  if (!values.email.trim()) {
    errors.email = "Your email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Add a short message.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");
    try {
      await axios.post(CONTACT_ENDPOINT, values);
      setStatus("success");
      setValues(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__grid">
          <Reveal direction="right" className="contact__intro">
            <p className="eyebrow">contact</p>
            <h2 className="section-title">Let's build something</h2>
            <p className="section-desc" style={{ marginTop: "var(--space-3)" }}>
              Have a project, a role, or just a question about how something
              was built? My inbox is open.
            </p>

            <div className="contact__links">
              <a href={`mailto:${PROFILE.email}`} className="contact__link">
                <HiOutlineEnvelope size={18} />
                {PROFILE.email}
              </a>
              <a href={PROFILE.github} className="contact__link" target="_blank" rel="noreferrer">
                <FiGithub size={18} />
                GitHub
              </a>
              <a href={PROFILE.linkedin} className="contact__link" target="_blank" rel="noreferrer">
                <FiLinkedin size={18} />
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="contact__form-wrap glass-panel">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Jane Doe"
                  autoComplete="name"
                />
                {errors.name && (
                  <span className="form-field__error" id="name-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="jane@company.com"
                  autoComplete="email"
                />
                {errors.email && (
                  <span className="form-field__error" id="email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Tell me a little about what you're building..."
                />
                {errors.message && (
                  <span className="form-field__error" id="message-error">
                    {errors.message}
                  </span>
                )}
              </div>

              <MagneticButton
                as={motion.button}
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <HiOutlinePaperAirplane size={16} />
              </MagneticButton>

              <div role="status" aria-live="polite">
                {status === "success" && (
                  <p className="contact__status contact__status--success">
                    <HiOutlineCheckCircle size={16} /> Message sent — I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="contact__status contact__status--error">
                    <HiOutlineExclamationCircle size={16} /> Something went wrong. Try emailing me directly.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
