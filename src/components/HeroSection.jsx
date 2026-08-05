import { motion } from 'framer-motion';
import Navbar from './Navbar.jsx';
import { heroData } from '../data/content.js';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-6">
      <Navbar />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-12 md:flex-row md:items-center md:justify-between lg:px-8">
        <motion.div
          className="max-w-2xl space-y-6"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex rounded-full bg-brand-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-brand-200">
            Fullstack Portfolio
          </span>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            {heroData.name}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            {heroData.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            {heroData.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  action.style === 'primary'
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20 hover:bg-brand-400'
                    : 'border border-slate-700 bg-slate-900/90 text-slate-100 hover:bg-slate-800'
                }`}
              >
                {action.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/60 p-6 shadow-glass backdrop-blur-xl md:max-w-lg"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="rounded-3xl bg-slate-950/90 p-6">
            <div className="mb-6 rounded-3xl bg-white/5 p-5 text-slate-300">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-300">Things I build</p>
              <p className="mt-3 text-lg leading-8 text-slate-100">
                Responsive interfaces, automation dashboards, UAV flight tools, and GIS analytics components.
              </p>
            </div>
            <div className="grid gap-4 text-slate-200 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                <span className="text-3xl font-semibold text-white">5+</span>
                <p className="mt-1 text-sm text-slate-400">Years experience</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                <span className="text-3xl font-semibold text-white">99%</span>
                <p className="mt-1 text-sm text-slate-400">UAV operation mastery</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
