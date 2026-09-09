import {
  HiOutlineDeviceTablet,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
  HiOutlineCircleStack,
  HiOutlineBolt,
} from "react-icons/hi2";
import Reveal from "../components/Reveal";
import { SERVICES } from "../data/services";
import "./services.css";

const ICON_MAP = {
  HiOutlineDeviceTablet,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
  HiOutlineCircleStack,
  HiOutlineBolt,
};

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">services</p>
          <h2 className="section-title">How I can help</h2>
          <p className="section-desc">
            From a single landing page to the frontend of a full product —
            here's where I typically plug in.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <Reveal
                key={service.id}
                className="service-card glass-panel"
                delay={(i % 3) * 0.08}
              >
                <div className="service-card__icon">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
