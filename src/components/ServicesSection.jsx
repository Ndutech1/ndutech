import { motion } from 'framer-motion';
import { servicesData } from '../data/content.js';

const ServicesSection = () => {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-brand-300">Services</p>
        <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">How I can help</h2>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {servicesData.map((service, index) => (
          <motion.article
            key={service.title}
            className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="mb-4 inline-flex rounded-full bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-200">
              {index + 1}
            </div>
            <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 text-slate-300">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
