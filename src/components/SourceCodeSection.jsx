import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sourceCodeData } from '../data/content.js';
import { FileArchive, ArrowUpRight, ArrowRight, X, Lock, ShieldCheck } from 'lucide-react';

const SourceCodeSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault();
    // Integrated checkout handler (e.g., Paystack inline or direct redirect)
    alert(`Initiating payment of $${selectedItem.priceUSD} for ${selectedItem.title}`);
  };

  return (
    <section id="source-code" className="relative overflow-hidden border-t border-amber-900/20 bg-slate-950 py-24 font-sans text-slate-100">
      
      {/* Background Soft Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            Open Source
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Source <span className="text-amber-400">code</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">
            Complete project ZIPs — download the whole codebase, open it, and build on it.
          </p>
        </motion.div>

        {/* Source Code Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {sourceCodeData.map((item, index) => (
            <motion.div
              key={item.id || index}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-amber-500/20 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Top File Tag */}
              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-slate-950/60 p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <FileArchive className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold text-slate-200 truncate">{item.filename}</h4>
                  <p className="text-[11px] text-slate-400">ZIP archive · {item.fileSize}</p>
                </div>
              </div>

              {/* Title & Description */}
              <div className="my-5 space-y-2.5">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <div className="pt-2">
                  <span className="inline-block rounded-md border border-white/10 bg-slate-800/60 px-2.5 py-1 text-[11px] font-medium text-slate-300">
                    {item.language}
                  </span>
                </div>
              </div>

              {/* Price & Checkout Action */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <span className="text-lg font-extrabold text-white">${item.priceUSD}</span>
                  <span className="block text-[10px] text-slate-400">≈ ₦{item.priceNGN.toLocaleString()} charged</span>
                </div>

                <button
                  onClick={() => setSelectedItem(item)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-400 transition hover:bg-amber-500 hover:text-slate-950"
                >
                  Get the code <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-12 text-center">
          <a
            href="#source-code"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            See all source code <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>

      {/* Payment Checkout Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            />

            {/* Modal Card */}
            <motion.div
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-white text-slate-900 shadow-2xl p-6"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 pr-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <FileArchive className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{selectedItem.title}</h3>
                  <p className="text-xs text-slate-500">Source code — instant ZIP download</p>
                </div>
                <div className="ml-auto text-right">
                  <span className="text-lg font-extrabold text-amber-600">${selectedItem.priceUSD}</span>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleCheckout} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Name <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 text-sm font-bold text-white transition hover:bg-slate-800 active:scale-[0.99]"
                >
                  <Lock className="h-4 w-4 text-amber-400" /> Pay ${selectedItem.priceUSD}
                </button>
              </form>

              {/* Footer Notice */}
              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Charged as ₦{selectedItem.priceNGN.toLocaleString()} — Secured by Paystack.</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SourceCodeSection;