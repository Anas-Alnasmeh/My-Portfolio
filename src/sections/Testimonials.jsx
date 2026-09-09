import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";
import Reveal from "../components/Reveal";
import { TESTIMONIALS } from "../data/testimonials";
import "./testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">testimonials</p>
          <h2 className="section-title">What people say</h2>
          <p className="section-desc">Placeholder quotes — swap in real feedback as it comes in.</p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} className="testimonial-card glass-panel" delay={i * 0.1}>
              <HiMiniChatBubbleBottomCenterText size={26} className="testimonial-card__mark" />
              <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
