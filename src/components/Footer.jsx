// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-night-surface text-night-muted py-8 px-6 shadow-inner">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        {/* Logo & Tagline */}
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <h2 className="text-lg font-serif text-night-heading mb-1">🧠 AlgoLens</h2>
          <p>Explainable insights for financial decisions.</p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6">
          <a href="/dashboard" className="hover:text-night-accent transition">Dashboard</a>
          <a href="/history" className="hover:text-night-accent transition">Results</a>
          <a href="/about" className="hover:text-night-accent transition">Contact</a>
          <a href="/" className="hover:text-night-accent transition">Home</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 border-t border-night-border pt-4 text-center text-xs">
        © {new Date().getFullYear()} AlgoLens. All rights reserved.
      </div>
    </footer>
  );
}
