import { httpsUrl } from "../lib/safe-url";

const earlyAccessUrl = httpsUrl(process.env.NEXT_PUBLIC_EARLY_ACCESS_URL);

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="mnemu.ai home">
          <span className="brand-mark" aria-hidden="true">m</span>
          <span>mnemu.ai</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#why">The problem</a>
          <a href="#how">How it works</a>
          <a href="#privacy">Privacy</a>
        </nav>
        <a className="button button-small button-dark" href={earlyAccessUrl} target="_blank" rel="noopener noreferrer">
          Get early access <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" aria-hidden="true" />
            Private beta · Coming soon
          </div>
          <h1>
            You saved it.<br />Now <span>where is it?</span>
          </h1>
          <p className="hero-description">
            Send Reels, links, screenshots, notes, videos or files to mnemu.ai.
            It remembers and organizes everything for you, so you can retrieve the right thing in an instant.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={earlyAccessUrl} target="_blank" rel="noopener noreferrer">
              Join the early access list <Arrow />
            </a>
            <a className="text-link" href="#how">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="microcopy">Free to join · No spam · Early members shape the product</p>
        </div>

        <div className="memory-demo" aria-label="Preview of mnemu.ai search results">
          <div className="orbit orbit-one" aria-hidden="true">PDF</div>
          <div className="orbit orbit-two" aria-hidden="true">IMG</div>
          <div className="app-window">
            <div className="window-bar">
              <span className="window-brand"><span className="mini-mark">m</span> mnemu.ai</span>
              <span className="window-status">12,418 memories</span>
            </div>
            <div className="search-box">
              <span aria-hidden="true">⌕</span>
              <p>that Reel about a high-protein pasta recipe...</p>
              <kbd>↵</kbd>
            </div>
            <div className="answer-card">
              <div className="answer-label">Best match</div>
              <h2>Blend cottage cheese into the sauce.</h2>
              <p>
                The recipe uses cottage cheese, tomato sauce and pasta water
                for a creamy, high-protein sauce.
              </p>
              <div className="source-row">
                <span className="source-icon video-icon" aria-hidden="true">▶</span>
                <div>
                  <strong>Creamy high-protein pasta</strong>
                  <small>Instagram Reel · 00:31</small>
                </div>
                <span className="source-time">Jump to moment →</span>
              </div>
            </div>
            <div className="result-card">
              <span className="source-icon note-icon" aria-hidden="true">Aa</span>
              <div>
                <strong>Your note from 3 weeks ago</strong>
                <p>“Add spinach and chilli flakes before serving.”</p>
              </div>
            </div>
          </div>
          <div className="found-badge"><span aria-hidden="true">✓</span>Found in 0.8 sec</div>
        </div>
      </section>

      <section className="ticker" aria-label="Supported content types">
        <div>
          <span>INSTAGRAM REELS</span><b>✦</b><span>YOUTUBE</span>
          <b>✦</b><span>SCREENSHOTS</span><b>✦</b><span>PDFs</span><b>✦</b>
          <span>NOTES</span><b>✦</b><span>ANYTHING WORTH REMEMBERING</span>
        </div>
      </section>

      <section className="problem section" id="why">
        <div className="section-intro">
          <p className="section-number">01 / THE PROBLEM</p>
          <h2>Everything worth remembering is trapped somewhere else.</h2>
          <p>
            A useful Reel saved on Instagram. A useful piece of information sent to yourself on WhatsApp.
            A screenshot buried in Photos. You saved it because it mattered.
          </p>
        </div>
        <div className="problem-grid">
          <article className="pain-card pain-card-blue">
            <span className="card-index">01</span>
            <div className="scribble" aria-hidden="true">saved across 7 apps</div>
            <h3>Scattered across apps</h3>
            <p>Your knowledge is divided between Instagram, YouTube, WhatsApp, screenshots and files.</p>
          </article>
          <article className="pain-card pain-card-lime">
            <span className="card-index">02</span>
            <div className="folder-stack" aria-hidden="true"><i>INSTAGRAM</i><i>WHATSAPP</i><i>PHOTOS</i></div>
            <h3>Saved, but effectively lost</h3>
            <p>App-specific saves and self-chats quickly become searchable graveyards.</p>
          </article>
          <article className="pain-card pain-card-cream">
            <span className="card-index">03</span>
            <div className="forgotten-query" aria-hidden="true">“what was that thing…”</div>
            <h3>You remember the idea</h3>
            <p>Traditional search fails when you forget the title, wording and which app contained it.</p>
          </article>
        </div>
      </section>

      <section className="how section" id="how">
        <div className="how-heading">
          <p className="section-number">02 / THE BETTER WAY</p>
          <h2>From “I saw this somewhere” to right here.</h2>
        </div>
        <div className="steps">
          <article>
            <span className="step-number">1</span>
            <div className="step-visual capture-visual" aria-hidden="true"><span>Share to mnemu.ai</span><b>+</b></div>
            <h3>Capture from anywhere</h3>
            <p>Share from your phone, browser or the apps you already use.</p>
          </article>
          <article>
            <span className="step-number">2</span>
            <div className="step-visual understand-visual" aria-hidden="true">
              <span>summary</span><span>people</span><span>ideas</span><span>moments</span>
            </div>
            <h3>Let it understand</h3>
            <p>AI reads, listens and watches what the source allows, then remembers the useful context.</p>
          </article>
          <article>
            <span className="step-number">3</span>
            <div className="step-visual recall-visual" aria-hidden="true"><span>Ask naturally...</span><b>→</b></div>
            <h3>Recall in seconds</h3>
            <p>Ask the way you remember. Get the exact source, page or timestamp.</p>
          </article>
        </div>
      </section>

      <section className="promise section" id="privacy">
        <div className="promise-card">
          <p className="section-number">03 / OUR PROMISE</p>
          <h2>Your memories are personal. We&apos;re building mnemu.ai to keep them that way.</h2>
          <p className="promise-copy">
            Your saved content will be private to your account, encrypted in transit
            and at rest, and never made public unless you choose to share it.
          </p>
          <div className="promise-list">
            <span><b>01</b> Private by default</span>
            <span><b>02</b> Export or delete your memories</span>
          </div>
        </div>
      </section>

      <section className="final-cta section">
        <div className="spark spark-one" aria-hidden="true">✦</div>
        <div className="spark spark-two" aria-hidden="true">✦</div>
        <p className="section-number">COMING SOON</p>
        <h2>Stop losing the things<br />you wanted to remember.</h2>
        <p>Join the private beta and help build a calmer way to remember the internet.</p>
        <a className="button button-primary button-large" href={earlyAccessUrl} target="_blank" rel="noopener noreferrer">
          Register for early access <Arrow />
        </a>
        <small>Your email is used only for beta invitations and meaningful product updates. Registration is managed through Google Forms.</small>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">m</span><span>mnemu.ai</span></a>
        <p>Your private memory across apps.</p>
        <p>© 2026 mnemu.ai · Built for curious minds.</p>
      </footer>
    </main>
  );
}
