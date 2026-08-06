import { motion } from 'framer-motion';
import { aboutData, profileImage } from '../data/content.js';

const AboutSection = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-14 flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-300">About Me</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">{aboutData.title}</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">{aboutData.summary}</p>
        </div>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-glass"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="h-auto w-full rounded-[28px] object-cover"
          />
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutData.fields.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-lg font-medium text-white">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4 rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-glass">
            <h3 className="text-xl font-semibold text-white">Why work with me?</h3>
            <ul className="space-y-3 text-slate-300">
              <li>• Build clean, maintainable backend APIs using Python and modern development practices.</li>
              <li>• Develop automation solutions that eliminate repetitive work and improve efficiency.</li>
              <li>• Create AI-powered applications by integrating large language models, intelligent workflows, and real-world data.</li>
              <li>• Deliver scalable, secure, and well-documented software that's built for long-term maintenance. </li>
              <li>• Focus on practical solutions, clear communication, and reliable delivery from concept to deployment.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
