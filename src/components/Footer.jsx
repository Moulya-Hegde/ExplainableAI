// Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-night-surface text-night-muted py-12 px-6 shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
  
          {/* Logo & Tagline */}
          <div>
            <h2 className="text-xl font-serif text-night-heading mb-2">🧠 AlgoLens</h2>
            <p className="leading-relaxed">
              Empowering analysts to explore, validate, and explain machine learning decisions in high-stakes domains like finance.
            </p>
          </div>
  
          {/* Product Links */}
          <div>
            <h3 className="text-night-heading font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-night-accent transition">Features</a></li>
              <li><a href="#" className="hover:text-night-accent transition">Explainability</a></li>
              <li><a href="#" className="hover:text-night-accent transition">Dashboard</a></li>
              <li><a href="#" className="hover:text-night-accent transition">Results</a></li>
            </ul>
          </div>
  
          {/* Company Links */}
          <div>
            <h3 className="text-night-heading font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-night-accent transition">About</a></li>
              <li><a href="#" className="hover:text-night-accent transition">Careers</a></li>
              <li><a href="#" className="hover:text-night-accent transition">Blog</a></li>
              <li><a href="#" className="hover:text-night-accent transition">Contact</a></li>
            </ul>
          </div>
  
          {/* Legal & Social */}
          <div>
            <h3 className="text-night-heading font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-night-accent transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-night-accent transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-night-accent transition">Security</a></li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a href="#" className="hover:text-night-accent transition">Twitter</a>
              <a href="#" className="hover:text-night-accent transition">LinkedIn</a>
              <a href="#" className="hover:text-night-accent transition">GitHub</a>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-10 border-t border-night-border pt-6 text-center text-xs text-night-muted">
          © {new Date().getFullYear()} AlgoLens. All rights reserved.
        </div>
      </footer>
    );
  }
  