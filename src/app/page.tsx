import { TornButton } from "@/components/TornButton";
import { links, profile } from "@/lib/site";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <main id="main" className="bio-shell">
        <section className="bio-card" aria-label="Profile">
          <div className="avatar-wrap">
            <div className="avatar" aria-hidden>
              <span>{profile.initials}</span>
            </div>
          </div>
          <h1 className="bio-name">{profile.name}</h1>
          <p className="bio-title">{profile.title}</p>
          <div className="bio-links">
            <TornButton href={links.linkedin} external>
              LinkedIn
            </TornButton>
            <TornButton href="/contact">Contact</TornButton>
          </div>
        </section>
      </main>
    </>
  );
}
