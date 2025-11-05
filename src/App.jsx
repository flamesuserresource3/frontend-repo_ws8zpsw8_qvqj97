import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import { Mail, Linkedin, Twitter } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-sm font-semibold text-slate-900 dark:text-white">
          Andra Dp
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-700 md:flex dark:text-slate-300">
          <a href="#about" className="hover:text-slate-900 dark:hover:text-white">Tentang</a>
          <a href="#portfolio" className="hover:text-slate-900 dark:hover:text-white">Portofolio</a>
          <a href="#publications" className="hover:text-slate-900 dark:hover:text-white">Publikasi</a>
          <a
            href="mailto:hello@andradp.id"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700"
          >
            <Mail size={16} /> Kontak
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Andra Dp. Semua hak cipta.
        </p>
        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
          <a
            href="mailto:hello@andradp.id"
            className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white"
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white"
          >
            <Twitter size={18} /> X
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Publications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
