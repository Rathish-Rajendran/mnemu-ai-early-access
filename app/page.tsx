const earlyAccessUrl =
  process.env.NEXT_PUBLIC_EARLY_ACCESS_URL ?? "https://docs.google.com/forms/";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Unlost home">
          <span className="brand-mark" aria-hidden="true">u</span>
          <span>unlost</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#why">The problem</a>
          <a href="#how">How it works</a>
          <a href="#privacy">Privacy</a>
        </nav>
        <a className="button button-small button-dark" href={earlyAccessUrl} target="_blank" rel="noreferrer">
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
            Unlost turns scattered links, screenshots, notes, PDFs and videos
            into one private memory you can actually search.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={earlyAccessUrl} target="_blank" rel="noreferrer">
              Join the early access list <Arrow />
            </a>
            <a className="text-link" href="#how">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="microcopy">Free to join · No spam · Early members shape the product</p>
        </div>

        <div className="memory-demo" aria-label="Preview of Unlost search results">
          <div className="orbit orbit-one" aria-hidden="true">PDF</div>
          <div className="orbit orbit-two" aria-hidden="true">IMG</div>
          <div className="app-window">
            <div className="window-bar">
              <span className="window-brand"><span className="mini-mark">u</span> unlost</span>
              <span className="window-status">12,418 memories</span>
            </div>
            <div className="search-box">
              <span aria-hidden="true">⌕</span>
              <p>that video about pricing a new app...</p>
              <kbd>↵</kbd>
            </div>
            <div className="answer-card">
              <div className="answer-label">Best match</div>
              <h2>Start with one paid plan—not five.</h2>
              <p>
                The speaker recommends validating willingness to pay before
                building usage-based tiers.
              </p>
              <div className="source-row">
                <span className="source-icon video-icon" aria-hidden="true">▶</span>
                <div>
                  <strong>How to price your first SaaS</strong>
                  <small>YouTube · 18:42</small>
                </div>
                <span className="source-time">Jump to moment →</span>
              </div>
            </div>
            <div className="result-card">
              <span className="source-icon note-icon" aria-hidden="true">Aa</span>
              <div>
                <strong>Your note from 3 weeks ago</strong>
                <p>“Keep the free plan useful, but make the habit paid.”</p>
              </div>
            </div>
          </div>
          <div className="found-badge"><span aria-hidden="true">✓</span>Found in 0.8 sec</div>
        </div>
      </section>

      <section className="ticker" aria-label="Supported content types">
        <div>
          <span>LINKS</span><b>✦</b><span>VIDEOS</span><b>✦</b><span>NOTES</span>
          <b>✦</b><span>PDFs</span><b>✦</b><span>SCREENSHOTS</span><b>✦</b>
          <span>VOICE</span><b>✦</b><span>ANYTHING WORTH REMEMBERING</span>
        </div>
      </section>

      <section className="problem section" id="why">
        <div className="section-intro">
          <p className="section-number">01 / THE PROBLEM</p>
          <h2>Bookmarks aren&apos;t memory.</h2>
          <p>
            We save more than ever—and find less of it. The useful idea is
            somewhere in a folder, a chat, a screenshot or a video timeline.
          </p>
        </div>
        <div className="problem-grid">
          <article className="pain-card pain-card-blue">
            <span className="card-index">01</span>
            <div className="scribble" aria-hidden="true">427 saved</div>
            <h3>Saved ≠ found</h3>
            <p>Your bookmarks become a graveyard you promise to revisit.</p>
          </article>
          <article className="pain-card pain-card-lime">
            <span className="card-index">02</span>
            <div className="folder-stack" aria-hidden="true"><i>WORK</i><i>READ</i><i>LATER?</i></div>
            <h3>Folders become chores</h3>
            <p>Organizing everything takes more energy than saving it.</p>
          </article>
          <article className="pain-card pain-card-cream">
            <span className="card-index">03</span>
            <div className="forgotten-query" aria-hidden="true">“what was that thing…”</div>
            <h3>Keywords fail you</h3>
            <p>You remember the idea—but not the exact words or where it lived.</p>
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
            <div className="step-visual capture-visual" aria-hidden="true"><span>Share to unlost</span><b>+</b></div>
            <h3>Capture anything</h3>
            <p>Share from your phone, save from the browser, or upload directly.</p>
          </article>
          <article>
            <span className="step-number">2</span>
            <div className="step-visual understand-visual" aria-hidden="true">
              <span>summary</span><span>people</span><span>ideas</span><span>moments</span>
            </div>
            <h3>Let it understand</h3>
            <p>AI reads, listens and watches—then remembers the useful context.</p>
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
          <h2>Your second brain shouldn&apos;t belong to someone else.</h2>
          <p className="promise-copy">
            Unlost is being designed private by default. Your saved memories
            stay yours, remain traceable to their sources, and can be deleted
            whenever you choose.
          </p>
          <div className="promise-list">
            <span><b>01</b> Private by default</span>
            <span><b>02</b> Sources, not mystery answers</span>
            <span><b>03</b> Export and delete anytime</span>
          </div>
        </div>
      </section>

      <section className="final-cta section">
        <div className="spark spark-one" aria-hidden="true">✦</div>
        <div className="spark spark-two" aria-hidden="true">✦</div>
        <p className="section-number">COMING SOON</p>
        <h2>Stop losing the things<br />you wanted to remember.</h2>
        <p>Join the private beta and help build a calmer way to remember the internet.</p>
        <a className="button button-primary button-large" href={earlyAccessUrl} target="_blank" rel="noreferrer">
          Register for early access <Arrow />
        </a>
        <small>No spam. Just meaningful product updates and your invite.</small>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">u</span><span>unlost</span></a>
        <p>Your private memory for the internet.</p>
        <p>© 2026 Unlost · Built for curious minds.</p>
      </footer>
    </main>
  );
}
