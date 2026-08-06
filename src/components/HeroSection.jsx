import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import Navbar from './Navbar.jsx';
import { heroData } from '../data/content.js';
import { Briefcase, Layers, Smile } from 'lucide-react';

const statsData = [
  {
    icon: Briefcase,
    numericValue: 5,
    suffix: '+',
    label: 'Years experience',
  },
  {
    icon: Layers,
    numericValue: 32,
    suffix: '+',
    label: 'Projects shipped',
  },
  {
    icon: Smile,
    numericValue: 57,
    suffix: '+',
    label: 'Happy clients',
  },
];

// Motion-driven counter that animates from 0 to the target number
const AnimatedCounter = ({ value, suffix = '+' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 pb-20 pt-4 font-sans text-slate-100">
      
      {/* Background Glow Accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <Navbar />

      <div className="mx-auto max-w-6xl px-6 pt-12 lg:px-8">
        
        {/* Top Hero Layout: Text & Info Box */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          
          {/* Left Text & CTA */}
          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Full-Stack & Backend Engineer
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {heroData.name}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {heroData.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row pt-2">
              {heroData.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className={`inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-bold transition-all duration-200 ${
                    action.style === 'primary'
                      ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-sky-400 active:scale-[0.98]'
                      : 'border border-white/10 bg-slate-900/80 text-slate-100 hover:border-cyan-500/40 hover:bg-slate-800 active:scale-[0.98]'
                  }`}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="relative mx-auto w-full max-w-md rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl md:max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="rounded-3xl border border-white/5 bg-slate-950/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Things I build
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-200">
                Responsive interfaces, modern web apps, robust backend APIs, automation dashboards, UAV flight tools, and AI/NLP pipelines.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Stats Card Row (3 Columns with motion-driven counter) */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {statsData.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="group flex flex-col items-center justify-center rounded-[28px] border border-white/10 bg-slate-900/80 p-8 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {/* Circular Icon Wrapper */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Animated Metric Value from 0 to full percent/number */}
                <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
                </span>

                {/* Metric Label */}
                <p className="mt-2 text-sm font-medium text-slate-400">
                  {stat.label}
                </p>

                {/* Accent Line Indicator beneath each stat */}
                <div className="mt-4 h-1 w-12 rounded-full bg-cyan-500/30 transition-all duration-300 group-hover:w-20 group-hover:bg-cyan-400" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;