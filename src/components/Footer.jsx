import { socialLinks } from '../data/content.js';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-300">Connect</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-brand-500 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} NDUTECH — Built with React, Tailwind, and motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
