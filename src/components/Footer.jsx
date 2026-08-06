import React from 'react';
import { socialLinks } from '../data/content.js';
import { Code, Globe, Share2, Mail, ExternalLink } from 'lucide-react';

// Helper to safely render standard Lucide icons based on label
const getSocialIcon = (label) => {
  switch (label.toLowerCase()) {
    case 'github':
    case 'linkedin':
    case 'instagram':
    case 'twitter':
      return <Globe className="h-4 w-4" />;
    default:
      return <Mail className="h-4 w-4" />;
  }
};

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 font-sans text-slate-100 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          Connect
        </span>

        {/* Social Link Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900 hover:text-cyan-300 active:scale-95"
            >
              <span className="text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                {getSocialIcon(item.label)}
              </span>
              <span>{item.label}</span>
              <ExternalLink className="h-3 w-3 text-slate-500 group-hover:text-cyan-400" />
            </a>
          ))}
        </div>

        {/* Branding & Copyright */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 border-t border-white/5 pt-8">
          <p className="flex items-center gap-2 text-sm text-slate-400">
            © {new Date().getFullYear()} 
            <span className="inline-flex items-center gap-1 font-bold text-white">
              <Code className="h-4 w-4 text-cyan-400" /> NDUTECH
            </span>
            — All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;