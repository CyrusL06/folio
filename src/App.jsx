import { useEffect, useState } from "react";
 
import { nav, clients, projects, speaking, writing, social } from "./assets/data.js"

export default function App() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const revealNodes = document.querySelectorAll(".reveal");
    if (revealNodes.length === 0) return;

    document.body.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      document.body.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
        aria-hidden
      />

      <header className="site-header header-entrance">
        <a className="brand" href="#top" aria-label="Home">
          CL
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
          <div className="hero-inner hero-intro">
            <p className="kicker">Undergraduate</p>
            <h1>Cyrus Lorenzo</h1>
            <p className="hero-copy">
             Crafting digital expreriences from scratch, fueled by curiosity, 
             <br className="hidden"/>late-night commits and coffee  
            </p>
            <a className="scroll-down" href="#about">
              Scroll down ↓
            </a>
          </div>
        </section>

        <section id="about" className="section reveal">
          <h2>About</h2>
          <p>
            I'm an undegraduate Computer Information Systems student who build things
            before fully knowing how - and figure things out along the way.
            Im still exploring where I fit in the tech world, but that curiosity is exactly 
            what drives me. Whether it's a front-end interface, a back-end logic puzzle. I show up,
            open a terminal and start typing. Late nights, cold coffee, and a stubborns refusal to 
            leave a bug unsolved ~that's my process.
          </p>
          
          <p>

          </p>
          <p className="clients-line">
            <strong>Clients and Employers:</strong> {clients.join(", ")}.
          </p>
        </section>

        <section id="projects" className="section reveal">
          <h2>Projects</h2>
          <div className="list">
            {projects.map((item, index) => (
              <article
                key={item.title}
                className="list-item reveal"
                style={{ "--delay": `${index * 90}ms` }}
              >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <a href={item.link}>See project</a>
              </article>
            ))}
          </div>
        </section>

        {/* <section id="speaking" className="section reveal">
          <h2>Speaking</h2>
          <ul className="entry-list">
            {speaking.map((item, index) => (
              <li
                key={item.title}
                className="entry reveal"
                style={{ "--delay": `${index * 90}ms` }}
              >
                <p className="entry-title">
                  {item.title} <span>| {item.venue}</span>
                </p>
                <a href={item.link}>See event</a>
              </li>
            ))}
          </ul>
        </section> */}

        <section id="writing" className="section reveal">
          <h2>Writing</h2>
          <ul className="entry-list">
            {writing.map((item, index) => (
              <li
                key={item.title}
                className="entry reveal"
                style={{ "--delay": `${index * 90}ms` }}
              >
                <p className="entry-title">
                  <span >{item.date}</span> <br/>{`${item.title}`}
                </p>
                <a href={item.link}>Read article</a>
              </li>
            ))}
          </ul>
        </section>

        <section id="connect" className="section reveal">
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
