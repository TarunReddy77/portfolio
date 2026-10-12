import React, {useEffect, useState} from "react";
import Reveal from "./Reveal";
import Carousel from "./Carousel";
import {iconFor} from "./skillIcons";
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

const Icon = ({d, size = 16, className}) => (
  <svg
    className={className}
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

const brandPaths = {
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  medium:
    "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
};

// Filled brand marks, coloured via the .brand-* classes in site.scss.
const BrandIcon = ({name, size = 18}) => (
  <svg
    className={`brand-icon brand-${name}`}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d={brandPaths[name]} />
  </svg>
);

const icons = {
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  phone:
    "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
  arrow: "M7 17L17 7M8 7h9v9",
  download: "M12 4v11M7 11l5 5 5-5M5 20h14",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
  fork: "M7 4v6a3 3 0 003 3h4a3 3 0 003-3V4M12 13v7"
};

// Multi-colour Gmail "M" mark (keeps its own colours in both themes).
const GmailIcon = ({size = 22}) => (
  <svg
    className="brand-icon"
    viewBox="0 0 48 48"
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path
      fill="#4caf50"
      d="M45 16.2l-5 2.75-5 4.75L35 40h7c1.657 0 3-1.343 3-3V16.2z"
    />
    <path
      fill="#1e88e5"
      d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z"
    />
    <path
      fill="#e53935"
      d="M35 11.2L24 19.45 13 11.2l-1 5.63v.008l1 6.862 11 8.25 11-8.25 1-6.862-1-5.638z"
    />
    <path
      fill="#c62828"
      d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859A4.3 4.3 0 007.298 8C4.924 8 3 9.924 3 12.298z"
    />
    <path
      fill="#fbc02d"
      d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341A4.3 4.3 0 0140.702 8C43.076 8 45 9.924 45 12.298z"
    />
  </svg>
);

const MetaLink = ({href, external, icon, children}) => (
  <li>
    <a
      className="meta-link"
      href={href}
      {...(external ? {target: "_blank", rel: "noreferrer"} : {})}
    >
      {icon}
      <span>{children}</span>
    </a>
  </li>
);

const Chip = ({label}) => {
  const icon = iconFor(label);
  return (
    <li className="chip">
      {icon && (
        <img
          className={icon.invert ? "chip-icon chip-icon-invert" : "chip-icon"}
          src={icon.src}
          alt=""
          width="16"
          height="16"
          loading="lazy"
        />
      )}
      {label}
    </li>
  );
};

const Chips = ({items}) =>
  items && items.length ? (
    <ul className="chips">
      {items.map(c => (
        <Chip key={c} label={c} />
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
    <section className="hero">
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
          <a className="btn btn-primary" href={resumeUrl} download="Resume.pdf">
            Resume <Icon d={icons.download} />
          </a>
        </div>
        <ul className="meta">
          <MetaLink href={`mailto:${profile.links.email}`} icon={<GmailIcon />}>
            {profile.links.email}
          </MetaLink>
          <MetaLink
            href={`tel:${profile.links.phone}`}
            icon={<Icon d={icons.phone} size={22} className="icon-phone" />}
          >
            {profile.links.phone}
          </MetaLink>
          <MetaLink
            external
            href={profile.links.linkedin}
            icon={<BrandIcon name="linkedin" size={22} />}
          >
            LinkedIn
          </MetaLink>
          <MetaLink
            external
            href={profile.links.github}
            icon={<BrandIcon name="github" size={22} />}
          >
            GitHub
          </MetaLink>
          {profile.links.medium && (
            <MetaLink
              external
              href={profile.links.medium}
              icon={<BrandIcon name="medium" size={22} />}
            >
              Medium
            </MetaLink>
          )}
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

function CertBody({c}) {
  return (
    <>
      {c.image && (
        <div className="cert-thumb">
          <img
            src={c.image}
            alt={c.imageAlt || `${c.title} certificate`}
            loading="lazy"
          />
        </div>
      )}
      <div className="cert-text">
        <span>
          <strong>{c.title}</strong>
          <small>{c.subtitle}</small>
        </span>
        {c.url && <Icon d={icons.arrow} />}
      </div>
    </>
  );
}

export function Certifications({number}) {
  return (
    <section className="section" id="certifications">
      <SectionTitle number={number} title="Achievements & Certifications" />
      <ul className="cert-grid">
        {certifications.map((c, i) => (
          <li key={c.title}>
            <Reveal delay={(i % 3) * 40}>
              {c.url ? (
                <a
                  className="card cert"
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <CertBody c={c} />
                </a>
              ) : (
                <div className="card cert">
                  <CertBody c={c} />
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
