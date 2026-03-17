import { useState, useEffect, useRef } from "react";

// ═══════════════════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════════════════

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const SKILLS = [
  {
    category: "Languages",
    icon: "⌨",
    color: "blue",
    items: ["C++", "Python", "Java", "JavaScript"],
  },
  {
    category: "Frontend",
    icon: "◻",
    color: "cyan",
    items: ["HTML5", "CSS3", "React.js", "Next.js"],
  },
  {
    category: "Backend",
    icon: "⚙",
    color: "blue",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    icon: "⬡",
    color: "cyan",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    icon: "△",
    color: "blue",
    items: ["AWS EC2", "ALB", "Auto Scaling", "IAM", "VPC", "Git", "GitHub"],
  },
  {
    category: "Other",
    icon: "✦",
    color: "cyan",
    items: ["Problem Solving", "OOP", "Data Structures", "Algorithms"],
  },
];

const PROJECTS = [
  {
    title: "Project Camp",
    subtitle: "Project Management Backend",
    tech: ["Node.js", "Express.js", "JWT", "REST API", "MongoDB"],
    accent: "from-blue-500 to-cyan-400",
    accentSolid: "#3B82F6",
    description: [
      "RESTful project management backend with complete JWT authentication flow",
      "Email verification system with secure token generation and expiry",
      "Role-based access control (RBAC) for granular permission management",
      "Nested subtask hierarchies with file attachment support",
      "Token refresh mechanism and health monitoring endpoints",
    ],
    github: "https://github.com/dev-pritam-2005/projmanage.git",
  },
  {
    title: "Airline Reservation System",
    subtitle: "Full-Stack Desktop Application",
    tech: ["Java", "Java Swing", "JDBC", "MySQL"],
    accent: "from-cyan-400 to-blue-600",
    accentSolid: "#06B6D4",
    description: [
      "Full-stack desktop application with a rich Java Swing GUI",
      "Clean OOP architecture with strict separation of concerns",
      "Complete flight booking, seat selection and itinerary management",
      "Automated boarding pass generation and printing system",
      "Robust JDBC database layer for reliable data persistence",
    ],
    github: "https://github.com/dev-pritam-2005/AirlineReservationSystemWithJAVA.git",
  },
];

const CERT = {
  title: "Programming Fundamentals using Python – Part 1 & Part 2",
  issuer: "Infosys Springboard",
  date: "Oct – Nov 2024",
  points: [
    "Core Python syntax, data types, control structures, and function design",
    "Object-oriented programming: classes, inheritance, encapsulation",
    "File handling, exception management, and standard module usage",
    "Algorithm design, complexity analysis, and computational thinking",
  ],
  links: [
    {
      label: "View Certificate — Part 1",
      href: "https://drive.google.com/file/d/1RSMV8K2TUpUVvzVaY9at5U1gdedthIc6/view?usp=drive_link",
    },
    {
      label: "View Certificate — Part 2",
      href: "https://drive.google.com/file/d/1hX0jBwrNE-D9mMVhayN7CIdiPyI9VE3B/view?usp=drive_link",
    },
  ],
};

const EDUCATION = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "Dr. B.C. Roy Engineering College, Durgapur",
  period: "Aug 2022 – Jun 2027",
  cgpa: "7.8 / 10",
  status: "Currently Enrolled",
};

// ═══════════════════════════════════════════════════════════
//  ICONS
// ═══════════════════════════════════════════════════════════

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const GradCapIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const CertIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

// ═══════════════════════════════════════════════════════════
//  SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════

function SectionHeader({ label, title }) {
  return (
    <div className="flex items-center gap-4">
      <span style={{ fontFamily: "'Space Mono', monospace", color: "rgba(59,130,246,0.55)", fontSize: "0.8rem" }}>
        {label}
      </span>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }} className="text-3xl sm:text-4xl text-white">
        {title}
      </h2>
      <div className="flex-1 h-px max-w-xs" style={{ background: "linear-gradient(90deg,rgba(59,130,246,0.4),transparent)" }} />
    </div>
  );
}

