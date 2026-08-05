import { motion } from 'framer-motion';
import { portfolioData } from '../data/content.js';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="border-t border-slate-800/80 bg-slate-950/95 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-brand-300">Portfolio</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Recent projects</h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {portfolioData.map((project, index) => (
            <motion.article
              key={project.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 shadow-glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
              <div className="space-y-3 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-brand-300">{project.type}</p>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <a
                  href={project.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-brand-100"
                >
                  View details →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
