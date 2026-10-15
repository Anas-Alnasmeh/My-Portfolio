// import { HiOutlineAcademicCap } from "react-icons/hi2";
// import Reveal from "../components/Reveal";
// import { CERTIFICATES } from "../data/certificates";
// import "./certificates.css";

// export default function Certificates() {
//   return (
//     <section id="certificates" className="section certificates">
//       <div className="container">
//         <div className="section-head">
//           <p className="eyebrow">certificates</p>
//           <h2 className="section-title">Certifications</h2>
//           <p className="section-desc">Formal credentials, placeholders for now.</p>
//         </div>

//         <div className="certificates__grid">
//           {CERTIFICATES.map((cert, i) => (
//             <Reveal key={cert.id} className="cert-card glass-panel" delay={i * 0.1}>
//               <div className="cert-card__icon">
//                 <HiOutlineAcademicCap size={22} />
//               </div>
//               <div>
//                 <h3 className="cert-card__title">{cert.title}</h3>
//                 <p className="cert-card__meta">
//                   {cert.issuer} · {cert.year}
//                 </p>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
