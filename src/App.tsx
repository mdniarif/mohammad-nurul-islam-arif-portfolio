import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import {
  ArrowDown, ArrowUpRight, Menu, X, Mail, Phone, MapPin, Linkedin,
  FileText, ShieldCheck, Users, Database, BarChart3, MessageCircle,
  HeartHandshake, Globe2, ChevronRight, ExternalLink
} from "lucide-react";

const email = "mdnurulislam.ctg@gmail.com";
const phone1 = "01865-651578";
const phone2 = "01646-164816";

const experience = [
  {
    period: "FEB 2026 — PRESENT",
    role: "Community Engagement and Identity Management Associate",
    org: "Young Power in Social Action (YPSA) · WFP-supported GFA",
    place: "Ukhiya, Cox’s Bazar",
    points: [
      "Lead community engagement, awareness and SBCC activities, supporting timely dissemination of GFA information.",
      "Conduct beneficiary identity verification, inclusion/exclusion verification, vulnerability validation and household follow-up.",
      "Maintain beneficiary databases and field datasets with attention to accuracy, confidentiality and data protection.",
      "Prepare daily, weekly and monthly monitoring, community engagement and analytical reports.",
      "Coordinate with Programme, MEAL, CFM, Protection, WFP and partner teams."
    ]
  },
  {
    period: "JAN 2026 — FEB 2026",
    role: "Assistant CFM Officer",
    org: "Islamic Relief Bangladesh · Humanitarian Crisis Response Programme",
    place: "Bhasan Char",
    points: [
      "Supported multi-channel CFM/CFRM processes, including complaint categorization and follow-up.",
      "Handled confidential and sensitive complaints using survivor-centred approaches and appropriate referral pathways.",
      "Coordinated with WFP and programme teams for referral, follow-up and case resolution.",
      "Maintained complaint trackers, case records and databases; analysed complaint trends and prepared CFM updates."
    ]
  },
  {
    period: "JAN 2025 — DEC 2025",
    role: "Assistant M&E",
    org: "Community Development Centre (CODEC)",
    place: "Bhasan Char",
    points: [
      "Supported MEAL planning, routine monitoring, field verification and implementation follow-up.",
      "Managed beneficiary databases and supported surveys, PDM, FGDs and KIIs.",
      "Conducted data checking, cleaning, validation and basic analysis for programme reporting."
    ]
  },
  {
    period: "JAN 2022 — DEC 2024",
    role: "Assistant Project Officer — Helpdesk",
    org: "Community Development Centre (CODEC) · WFP GFA",
    place: "Cox’s Bazar and Bhasan Char",
    points: [
      "Supported multi-channel CFM under WFP GFA through helpdesk, field and community feedback channels.",
      "Received, recorded, categorized and tracked complaints, requests and information needs.",
      "Maintained complaint trackers, beneficiary databases and reporting tools.",
      "Supported beneficiary verification, targeting, inclusion/exclusion exercises and community awareness."
    ]
  },
  {
    period: "JAN 2021 — DEC 2021",
    role: "Help Desk Assistant / Data Entry",
    org: "Save the Children International",
    place: "Ukhiya",
    points: [
      "Received and recorded beneficiary complaints, requests and feedback through established helpdesk channels.",
      "Maintained confidential case records and databases and supported accurate case tracking.",
      "Verified information, supported data quality checks and prepared routine summaries."
    ]
  },
  {
    period: "JAN 2020 — DEC 2020",
    role: "Data Entry Operator",
    org: "Young Power in Social Action (YPSA)",
    place: "Cox’s Bazar",
    points: [
      "Entered, checked and verified field and programme data.",
      "Maintained databases and supported data cleaning, validation and routine reporting."
    ]
  }
];

const competencies = [
  { icon: MessageCircle, title: "CFM & Accountability", detail: "Complaint and feedback systems, helpdesk operations, referral, follow-up and resolution tracking." },
  { icon: BarChart3, title: "MEAL & Monitoring", detail: "Routine monitoring, PDM, field verification, FGDs, KIIs and analytical reporting." },
  { icon: Database, title: "Data Management", detail: "Beneficiary databases, data cleaning, validation, reconciliation and quality assurance." },
  { icon: Users, title: "Community Engagement", detail: "Community sensitization, SBCC, RFSC engagement, mobilization and AAP." },
  { icon: ShieldCheck, title: "Safeguarding & PSEA", detail: "Confidentiality, survivor-centred approaches, safe referral and protection-sensitive communication." },
  { icon: HeartHandshake, title: "Beneficiary Management", detail: "Identity verification, vulnerability validation and inclusion/exclusion verification." }
];

