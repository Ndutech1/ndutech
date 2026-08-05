import { motion } from 'framer-motion';
import { skillsData } from '../data/content.js';

const SkillsSection = () => {
  return (
    <section id="skills" className="border-t border-slate-800/80 bg-slate-950/95 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-brand-300">Skills</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">What I excel at</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-glass"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <span className="rounded-full bg-brand-500/15 px-3 py-1 text-sm font-medium text-brand-200">
                  {skill.level}%
                </span>
              </div>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 via-cyan-500 to-sky-400"
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
    </section>
  );
};

export default SkillsSection;
