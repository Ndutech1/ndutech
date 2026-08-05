import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matchingLink = navLinks.find((link) => link.href === `#${entry.target.id}`);
            if (matchingLink) setActiveLink(matchingLink.label);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.25 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl"
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Visible Logo: < /> NDUTECH */}
        <a
          href="#home"
          className="group inline-flex items-center gap-3 text-sm font-semibold tracking-[0.2em]"
        >
          {/* Glowing < /> Badge */}
          <span className="flex items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-950/50 px-2.5 py-1 text-xs font-mono font-bold text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            &lt; /&gt;
          </span>

          {/* NDUTECH Text - Solid Cyan to White Gradient */}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-200 to-white bg-clip-text font-black text-transparent">
            NDUTECH
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -2 }}
              className={`relative transition ${
                activeLink === item.label ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
              {activeLink === item.label ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-1/2 top-full h-0.5 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-sky-400"
                />
              ) : null}
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="rounded-full border border-cyan-500/50 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-slate-100 transition hover:border-cyan-500 hover:text-white md:hidden"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <motion.span
              className="absolute h-0.5 w-5 rounded-full bg-current"
              animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute h-0.5 w-5 rounded-full bg-current"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="absolute h-0.5 w-5 rounded-full bg-current"
              animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.2 }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4 text-slate-200">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-3xl px-4 py-3 text-sm transition ${
                    activeLink === item.label ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;