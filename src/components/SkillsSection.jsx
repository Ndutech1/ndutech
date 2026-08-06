import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/content.js';
import { 
  Database, 
  Sparkles, 
  Workflow, 
  Terminal, 
  Zap, 
  Layers, 
  Code2, 
  Cpu 
} from 'lucide-react';

const techTickerItems = [
  { name: 'Django', icon: Code2, color: 'text-emerald-400' },
  { name: 'Next.js', icon: Layers, color: 'text-white' },
  { name: 'PostgreSQL', icon: Database, color: 'text-sky-400' },
  { name: 'Supabase', icon: Zap, color: 'text-emerald-400' },
  { name: 'AI / LLMs', icon: Sparkles, color: 'text-amber-300' },
  { name: 'Automation', icon: Workflow, color: 'text-cyan-400' },
  { name: 'Python', icon: Terminal, color: 'text-blue-400' },
  { name: 'FastAPI', icon: Cpu, color: 'text-teal-400' },
];

const SkillsSection = () => {
  // Duplicating array to create a seamless infinite loop effect
  const tickerContent = [...techTickerItems, ...techTickerItems, ...techTickerItems];

  return (
    <section id="skills" className="border-t border-slate-800/80 bg-slate-950/95 pt-24 pb-12">
      
      {/* Main Skills Content Container */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 mb-20">
        
        {/* Header Section */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400 font-semibold">
            Skills
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
            What I excel at
          </h2>
        </motion.div>

        {/* Skills Progress Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-md"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <span className="rounded-full bg-cyan-500/15 border border-cyan-500/30 px-3 py-1 text-sm font-medium text-cyan-300">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Motion Tech Ticker Banner */}
      <div className="relative w-full overflow-hidden border-y border-white/10 bg-slate-900/60 py-5 backdrop-blur-xl">
        
        {/* Left & Right Gradient Shadows for Seamless Fade Effect */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />

        <motion.div
          className="flex w-max items-center gap-12"
          animate={{ x: ['0%', '-33.3333%'] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }}
        >
          {tickerContent.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-3.5 text-slate-200"
              >
                <IconComponent className={`h-6 w-6 ${item.color}`} />
                <span className="text-lg font-medium tracking-wide text-slate-100 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
};

export default SkillsSection;