const skillGroups = [
  { name: "Data & Digital Tools", skills: ["Microsoft Excel", "Kobo Toolbox", "ODK Collect", "Database Management", "Data Cleaning & Validation", "Trackers & Dashboards"] },
  { name: "Programme & Accountability", skills: ["CFM / CFRM", "MEAL", "AAP", "PDM", "Beneficiary Verification", "Safeguarding & PSEA"] },
  { name: "Communication & Fieldwork", skills: ["Community Engagement", "SBCC", "Community Mobilization", "Reporting", "Stakeholder Coordination", "FGDs & KIIs"] }
];

const training = [
  "Safeguarding — Save the Children International",
  "Complaint & Feedback Mechanism — WFP / CODEC",
  "PSEA — WFP / SCI / CODEC",
  "Gender & Disability Inclusion — CODEC",
  "Code of Conduct — YPSA / SCI / CODEC",
  "Excel Essentials for Workplace Productivity — UNICEF / Passport to Earning"
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setIntroDone(true); return; }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setIntroDone(true) });
      tl.fromTo(".pre-name span", { y: 32, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.045, duration: 0.55, ease: "power3.out" })
        .fromTo(".pre-role", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.12")
        .fromTo(".pre-line", { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, "-=0.05")
        .to(introRef.current, { opacity: 0, duration: 0.45, delay: 0.25, onComplete: () => setIntroDone(true) });
    }, introRef);
    const fallback = window.setTimeout(() => setIntroDone(true), 2800);
    return () => { ctx.revert(); window.clearTimeout(fallback); };
  }, []);

  useEffect(() => {
    if (!introDone || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-kicker, .hero-title, .hero-sub, .hero-actions", {
        y: 24, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out", delay: 0.05
      });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(el, { y: 28, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.75, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" }
        });
      });
    }, heroRef);
    return () => ctx.revert();
  }, [introDone]);

  const closeMenu = () => setMenuOpen(false);
  const nav = ["About", "Expertise", "Experience", "Training", "Contact"];

  return (
    <>
      {!introDone && <div className="preloader" ref={introRef} aria-label="Loading portfolio">
        <div className="pre-inner">
          <div className="pre-name">{ "MOHAMMAD NURUL ISLAM".split("").map((c, i) => <span key={i}>{c === " " ? "\u00a0" : c}</span>) }</div>
          <div className="pre-role">HUMANITARIAN PROFESSIONAL · CFM · MEAL · GFA</div>
          <div className="pre-track"><div className="pre-line" /></div>
          <div className="pre-label">INITIALIZING PORTFOLIO <span>01 / 01</span></div>
        </div>
      </div>}

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Mohammad Nurul Islam home">
          <span className="brand-mark">MN</span><span className="brand-text">MOHAMMAD NURUL ISLAM<small>HUMANITARIAN PROFESSIONAL</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          {nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={closeMenu}>{n}</a>)}
          <a className="nav-contact" href={`mailto:${email}`}>LET’S CONNECT <ArrowUpRight size={14}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" ref={heroRef}>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="red-dot"/> HUMANITARIAN PROGRAMME · COX’S BAZAR, BANGLADESH</div>
              <h1 className="hero-title">Accountability<br/>that <em>listens.</em><br/><span>Impact that matters.</span></h1>
              <p className="hero-sub">I’m <strong>Mohammad Nurul Islam</strong> — a humanitarian professional working across Complaint & Feedback Mechanisms, MEAL, community engagement and beneficiary data management in WFP-supported General Food Assistance programmes.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#experience">Explore my experience <ArrowDown size={16}/></a>
                <a className="button button-light" href={`mailto:${email}`}>Get in touch <ArrowUpRight size={16}/></a>
              </div>
              <div className="hero-meta"><span>01 / PROFILE</span><span>CFM · MEAL · AAP · GFA</span></div>
            </div>
            <div className="hero-visual" aria-label="Profile illustration">
              <div className="visual-top"><span>FIELD-ROOTED</span><span>PEOPLE-CENTRED</span></div>
              <div className="portrait-frame">
                <div className="portrait-halo"/>
                <div className="portrait-monogram">MN<span>.</span></div>
                <div className="portrait-caption"><span>MOHAMMAD<br/>NURUL ISLAM</span><span>BD<br/>2026</span></div>
              </div>
              <div className="visual-stamp"><Globe2 size={15}/> HUMANITARIAN<br/>RESPONSE</div>
              <div className="visual-bottom"><span>UKHIYA, COX’S BAZAR</span><span>22° 55′ N / 92° 00′ E</span></div>
            </div>
          </div>
          <div className="hero-bottomline"><span>COMMITMENT TO ACCOUNTABILITY</span><span>SCROLL TO DISCOVER ↓</span></div>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="section-label reveal"><span>01</span> ABOUT</div>
          <div className="intro-layout">
            <h2 className="reveal">Grounded in the field.<br/><em>Driven by accountability.</em></h2>
            <div className="intro-text reveal">
              <p>I work at the intersection of humanitarian assistance, community engagement and accountability. My experience spans WFP-supported General Food Assistance programmes and humanitarian response settings in Cox’s Bazar and Bhasan Char.</p>
              <p>Across roles with YPSA, Islamic Relief Bangladesh, CODEC and Save the Children International, I have supported complaint and feedback processes, beneficiary verification, monitoring, data quality and reporting — with a focus on making programme information clear and services more responsive to affected communities.</p>
              <div className="inline-facts"><div><b>2020—NOW</b><span>Humanitarian programme experience</span></div><div><b>GFA / CFM</b><span>Core programme focus</span></div></div>
            </div>
          </div>
        </section>

        <section className="expertise-section section-pad" id="expertise">
          <div className="section-head reveal"><div className="section-label"><span>02</span> CORE EXPERTISE</div><p>Practical capabilities built through field operations, programme support and direct community engagement.</p></div>
          <div className="expertise-grid">
            {competencies.map((item, i) => {
              const Icon = item.icon;
              return <article className="expertise-card reveal" key={item.title}>
                <div className="card-index">0{i+1}</div><Icon size={23} strokeWidth={1.6}/><h3>{item.title}</h3><p>{item.detail}</p>
                <div className="card-rule"/>
              </article>;
            })}
          </div>
        </section>

        <section className="experience-section section-pad" id="experience">
          <div className="section-head reveal"><div><div className="section-label"><span>03</span> PROFESSIONAL JOURNEY</div><h2>Experience shaped<br/><em>by real-world response.</em></h2></div><p>Roles across humanitarian organizations, with a consistent focus on accountability, field monitoring and reliable programme information.</p></div>
          <div className="timeline">
            {experience.map((job, i) => <article className="timeline-item reveal" key={job.role}>
              <div className="timeline-period">{job.period}</div>
              <div className="timeline-content">
                <div className="timeline-marker"/>
                <h3>{job.role}</h3><div className="timeline-org">{job.org}</div><div className="timeline-place"><MapPin size={13}/>{job.place}</div>
                <ul>{job.points.map(p => <li key={p}>{p}</li>)}</ul>
              </div>
            </article>)}
          </div>
        </section>

        <section className="skills-section section-pad">
          <div className="section-label reveal"><span>04</span> SKILLS & TOOLS</div>
          <div className="skills-layout">
            <h2 className="reveal">The tools behind<br/><em>the work.</em></h2>
            <div className="skill-groups">
              {skillGroups.map((group, i) => <div className="skill-group reveal" key={group.name}>
                <div className="skill-group-title"><span>0{i+1}</span>{group.name}</div>
                <div className="skill-pills">{group.skills.map(s => <span key={s}>{s}</span>)}</div>
              </div>)}
            </div>
          </div>
        </section>

        <section className="training-section section-pad" id="training">
          <div className="section-head reveal"><div><div className="section-label"><span>05</span> TRAINING & LEARNING</div><h2>Committed to<br/><em>responsible practice.</em></h2></div><p>Selected training and certifications documented in my professional records.</p></div>
          <div className="training-list">
            {training.map((t, i) => <div className="training-row reveal" key={t}><span>0{i+1}</span><p>{t}</p><ShieldCheck size={17}/></div>)}
          </div>
        </section>

        <section className="education-section section-pad">
          <div className="section-label reveal"><span>06</span> EDUCATION & LANGUAGES</div>
          <div className="education-grid">
            <div className="education-card reveal"><span className="eyebrow">ACADEMIC BACKGROUND</span><h3>Bachelor of Business Studies</h3><p>Accounting · Sir Ashutosh Government College</p><small>National University · 2020</small></div>
            <div className="education-card reveal"><span className="eyebrow">LANGUAGES</span><div className="language-row"><b>Bangla</b><span>Native</span></div><div className="language-row"><b>Chittagonian</b><span>Fluent</span></div><div className="language-row"><b>English</b><span>Good</span></div></div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="section-label reveal"><span>07</span> CONTACT</div>
          <div className="contact-main reveal">
            <div><span className="eyebrow">OPEN TO PROFESSIONAL CONNECTIONS</span><h2>Let’s make<br/><em>assistance count.</em></h2></div>
            <a className="contact-arrow" href={`mailto:${email}`} aria-label="Email Mohammad Nurul Islam"><ArrowUpRight size={38}/></a>
          </div>
          <div className="contact-details">
            <a href={`mailto:${email}`}><Mail size={17}/><span>{email}</span><ExternalLink size={13}/></a>
            <a href={`tel:${phone1.replaceAll("-", "")}`}><Phone size={17}/><span>{phone1}</span></a>
            <a href={`tel:${phone2.replaceAll("-", "")}`}><Phone size={17}/><span>{phone2}</span></a>
            <div><MapPin size={17}/><span>Ukhiya, Cox’s Bazar, Bangladesh</span></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">MN</span><span className="brand-text">MOHAMMAD NURUL ISLAM<small>HUMANITARIAN PROFESSIONAL</small></span></a>
        <span>© {new Date().getFullYear()} MOHAMMAD NURUL ISLAM</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

export default App;