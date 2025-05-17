import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <header className="hero">
        <h1>EscoVisualz Multimedia</h1>
        <p>Capturing real moments with emotion and light.</p>
        <a href="#portfolio" className="cta-button">
          View Portfolio
        </a>
      </header>

      <section id="portfolio" className="portfolio">
        <h2>Portfolio</h2>
        <div className="grid">
          <img src="/photo1.jpg" alt="Sample 1" />
          <img src="/photo2.jpg" alt="Sample 2" />
          <img src="/photo3.jpg" alt="Sample 3" />
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Jane Doe. All rights reserved.</p>
        <p>
          <a href="mailto:contact@janedoephoto.com">Contact</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
