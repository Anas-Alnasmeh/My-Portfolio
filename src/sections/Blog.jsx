import { HiOutlineArrowRight, HiOutlineCalendarDays, HiOutlineClock } from "react-icons/hi2";
import Reveal from "../components/Reveal";
import { BLOG_POSTS } from "../data/blog";
import "./blog.css";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Blog() {
  return (
    <section id="blog" className="section blog">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">blog</p>
          <h2 className="section-title">Notes &amp; writing</h2>
          <p className="section-desc">
            Occasional write-ups on frontend patterns, performance, and things I learn the hard way.
          </p>
        </div>

        <div className="blog__grid">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.id} as="a" className="blog-card glass-panel" delay={i * 0.1}>
              <div className="blog-card__meta">
                <span>
                  <HiOutlineCalendarDays size={14} /> {formatDate(post.date)}
                </span>
                <span>
                  <HiOutlineClock size={14} /> {post.readTime}
                </span>
              </div>
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              {/* <span className="blog-card__cta">
                Read article <HiOutlineArrowRight size={14} />
              </span> */}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
