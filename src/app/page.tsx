import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Header />
      
      <main>
        {/* ── Hero ── */}
        <section className="hero" aria-labelledby="hero-heading">
          {/* Left: Image */}
          <div className="hero-visual">
            <img
              src="/hero-kitchen.jpg"
              alt="Professional chef's workstation bathed in golden hour light with fresh herbs and copper pots"
              className="hero-image"
              id="hero-img"
            />
            <div className="voice-badge" aria-hidden="true">
              <div className="pulse">
                <span className="material-symbols-outlined">mic</span>
              </div>
              <div className="voice-badge-text">
                <p>Voice Driven</p>
                <span>Hands-free in the kitchen</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="dot"></span>
              Coming Soon
            </div>

            <h1 className="hero-headline" id="hero-heading">
              Something<br/><em>Delicious</em><br/>is Simmering.
            </h1>

            <p className="hero-subline">
              The ultimate voice-driven tool for professional chefs to record, manage, and share recipes — built for the heat of the line, designed for the soul of the kitchen.
            </p>

            {/* Waitlist Form */}
            <div className="waitlist-form-wrap" id="waitlist">
              <WaitlistForm 
                id="hero-form"
                buttonText="Notify Me"
                successId="hero-success"
              />
              <p className="waitlist-meta">
                <span className="material-symbols-outlined">lock</span>
                No spam. Join 500+ chefs already on the waitlist.
              </p>
            </div>

            {/* Social Proof */}
            <div className="social-proof" aria-label="Early adopters">
              <div className="avatars" aria-hidden="true">
                <div className="avatar avatar-a">MR</div>
                <div className="avatar avatar-b">SC</div>
                <div className="avatar avatar-c">JL</div>
                <div className="avatar avatar-d">AT</div>
              </div>
              <div className="social-proof-text">
                <p>500+ chefs waiting</p>
                <span>Be the first to experience it</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features Bento ── */}
        <section className="features-section" id="features" aria-labelledby="features-heading">
          <div className="container">
            <header className="section-header reveal">
              <p className="section-eyebrow">Built for the Brigade</p>
              <h2 className="section-title" id="features-heading">
                Every tool a chef <em>actually needs</em>
              </h2>
              <p className="section-sub">No bloat. No learning curves. Just intelligence that keeps pace with the pass.</p>
            </header>

            <div className="bento-grid">
              {/* Card 1 – Smart Journals */}
              <div className="bento-card bento-card-1 reveal">
                <div className="card-icon">
                  <span className="material-symbols-outlined">auto_stories</span>
                </div>
                <h3 className="card-title">Smart Journals</h3>
                <p className="card-body">Turn kitchen chaos into beautiful digital masterworks. Dictate as you cook — Heard Chef formats, structures, and archives automatically.</p>
                <div className="card-stat" aria-label="3x faster recipe logging">
                  <span className="stat-number">3×</span>
                  <span className="stat-label">Faster<br/>Recipe Logging</span>
                </div>
              </div>

              {/* Card 2 – Chef Networks */}
              <div className="bento-card bento-card-2 reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="card-icon">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <h3 className="card-title">Chef Networks</h3>
                <p className="card-body">Privately share prep lists, mise en place, and seasonal inspirations with your brigade instantly. Real-time collaboration built for the kitchen hierarchy.</p>
                <div className="card-visual-strip" aria-label="Status indicators">
                  <div className="strip-pill"><span className="dot dot-green"></span>Chef Marco — Online</div>
                  <div className="strip-pill"><span className="dot dot-orange"></span>Sous Chef — Reviewing</div>
                  <div className="strip-pill"><span className="dot dot-yellow"></span>Pastry — In Service</div>
                </div>
              </div>

              {/* Card 3 – Food Costing */}
              <div className="bento-card bento-card-3 reveal" style={{ transitionDelay: '0.05s' }}>
                <div className="card-icon">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h3 className="card-title">Food Costing</h3>
                <p className="card-body">Intuitive margins and inventory tracking that feels as natural as a chef&apos;s knife. Know your numbers without leaving the kitchen.</p>
              </div>

              {/* Card 4 – Voice First */}
              <div className="bento-card bento-card-4 reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="card-icon">
                  <span className="material-symbols-outlined">mic</span>
                </div>
                <h3 className="card-title">Voice First</h3>
                <p className="card-body">Designed for chefs with wet hands and full attention on the plate. No typing, no scrolling — just speak and Heard Chef listens.</p>
              </div>

              {/* Card 5 – Scale & Adapt */}
              <div className="bento-card bento-card-5 reveal" style={{ transitionDelay: '0.15s' }}>
                <div className="card-icon">
                  <span className="material-symbols-outlined">tune</span>
                </div>
                <h3 className="card-title">Scale & Adapt</h3>
                <p className="card-body">Convert a recipe for 4 covers to 400 in seconds. Heard Chef recalculates every gram, liter, and portion automatically.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonial Scroll ── */}
        <section className="quote-section" aria-labelledby="quotes-heading">
          <div className="container" style={{ marginBottom: '3rem' }}>
            <p className="section-eyebrow reveal" style={{ textAlign: 'center' }}>Early Praise</p>
            <h2 className="section-title reveal" id="quotes-heading" style={{ marginInline: 'auto', textAlign: 'center' }}>
              Chefs are <em>already talking</em>
            </h2>
          </div>
          <div className="quote-track-wrapper" aria-label="Chef testimonials carousel">
            <div className="quote-track" id="quote-track">
              {/* Duplicate set for seamless loop */}
              {[1, 2].map((i) => (
                <div key={i} style={{ display: 'contents' }}>
                  <div className="quote-card">
                    <div className="quote-stars" aria-label="5 stars">
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                    </div>
                    <p className="quote-text">&quot;Finally an app that speaks kitchen. I tested it during a tasting menu service and it never missed a beat.&quot;</p>
                    <div className="quote-author">
                      <div className="quote-avatar avatar-a">MR</div>
                      <div className="quote-author-info">
                        <p>Marco Ricci</p>
                        <span>Executive Chef, Milan</span>
                      </div>
                    </div>
                  </div>
                  <div className="quote-card">
                    <div className="quote-stars" aria-label="5 stars">
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                    </div>
                    <p className="quote-text">&quot;Costing has always been my weak point. Heard Chef made it feel like second nature — almost as intuitive as seasoning.&quot;</p>
                    <div className="quote-author">
                      <div className="quote-avatar avatar-b">SC</div>
                      <div className="quote-author-info">
                        <p>Sofia Chen</p>
                        <span>Pastry Chef, London</span>
                      </div>
                    </div>
                  </div>
                  <div className="quote-card">
                    <div className="quote-stars" aria-label="5 stars">
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                    </div>
                    <p className="quote-text">&quot;Sharing prep lists with my brigade used to take 20 minutes every morning. Now it&apos;s a two-second voice command.&quot;</p>
                    <div className="quote-author">
                      <div className="quote-avatar avatar-c">JL</div>
                      <div className="quote-author-info">
                        <p>James Laurent</p>
                        <span>Head Chef, New York</span>
                      </div>
                    </div>
                  </div>
                  <div className="quote-card">
                    <div className="quote-stars" aria-label="5 stars">
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                    </div>
                    <p className="quote-text">&quot;The recipe scaling alone is worth it. I ran a pop-up for 200 people last week and recalculated the whole menu in under a minute.&quot;</p>
                    <div className="quote-author">
                      <div className="quote-avatar avatar-d">AT</div>
                      <div className="quote-author-info">
                        <p>Amara Toure</p>
                        <span>Private Chef, Paris</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="how-section" id="how" aria-labelledby="how-heading">
          <div className="container">
            <header className="section-header reveal">
              <p className="section-eyebrow">Simple as Service</p>
              <h2 className="section-title" id="how-heading">
                From the pass to<br/><em>perfectly documented</em>
              </h2>
            </header>

            <div className="steps-grid">
              <div className="step reveal">
                <span className="step-number" aria-hidden="true">01</span>
                <div className="step-icon">
                  <span className="material-symbols-outlined">mic</span>
                </div>
                <h3>Speak your recipe</h3>
                <p>Just talk. Heard Chef captures your voice in real time, even over the noise of a busy service with background sounds and multiple voices.</p>
              </div>
              <div className="step reveal" style={{ transitionDelay: '0.1s' }}>
                <span className="step-number" aria-hidden="true">02</span>
                <div className="step-icon">
                  <span className="material-symbols-outlined">auto_fix_high</span>
                </div>
                <h3>AI formats &amp; structures</h3>
                <p>Our kitchen-trained AI turns raw dictation into beautifully structured recipes with ingredients, steps, timings, and yield — auto-calculated.</p>
              </div>
              <div className="step reveal" style={{ transitionDelay: '0.2s' }}>
                <span className="step-number" aria-hidden="true">03</span>
                <div className="step-icon">
                  <span className="material-symbols-outlined">share</span>
                </div>
                <h3>Share with the brigade</h3>
                <p>Send to your whole team instantly. Control who sees what — from the full recipe to a stripped-down prep list for the line cook.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <p className="cta-overline reveal">Early Access</p>
            <h2 className="cta-headline reveal" id="cta-heading">
              Be first in the<br/><em>kitchen</em>
            </h2>
            <p className="cta-sub reveal">Join hundreds of professional chefs who are shaping the future of kitchen technology. Early access members get lifetime perks.</p>

            <div className="reveal">
              <WaitlistForm 
                id="cta-form"
                buttonText="Join Waitlist"
                successId="cta-success"
                className="cta-form"
                inputPlaceholder="Your email address"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#" className="footer-logo" aria-label="Heard Chef home">
            <span className="material-symbols-outlined">restaurant</span>
            <span className="footer-logo-text">Heard Chef</span>
          </a>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </nav>
          <div className="footer-copy">
            &copy; 2024 Heard Chef Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
