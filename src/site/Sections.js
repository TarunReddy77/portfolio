import React, {useEffect, useState} from "react";
import Reveal from "./Reveal";
import Carousel from "./Carousel";
import {blogSection, educationInfo} from "../portfolio";
import {
  photo,
  profile,
  experience,
  featuredProjects,
  skills,
  certifications
} from "./content";

const resumeUrl = require("../containers/greeting/resume.pdf");

const Icon = ({d, size = 16}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

const icons = {
  pin: "M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z",
  globe:
    "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18",
  link: "M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  arrow: "M7 17L17 7M8 7h9v9",
  download: "M12 4v11M7 11l5 5 5-5M5 20h14",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
  fork: "M7 4v6a3 3 0 003 3h4a3 3 0 003-3V4M12 13v7"
};

const Chips = ({items}) =>
  items && items.length ? (
    <ul className="chips">
      {items.map(c => (
        <li key={c} className="chip">
          {c}
        </li>
      ))}
    </ul>
  ) : null;

export const SectionTitle = ({number, title}) => (
  <div className="section-title">
    <span className="section-num">{number}</span>
    <h2>{title}</h2>
  </div>
);

export function Hero() {
  return (
    <section className="hero" id="top">
      <Reveal>
        <p className="eyebrow">
          <span className="prompt">&gt;_</span> {profile.tagline}
        </p>
        <div className="hero-head">
          <div className="avatar" aria-hidden={photo ? undefined : "true"}>
            {photo ? (
              <img src={photo} alt={`Portrait of ${profile.name}`} />
            ) : (
              <span>{profile.initials}</span>
            )}
          </div>
          <h1>
            {profile.name}
            <span className="cursor" aria-hidden="true">
              _
            </span>
          </h1>
        </div>
        {profile.summary.map((p, i) => (
          <p key={i} className={i === 0 ? "lead" : "lead lead-secondary"}>
            {p}
          </p>
        ))}
        <div className="hero-actions">
          <a className="btn btn-primary" href="#experience">
            View my work <Icon d={icons.arrow} />
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
          <a className="btn btn-ghost" href={resumeUrl} download="Resume.pdf">
            Resume <Icon d={icons.download} />
          </a>
        </div>
        <ul className="meta">
          <li>
            <Icon d={icons.pin} /> {profile.location}
          </li>
          <li>
            <Icon d={icons.globe} />
            <a href={profile.website.url}>{profile.website.label}</a>
          </li>
          <li>
            <Icon d={icons.link} />
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <Icon d={icons.link} />
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}

const COLLAPSED_BULLETS = 3;

function Job({job}) {
  const [open, setOpen] = useState(false);
  const hidden = Math.max(0, job.bullets.length - COLLAPSED_BULLETS);
  const shown = open ? job.bullets : job.bullets.slice(0, COLLAPSED_BULLETS);
  return (
    <Reveal className="tl-item">
      <div className="tl-date">{job.date}</div>
      <div className="tl-body">
        <div className="tl-head">
          {job.logo && (
            <img className="tl-logo" src={job.logo} alt="" loading="lazy" />
          )}
          <div>
            <h3>{job.company}</h3>
            <p className="tl-role">{job.role}</p>
          </div>
        </div>
        {job.desc && <p className="tl-desc">{job.desc}</p>}
        <ul className="bullets">
          {shown.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {hidden > 0 && (
          <button
            type="button"
            className="text-btn"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "Show less" : `Show ${hidden} more`}
          </button>
        )}
        <Chips items={job.chips} />
      </div>
    </Reveal>
  );
}

export function Experience({number}) {
  return (
    <section className="section" id="experience">
      <SectionTitle number={number} title="Experience" />
      <div className="timeline">
        {experience.map(job => (
          <Job key={`${job.company}-${job.date}`} job={job} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({p}) {
  const Tag = p.url ? "a" : "div";
  const linkProps = p.url
    ? {href: p.url, target: "_blank", rel: "noreferrer"}
    : {};
  return (
    <Tag className="card project-card" {...linkProps}>
      <div className="card-top">
        <span className="card-eyebrow">{p.eyebrow}</span>
        {p.url && <Icon d={icons.arrow} />}
      </div>
      <h3>{p.title}</h3>
      <p className="card-desc">{p.description}</p>
      <div className="card-foot">
        {p.language && (
          <span className="lang">
            <i style={{background: p.languageColor || "var(--accent)"}} />
            {p.language}
          </span>
        )}
        {typeof p.stars === "number" && (
          <span className="stat">
            <Icon d={icons.star} size={14} /> {p.stars}
          </span>
        )}
        {typeof p.forks === "number" && (
          <span className="stat">
            <Icon d={icons.fork} size={14} /> {p.forks}
          </span>
        )}
        <Chips items={p.chips} />
      </div>
    </Tag>
  );
}

export function Projects({number}) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let cancelled = false;
    fetch(process.env.PUBLIC_URL + "/profile.json")
      .then(res => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(json => {
        if (cancelled) return;
        const edges = json.data.user.pinnedItems.edges || [];
        setRepos(
          edges
            .filter(e => e && e.node)
            .map(({node}) => ({
              title: node.name,
              eyebrow: "GitHub",
              description: node.description || "Pinned repository on GitHub.",
              url: node.url,
              language: node.primaryLanguage && node.primaryLanguage.name,
              languageColor: node.primaryLanguage && node.primaryLanguage.color,
              stars: node.stargazers ? node.stargazers.totalCount : undefined,
              forks: node.forkCount
            }))
        );
      })
      .catch(err => {
        console.error(`Pinned repos unavailable: ${err}`);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const items = [...featuredProjects, ...repos];
  return (
    <section className="section" id="projects">
      <SectionTitle number={number} title="Projects" />
      <Reveal>
        <Carousel label="Projects">
          {items.map(p => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </Carousel>
      </Reveal>
    </section>
  );
}

export function Skills({number}) {
  return (
    <section className="section" id="skills">
      <SectionTitle number={number} title="Skills" />
      <div className="skill-grid">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 40}>
            <h3 className="skill-group">{g.group}</h3>
            <Chips items={g.items} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Education({number}) {
  return (
    <section className="section" id="education">
      <SectionTitle number={number} title="Education" />
      <div className="timeline">
        {educationInfo.schools.map(s => (
          <Reveal key={s.schoolName} className="tl-item">
            <div className="tl-date">{s.duration}</div>
            <div className="tl-body">
              <div className="tl-head">
                {s.logo && (
                  <img className="tl-logo" src={s.logo} alt="" loading="lazy" />
                )}
                <div>
                  <h3>{s.schoolName}</h3>
                  <p className="tl-role">{s.subHeader}</p>
                </div>
              </div>
              {s.desc && <p className="tl-desc">{s.desc}</p>}
              {s.descBullets && (
                <ul className="bullets">
                  {s.descBullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Certifications({number}) {
  return (
    <section className="section" id="certifications">
      <SectionTitle number={number} title="Achievements & Certifications" />
      <ul className="cert-grid">
        {certifications.map((c, i) => (
          <li key={c.title}>
            <Reveal delay={(i % 2) * 40}>
              {c.url ? (
                <a
                  className="card cert"
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <strong>{c.title}</strong>
                    <small>{c.subtitle}</small>
                  </span>
                  <Icon d={icons.arrow} />
                </a>
              ) : (
                <div className="card cert">
                  <span>
                    <strong>{c.title}</strong>
                    <small>{c.subtitle}</small>
                  </span>
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

const stripHtml = html =>
  typeof html === "string"
    ? html
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    : "";

export function Writing({number}) {
  const [posts, setPosts] = useState(
    blogSection.blogs.map(b => ({
      title: b.title,
      link: b.url,
      excerpt: b.description
    }))
  );

  useEffect(() => {
    let cancelled = false;
    fetch(process.env.PUBLIC_URL + "/blogs.json")
      .then(res => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(json => {
        if (cancelled || !json.items || !json.items.length) return;
        setPosts(
          json.items.map(item => {
            const text = stripHtml(item.description || item.content);
            return {
              title: item.title,
              link: item.link,
              date: item.pubDate && item.pubDate.slice(0, 10),
              excerpt: text.length > 170 ? `${text.slice(0, 170)}…` : text
            };
          })
        );
      })
      .catch(err => {
        console.error(`Medium posts unavailable, using defaults: ${err}`);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!blogSection.display || !posts.length) return null;
  return (
    <section className="section" id="writing">
      <SectionTitle number={number} title="Writing" />
      <ul className="post-list">
        {posts.map(p => (
          <li key={p.link}>
            <Reveal>
              <a href={p.link} target="_blank" rel="noreferrer">
                <span className="post-date">{p.date || "Medium"}</span>
                <span className="post-body">
                  <strong>{p.title}</strong>
                  {p.excerpt && <small>{p.excerpt}</small>}
                </span>
                <Icon d={icons.arrow} />
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Contact({number}) {
  const {email, phone, github, linkedin, medium} = profile.links;
  return (
    <section className="section contact" id="contact">
      <SectionTitle number={number} title="Contact" />
      <Reveal>
        <p className="lead">
          Discuss a project, a role, or just want to say hi? My inbox is open.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${email}`}>
            <Icon d={icons.mail} /> {email}
          </a>
          <a className="btn btn-ghost" href={`tel:${phone}`}>
            {phone}
          </a>
        </div>
        <ul className="meta">
          <li>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          {medium && (
            <li>
              <a href={medium} target="_blank" rel="noreferrer">
                Medium
              </a>
            </li>
          )}
        </ul>
      </Reveal>
    </section>
  );
}
