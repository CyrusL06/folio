import { useEffect, useState } from "react";

const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Speaking", href: "#speaking" },
  { label: "Writing", href: "#writing" },
  { label: "Connect", href: "#connect" },
];

const clients = [
  "Daydream",
  "Google",
  "Mistral",
  "OpenAI",
  "Pinterest",
  "WPP",
];

const projects = [
  {
    title: "A brand's hit song: impossible till possible",
    body: "How the AI songs we create can spark nostalgia and emotional value that grows over time.",
    link: "#",
  },
  {
    title: "How to make an AI-generated song chart",
    body: "How AI can help identify and shape the elements of songs that can top charts.",
    link: "#",
  },
  {
    title: "Apple + AI: New hardware in the age of AI",
    body: "How AI developments may redefine interfaces and set the path for future devices.",
    link: "#",
  },
];

const speaking = [
  { title: "Future of AI and Music", venue: "TEDx", link: "#" },
  { title: "How AI is changing creativity", venue: "Web Summit", link: "#" },
  { title: "AI and Storytelling", venue: "SXSW", link: "#" },
  { title: "Generative media systems", venue: "Google", link: "#" },
  { title: "Machine creativity in products", venue: "Meta", link: "#" },
];

const writing = [
  {
    date: "February 15, 2024",
    title: "Why 2024 will be the turning point for AI-native creativity",
    link: "#",
  },
];

const social = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "X / Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function App() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
        aria-hidden
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Home">
          VR
        </a>
        <nav>
          {nav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <p className="kicker">Vittorio Rivabella</p>
            <h1>Engineer, AI Researcher & Speaker.</h1>
            <p className="hero-copy">
              I am helping people and businesses adopt AI thoughtfully and
              effectively, turning machine intelligence into practical outcomes.
            </p>
            <a className="scroll-down" href="#about">
              Scroll down
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>
            I am a Product Engineer and AI Researcher. Over the last years I
            have worked with top tech companies and startups, and with global
            brands and marketing teams, to turn AI capabilities into products
            that people actually use.
          </p>
          <p>
            I split my work between strategy, prototyping, and speaking about
            where AI is heading next.
          </p>
          <p className="clients-line">
            <strong>Clients and Employers:</strong> {clients.join(", ")}.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="list">
            {projects.map((item) => (
              <article key={item.title} className="list-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <a href={item.link}>See project</a>
              </article>
            ))}
          </div>
        </section>

        <section id="speaking" className="section">
          <h2>Speaking</h2>
          <ul className="entry-list">
            {speaking.map((item) => (
              <li key={item.title} className="entry">
                <p className="entry-title">
                  {item.title} <span>| {item.venue}</span>
                </p>
                <a href={item.link}>See event</a>
              </li>
            ))}
          </ul>
        </section>

        <section id="writing" className="section">
          <h2>Writing</h2>
          <ul className="entry-list">
            {writing.map((item) => (
              <li key={item.title} className="entry">
                <p className="entry-title">
                  <span>{item.date}</span> {item.title}
                </p>
                <a href={item.link}>Read article</a>
              </li>
            ))}
          </ul>
        </section>

        <section id="connect" className="section">
          <h2>Connect</h2>
          <div className="connect-links">
            {social.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
