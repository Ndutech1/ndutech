import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-brand-300">Contact</p>
        <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Let’s build something together</h2>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-glass"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <form className="grid gap-6 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 sm:col-span-2"
          />
          <button
            type="submit"
            className="sm:col-span-2 inline-flex justify-center rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