function SkillBadge({ label, color }) {
  const blue = color === "blue";
  return (
    <span
      className="px-3 py-1.5 text-xs font-medium rounded-full border cursor-default transition-all duration-300"
      style={{
        background: blue ? "rgba(59,130,246,0.08)" : "rgba(6,182,212,0.08)",
        borderColor: blue ? "rgba(59,130,246,0.3)" : "rgba(6,182,212,0.3)",
        color: blue ? "#93C5FD" : "#67E8F9",
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.7rem",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = blue ? "rgba(59,130,246,0.2)" : "rgba(6,182,212,0.2)";
        e.currentTarget.style.boxShadow = blue ? "0 0 12px rgba(59,130,246,0.4)" : "0 0 12px rgba(6,182,212,0.4)";
        e.currentTarget.style.borderColor = blue ? "rgba(59,130,246,0.7)" : "rgba(6,182,212,0.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = blue ? "rgba(59,130,246,0.08)" : "rgba(6,182,212,0.08)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = blue ? "rgba(59,130,246,0.3)" : "rgba(6,182,212,0.3)";
      }}
    >
      {label}
    </span>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.025)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: hovered ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "1.25rem",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 24px 64px rgba(59,130,246,0.15)" : "0 0 0 transparent",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        position: "relative",
        overflow: "hidden",
        padding: "1.75rem",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${project.accentSolid}, ${project.accentSolid === "#3B82F6" ? "#06B6D4" : "#3B82F6"})` }} />
      <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: `radial-gradient(circle, ${project.accentSolid}20, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "relative" }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "rgba(148,163,184,0.6)", marginBottom: "0.35rem", letterSpacing: "0.12em" }}>
          {project.subtitle.toUpperCase()}
        </p>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.35rem", color: "#fff", marginBottom: "0.9rem" }}>
          {project.title}
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.1rem" }}>
          {project.tech.map((t) => (
            <span key={t} style={{ padding: "2px 10px", fontSize: "0.65rem", fontFamily: "'Space Mono', monospace", borderRadius: "999px", background: "rgba(6,182,212,0.12)", color: "#67E8F9", border: "1px solid rgba(6,182,212,0.22)" }}>
              {t}
            </span>
          ))}
        </div>
        <ul style={{ marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
          {project.description.map((d, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.875rem", color: "rgb(148,163,184)", lineHeight: "1.5" }}>
              <span style={{ color: project.accentSolid, marginTop: "2px", flexShrink: 0 }}>▸</span>
              {d}
            </li>
          ))}
        </ul>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "0.6rem", fontSize: "0.8rem", fontFamily: "'Space Mono', monospace", color: "rgb(203,213,225)", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", textDecoration: "none", transition: "all 0.2s ease" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)"; e.currentTarget.style.background = "rgba(59,130,246,0.1)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "rgb(203,213,225)"; }}
        >
          <GitHubIcon />
          View on GitHub
        </a>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap";
    document.head.appendChild(fontLink);

    const style = document.createElement("style");
    style.id = "pd-portfolio-styles";
    style.textContent = `
      html { scroll-behavior: smooth; }
      body { font-family: 'DM Sans', sans-serif; background: #0F172A; margin: 0; overflow-x: hidden; }
      *,*::before,*::after { box-sizing: border-box; }
      ::-webkit-scrollbar { width: 3px; }
      ::-webkit-scrollbar-track { background: #0F172A; }
      ::-webkit-scrollbar-thumb { background: #3B82F6; border-radius: 2px; }
      @keyframes gradshift { 0%,100% { background-position:0% 50%; } 50% { background-position:100% 50%; } }
      @keyframes glowpulse { 0%,100% { text-shadow:0 0 20px rgba(59,130,246,.55),0 0 60px rgba(59,130,246,.2); } 50% { text-shadow:0 0 30px rgba(6,182,212,.7),0 0 80px rgba(6,182,212,.25); } }
      @keyframes fadeup { from { opacity:0; transform:translateY(36px); } to { opacity:1; transform:translateY(0); } }
      @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
      @keyframes scanline { from { top:-2px; } to { top:100%; } }
      @keyframes floatbob { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-8px);} }
      @keyframes beam { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      .gradient-text { background: linear-gradient(135deg,#3B82F6 0%,#06B6D4 50%,#3B82F6 100%); background-size: 200% 200%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: gradshift 4s ease infinite; }
      .name-glow { animation: glowpulse 3.5s ease-in-out infinite; }
      .float-bob { animation: floatbob 5s ease-in-out infinite; }
      .section-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.75s cubic-bezier(.23,1,.32,1), transform 0.75s cubic-bezier(.23,1,.32,1); }
      .section-reveal.is-visible { opacity: 1; transform: translateY(0); }
      .section-reveal.delay-1 { transition-delay: 0.1s; }
      .section-reveal.delay-2 { transition-delay: 0.2s; }
      .section-reveal.delay-3 { transition-delay: 0.3s; }
      .grid-bg { background-image: linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px); background-size: 56px 56px; }
      .terminal-card::before { content:''; position:absolute; left:0; right:0; height:1px; background: linear-gradient(90deg, transparent, rgba(6,182,212,.5), transparent); animation: scanline 4s linear infinite; }
      .nav-link-line { position: relative; overflow: hidden; }
      .nav-link-line::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#3B82F6; transition: width 0.3s ease; }
      .nav-link-line:hover::after { width:100%; }
      .cta-primary { background: linear-gradient(135deg,#2563EB,#0891B2); transition: all 0.3s ease; position: relative; overflow: hidden; }
      .cta-primary::after { content: ''; position: absolute; top: 0; left: -100%; width: 60%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent); animation: beam 2.5s ease-in-out infinite; }
      .cta-primary:hover { background: linear-gradient(135deg,#3B82F6,#06B6D4); box-shadow: 0 8px 32px rgba(59,130,246,0.4); transform: translateY(-1px); }
    `;
    document.head.appendChild(style);

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { threshold: 0.12 }
    );
    setTimeout(() => {
      document.querySelectorAll(".section-reveal").forEach((el) => observerRef.current.observe(el));
    }, 200);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0F172A", color: "#fff", overflowX: "hidden" }}>

      {/* ── NAVBAR ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all 0.4s ease", background: scrolled ? "rgba(15,23,42,0.82)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", WebkitBackdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent", boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
          <button onClick={() => scrollTo("hero")} style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.25rem", background: "none", border: "none", cursor: "pointer", padding: 0 }} className="gradient-text">
            PD.
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            {NAV_LINKS.map((l) => (
              <button key={l.label} onClick={() => scrollTo(l.id)} className="nav-link-line" style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.875rem", color: "rgba(148,163,184,1)", fontFamily: "'DM Sans', sans-serif", padding: "4px 0", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(148,163,184,1)")}>
                {l.label}
              </button>
            ))}
            <a href="https://drive.google.com/file/d/1TwPkpmP96QF-N0OVHvBUjlp090kDddwf/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ padding: "0.45rem 1.1rem", borderRadius: "0.6rem", fontSize: "0.8rem", fontFamily: "'Space Mono', monospace", color: "#fff", textDecoration: "none", border: "1px solid rgba(59,130,246,0.5)", background: "rgba(59,130,246,0.12)", transition: "all 0.2s ease" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(59,130,246,0.25)"; e.currentTarget.style.borderColor = "#3B82F6"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(59,130,246,0.12)"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)"; }}>
              Resume ↗
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "flex", flexDirection: "column", gap: "5px" }} className="show-mobile">
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", width: "22px", height: "2px", background: "#94A3B8", borderRadius: "2px", transition: "all 0.3s ease", transform: menuOpen ? i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 1 ? "scaleX(0)" : "rotate(-45deg) translate(5px,-5px)" : "none", opacity: menuOpen && i === 1 ? 0 : 1 }} />
            ))}
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: "rgba(15,23,42,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0" }}>
            {NAV_LINKS.map((l) => (
              <button key={l.label} onClick={() => scrollTo(l.id)} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: "0.75rem 0", color: "rgba(148,163,184,1)", fontSize: "1rem", fontFamily: "'DM Sans', sans-serif", borderBottom: "1px solid rgba(255,255,255,0.04)", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#60A5FA")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(148,163,184,1)")}>
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
        @media (min-width: 769px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
      `}</style>

      {/* ── HERO ── */}
      <section id="hero" className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)", filter: "blur(40px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", right: "5%", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 65%)", filter: "blur(40px)", pointerEvents: "none" }} />
        <div className="float-bob" style={{ position: "absolute", bottom: "20%", right: "8%", width: "220px", height: "220px", borderRadius: "50%", border: "1px solid rgba(59,130,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <div style={{ width: "140px", height: "140px", borderRadius: "50%", border: "1px solid rgba(6,182,212,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.3)" }} />
          </div>
        </div>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "6rem 1.5rem 4rem", width: "100%", position: "relative" }}>
          <div style={{ maxWidth: "780px" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", color: "#22D3EE", fontSize: "0.8rem", marginBottom: "1.25rem", letterSpacing: "0.2em", opacity: 0, animation: "fadeup 0.7s ease 0.2s forwards" }}>
              &gt;&nbsp; Hello, World! ─ Welcome to my portfolio
            </p>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, lineHeight: 1, marginBottom: "0.5rem", opacity: 0, animation: "fadeup 0.7s ease 0.4s forwards" }}>
              <span className="gradient-text name-glow" style={{ display: "block", fontSize: "clamp(3.5rem,9vw,6.5rem)" }}>Pritam</span>
              <span style={{ display: "block", fontSize: "clamp(3.5rem,9vw,6.5rem)", color: "#fff", WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>Dutta</span>
            </h1>
            <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "rgba(148,163,184,0.9)", marginTop: "1rem", marginBottom: "1.25rem", opacity: 0, animation: "fadeup 0.7s ease 0.6s forwards" }}>
              Full Stack Developer &amp; CS Undergraduate
            </p>
            <p style={{ color: "rgba(100,116,139,1)", fontSize: "1.05rem", maxWidth: "580px", lineHeight: 1.75, marginBottom: "2.25rem", opacity: 0, animation: "fadeup 0.7s ease 0.75s forwards", fontFamily: "'DM Sans', sans-serif" }}>
              Crafting scalable backends and digital experiences with{" "}
              <span style={{ color: "#60A5FA" }}>Node.js</span>,{" "}
              <span style={{ color: "#22D3EE" }}>AWS</span>, and a passion for clean engineering.
              Currently building real-world systems as a B.Tech CSE student.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem", opacity: 0, animation: "fadeup 0.7s ease 0.9s forwards" }}>
              <button onClick={() => scrollTo("projects")} className="cta-primary" style={{ padding: "0.75rem 1.75rem", borderRadius: "0.75rem", fontWeight: 600, fontSize: "0.95rem", color: "#fff", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.02em" }}>
                View Projects
              </button>
              <a href="https://drive.google.com/file/d/1TwPkpmP96QF-N0OVHvBUjlp090kDddwf/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ padding: "0.75rem 1.75rem", borderRadius: "0.75rem", fontWeight: 500, fontSize: "0.95rem", color: "rgba(203,213,225,1)", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.03)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", transition: "all 0.25s ease" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)"; e.currentTarget.style.background = "rgba(59,130,246,0.08)"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.color = "rgba(203,213,225,1)"; }}>
                Download Resume ↗
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", opacity: 0, animation: "fadeup 0.7s ease 1.05s forwards" }}>
              {[
                { label: "GitHub", href: "https://github.com/dev-pritam-2005", icon: <GitHubIcon /> },
                { label: "LinkedIn", href: "https://linkedin.com/in/pritam-dutta", icon: <LinkedInIcon /> },
                { label: "Email", href: "mailto:Pritamdutta35689@gmail.com", icon: <EmailIcon /> },
                { label: "Phone", href: "tel:+918250036245", icon: <PhoneIcon /> },
              ].map(({ label, href, icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" title={label} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "0.65rem", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(148,163,184,1)", background: "rgba(255,255,255,0.03)", textDecoration: "none", transition: "all 0.2s ease" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)"; e.currentTarget.style.color = "#60A5FA"; e.currentTarget.style.background = "rgba(59,130,246,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(148,163,184,1)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.transform = "none"; }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", opacity: 0.4 }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#64748B", letterSpacing: "0.15em" }}>SCROLL</span>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #3B82F6, transparent)" }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "7rem 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="section-reveal">
            <SectionHeader label="01 /" title="About Me" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3.5rem", alignItems: "center", marginTop: "3.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "1.05rem", color: "rgba(203,213,225,0.9)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                  I'm a Computer Science & Engineering undergraduate with a passion for building backend systems and full-stack applications. I specialize in{" "}
                  <span style={{ color: "#60A5FA", fontWeight: 500 }}>Node.js</span> and{" "}
                  <span style={{ color: "#60A5FA", fontWeight: 500 }}>Express.js</span> for server-side development, with hands-on experience deploying applications on{" "}
                  <span style={{ color: "#22D3EE", fontWeight: 500 }}>AWS</span>.
                </p>
                <p style={{ fontSize: "0.975rem", color: "rgba(100,116,139,1)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                  My toolkit spans low-level systems programming in{" "}
                  <span style={{ color: "#93C5FD" }}>C++</span> to high-level scripting in{" "}
                  <span style={{ color: "#93C5FD" }}>Python</span>. I enjoy tackling algorithmic challenges and translating them into clean, maintainable code.
                </p>
                <p style={{ fontSize: "0.975rem", color: "rgba(100,116,139,1)", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                  Currently pursuing my B.Tech at Dr. B.C. Roy Engineering College, Durgapur — actively building projects that bridge academic knowledge with real-world engineering.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", paddingTop: "0.5rem" }}>
                  {["Open to Internships", "Backend-Focused", "AWS Enthusiast", "Problem Solver"].map((tag) => (
                    <span key={tag} style={{ padding: "0.3rem 0.85rem", fontSize: "0.75rem", fontFamily: "'Space Mono', monospace", borderRadius: "999px", background: "rgba(59,130,246,0.1)", color: "#93C5FD", border: "1px solid rgba(59,130,246,0.25)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="terminal-card" style={{ borderRadius: "1.25rem", overflow: "hidden", border: "1px solid rgba(6,182,212,0.2)", background: "rgba(2,6,23,0.8)", backdropFilter: "blur(12px)", boxShadow: "0 0 60px rgba(6,182,212,0.06)", position: "relative" }}>
                <div style={{ background: "rgba(30,41,59,0.9)", padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem", borderBottom: "1px solid rgba(6,182,212,0.12)" }}>
                  {["#EF4444", "#EAB308", "#22C55E"].map((c, i) => (<span key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: 0.8 }} />))}
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "rgba(71,85,105,1)", marginLeft: "0.5rem" }}>~/pritam/about.json</span>
                </div>
                <div style={{ padding: "1.5rem", fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", lineHeight: 2 }}>
                  <pre style={{ margin: 0, color: "rgba(71,85,105,1)", overflowX: "auto" }}>
{`{
  `}<span style={{ color: "#67E8F9" }}>"name"</span>{`:`}
{`     `}<span style={{ color: "#86EFAC" }}>"Pritam Dutta"</span>{`,
  `}<span style={{ color: "#67E8F9" }}>"role"</span>{`:`}
{`     `}<span style={{ color: "#86EFAC" }}>"Full Stack Dev"</span>{`,
  `}<span style={{ color: "#67E8F9" }}>"education"</span>{`: `}<span style={{ color: "#86EFAC" }}>"B.Tech CSE"</span>{`,
  `}<span style={{ color: "#67E8F9" }}>"cgpa"</span>{`:     `}<span style={{ color: "#FCD34D" }}>7.8</span>{`,
  `}<span style={{ color: "#67E8F9" }}>"location"</span>{`: `}<span style={{ color: "#86EFAC" }}>"Durgapur, WB"</span>{`,
  `}<span style={{ color: "#67E8F9" }}>"languages"</span>{`: [
    `}<span style={{ color: "#86EFAC" }}>"C++"</span>{`, `}<span style={{ color: "#86EFAC" }}>"Python"</span>{`,
    `}<span style={{ color: "#86EFAC" }}>"Java"</span>{`, `}<span style={{ color: "#86EFAC" }}>"JS"</span>{`
  ],
  `}<span style={{ color: "#67E8F9" }}>"cloud"</span>{`:     `}<span style={{ color: "#86EFAC" }}>"AWS"</span>{`,
  `}<span style={{ color: "#67E8F9" }}>"backend"</span>{`: [
    `}<span style={{ color: "#86EFAC" }}>"Node.js"</span>{`,
    `}<span style={{ color: "#86EFAC" }}>"Express.js"</span>{`
  ],
  `}<span style={{ color: "#67E8F9" }}>"status"</span>{`:   `}<span style={{ color: "#60A5FA" }}>true</span>{`
}`}
                  </pre>
                  <div style={{ marginTop: "0.5rem", color: "rgba(6,182,212,0.5)", fontSize: "0.75rem" }}>
                    <span>$ _</span>
                    <span style={{ animation: "blink 1s step-end infinite", color: "#22D3EE" }}>█</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "7rem 0", background: "rgba(2,6,23,0.5)" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="section-reveal">
            <SectionHeader label="02 /" title="Skills & Technologies" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem", marginTop: "3.5rem" }}>
              {SKILLS.map((group, idx) => (
                <div key={group.category} className={`section-reveal delay-${Math.min(idx + 1, 3)}`} style={{ padding: "1.5rem", borderRadius: "1.1rem", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(8px)", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)"; e.currentTarget.style.background = "rgba(59,130,246,0.04)"; e.currentTarget.style.transform = "translateY(-3px)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.transform = "none"; }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "0.6rem", background: group.color === "blue" ? "rgba(59,130,246,0.12)" : "rgba(6,182,212,0.12)", border: `1px solid ${group.color === "blue" ? "rgba(59,130,246,0.25)" : "rgba(6,182,212,0.25)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                      {group.icon}
                    </div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.9rem", margin: 0 }}>{group.category}</h3>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {group.items.map((item) => (<SkillBadge key={item} label={item} color={group.color} />))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "7rem 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="section-reveal">
            <SectionHeader label="03 /" title="Projects" />
            <p style={{ color: "rgba(100,116,139,1)", fontSize: "0.95rem", marginTop: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>A selection of things I've built.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
              {PROJECTS.map((p) => (<ProjectCard key={p.title} project={p} />))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" style={{ padding: "7rem 0", background: "rgba(2,6,23,0.5)" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="section-reveal">
            <SectionHeader label="04 /" title="Certifications" />
            <div style={{ marginTop: "3.5rem", maxWidth: "760px" }}>
              <div style={{ position: "relative", paddingLeft: "1.75rem" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, #3B82F6, rgba(59,130,246,0.1))" }} />
                <div style={{ position: "absolute", left: "-5px", top: "2rem", width: "11px", height: "11px", borderRadius: "50%", background: "#3B82F6", boxShadow: "0 0 16px rgba(59,130,246,0.8)" }} />
                <div style={{ padding: "1.75rem", borderRadius: "1.1rem", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(8px)", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}>
                  {/* Header */}
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff", margin: "0 0 0.35rem" }}>{CERT.title}</h3>
                      <p style={{ color: "#60A5FA", fontSize: "0.875rem", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>{CERT.issuer}</p>
                    </div>
                    <span style={{ padding: "0.3rem 0.85rem", borderRadius: "999px", fontSize: "0.7rem", fontFamily: "'Space Mono', monospace", color: "#67E8F9", background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.25)", whiteSpace: "nowrap" }}>{CERT.date}</span>
                  </div>
                  {/* Bullet points */}
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    {CERT.points.map((pt, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.875rem", color: "rgba(100,116,139,1)", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                        <span style={{ color: "#3B82F6", marginTop: "2px", flexShrink: 0 }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {/* ✅ Certificate links */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.35rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    {CERT.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "0.5rem",
                          padding: "0.5rem 1rem", borderRadius: "0.6rem",
                          fontSize: "0.78rem", fontFamily: "'Space Mono', monospace",
                          textDecoration: "none", transition: "all 0.2s ease",
                          color: i === 0 ? "#93C5FD" : "#67E8F9",
                          border: `1px solid ${i === 0 ? "rgba(59,130,246,0.35)" : "rgba(6,182,212,0.35)"}`,
                          background: i === 0 ? "rgba(59,130,246,0.08)" : "rgba(6,182,212,0.08)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = i === 0 ? "rgba(59,130,246,0.2)" : "rgba(6,182,212,0.2)";
                          e.currentTarget.style.borderColor = i === 0 ? "rgba(59,130,246,0.7)" : "rgba(6,182,212,0.7)";
                          e.currentTarget.style.boxShadow = i === 0 ? "0 0 16px rgba(59,130,246,0.3)" : "0 0 16px rgba(6,182,212,0.3)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = i === 0 ? "rgba(59,130,246,0.08)" : "rgba(6,182,212,0.08)";
                          e.currentTarget.style.borderColor = i === 0 ? "rgba(59,130,246,0.35)" : "rgba(6,182,212,0.35)";
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.transform = "none";
                        }}
                      >
                        <CertIcon />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" style={{ padding: "7rem 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="section-reveal">
            <SectionHeader label="05 /" title="Education" />
            <div style={{ marginTop: "3.5rem", maxWidth: "680px" }}>
              <div style={{ position: "relative", padding: "2rem", borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.025)", backdropFilter: "blur(12px)", overflow: "hidden", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.35)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(59,130,246,0.1)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #3B82F6, #06B6D4, #3B82F6)" }} />
                <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.07), transparent)", pointerEvents: "none" }} />
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", position: "relative" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "0.85rem", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#60A5FA" }}>
                    <GradCapIcon />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#fff", margin: "0 0 0.4rem" }}>{EDUCATION.degree}</h3>
                    <p style={{ color: "#60A5FA", fontWeight: 500, fontSize: "0.9rem", margin: "0 0 1.25rem", fontFamily: "'DM Sans', sans-serif" }}>{EDUCATION.institution}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "rgba(100,116,139,1)", fontFamily: "'Space Mono', monospace" }}>
                        <span style={{ color: "#22D3EE", fontSize: "0.75rem" }}>◷</span>
                        {EDUCATION.period}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontFamily: "'Space Mono', monospace" }}>
                        <span style={{ color: "#22C55E", fontSize: "0.75rem" }}>✓</span>
                        <span style={{ color: "#4ADE80", fontWeight: 700 }}>CGPA: {EDUCATION.cgpa}</span>
                      </div>
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                      <span style={{ display: "inline-block", padding: "0.3rem 0.8rem", fontSize: "0.7rem", fontFamily: "'Space Mono', monospace", borderRadius: "999px", background: "rgba(34,197,94,0.1)", color: "#4ADE80", border: "1px solid rgba(34,197,94,0.25)" }}>
                        ● {EDUCATION.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "7rem 0", background: "rgba(2,6,23,0.5)" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="section-reveal">
            <SectionHeader label="06 /" title="Get In Touch" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start", marginTop: "3.5rem", maxWidth: "900px" }}>
              <div>
                <p style={{ fontSize: "1.05rem", color: "rgba(148,163,184,0.9)", lineHeight: 1.8, marginBottom: "2rem", fontFamily: "'DM Sans', sans-serif" }}>
                  I'm currently open to internship opportunities and interesting projects. Whether you have a question, want to collaborate, or just want to say hi — my inbox is always open.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    { label: "Email", value: "Pritamdutta35689@gmail.com", href: "mailto:Pritamdutta35689@gmail.com", icon: <EmailIcon />, accent: "#3B82F6" },
                    { label: "Phone", value: "+91 8250036245", href: "tel:+918250036245", icon: <PhoneIcon />, accent: "#06B6D4" },
                  ].map(({ label, value, href, icon, accent }) => (
                    <a key={label} href={href} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", borderRadius: "0.9rem", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", textDecoration: "none", transition: "all 0.25s ease" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${accent}55`; e.currentTarget.style.background = `${accent}0a`; e.currentTarget.style.transform = "translateX(4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.transform = "none"; }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "0.65rem", background: `${accent}15`, border: `1px solid ${accent}30`, display: "flex", alignItems: "center", justifyContent: "center", color: accent, flexShrink: 0 }}>{icon}</div>
                      <div>
                        <p style={{ fontSize: "0.7rem", color: "rgba(71,85,105,1)", margin: "0 0 0.15rem", fontFamily: "'Space Mono', monospace", letterSpacing: "0.08em" }}>{label.toUpperCase()}</p>
                        <p style={{ fontSize: "0.875rem", color: accent, margin: 0, fontFamily: "'Space Mono', monospace" }}>{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div style={{ padding: "1.75rem", borderRadius: "1.25rem", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)" }}>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "rgba(71,85,105,1)", marginBottom: "1.25rem", letterSpacing: "0.1em" }}>// send_message.form — UI preview only</p>
                {["Your name", "your@email.com"].map((ph) => (
                  <input key={ph} disabled placeholder={ph} style={{ width: "100%", display: "block", padding: "0.75rem 1rem", marginBottom: "0.85rem", borderRadius: "0.65rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(51,65,85,1)", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif", outline: "none", cursor: "not-allowed" }} />
                ))}
                <textarea disabled placeholder="Your message..." rows={4} style={{ width: "100%", display: "block", padding: "0.75rem 1rem", marginBottom: "0.85rem", borderRadius: "0.65rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(51,65,85,1)", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif", outline: "none", resize: "none", cursor: "not-allowed" }} />
                <button disabled style={{ width: "100%", padding: "0.75rem", borderRadius: "0.65rem", border: "none", background: "linear-gradient(135deg,rgba(37,99,235,0.5),rgba(8,145,178,0.5))", color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif", cursor: "not-allowed" }}>
                  Send Message — Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "2rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <p style={{ fontSize: "0.875rem", color: "rgba(71,85,105,1)", fontFamily: "'DM Sans', sans-serif", margin: 0 }}>
            Built with{" "}
            <span style={{ color: "#60A5FA" }}>React.js</span>{" "}
            <span style={{ color: "#EF4444" }}>♥</span>{" "}
            by <span style={{ color: "#fff", fontWeight: 500 }}>Pritam Dutta</span>
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(51,65,85,1)", fontFamily: "'Space Mono', monospace", margin: 0 }}>
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </footer>

    </div>
  );
}
