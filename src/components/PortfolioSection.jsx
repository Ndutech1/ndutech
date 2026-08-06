import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content.js';
import { ExternalLink, Globe, ArrowUpRight } from 'lucide-react';

// Default projects fallback using your provided live links
const defaultProjects = [
  {
    title: 'CGS Novare Ltd',
    type: 'Full-Stack Architecture',
    description: 'Corporate platform featuring high-performance UI and CAD-inspired engineering components.',
    liveUrl: 'https://cgs-novare-ltd.vercel.app/',
    tags: ['React', 'Material UI', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'Storefront E-Commerce Platform',
    type: 'E-Commerce / Backend',
    description: 'High-throughput online storefront backend featuring real-time socket updates and database optimization.',
    liveUrl: 'https://storefront-ecru-one.vercel.app/',
    tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
  },
  {
    title: 'Moodie Platform',
    type: 'Web Application',
    description: 'Interactive discovery and booking web application built for seamless client navigation.',
    liveUrl: 'https://frontend-liard-three-54.vercel.app/discover',
    tags: ['Next.js', 'FastAPI', 'Tailwind CSS'],
  },
  {
    title: 'Naija NER Entity Recognition',
    type: 'AI / NLP Pipeline',
    description: 'Specialized Named Entity Recognition system trained to extract and classify regional Nigerian news text.',
    liveUrl: 'https://entity-recognition.vercel.app/',
    tags: ['Python', 'NLP', 'FastAPI', 'React'],
  },
];

const PortfolioSection = () => {
  // Merge portfolioData from content.js with default project links
  const projectsToDisplay =
    portfolioData && portfolioData.length > 0 ? portfolioData : defaultProjects;

  return (
    <section id="portfolio" className="border-t border-slate-800/80 bg-slate-950 py-24 font-sans text-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            Portfolio
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">
            A selection of live web apps, full-stack systems, and NLP platforms I've engineered.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {projectsToDisplay.map((project, index) => {
            const projectUrl =
              project.liveUrl ||
              project.url ||
              defaultProjects[index % defaultProjects.length].liveUrl;

            return (
              <motion.article
                key={project.title || index}
                className="group flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                
                {/* Simulated Live Browser Preview Frame */}
                <div className="relative border-b border-white/10 bg-slate-950">
                  
                  {/* Browser Window Header */}
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-white/5">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    </div>
                    
                    {/* Compact URL Address Bar */}
                    <div className="flex items-center gap-1 rounded-md border border-white/5 bg-slate-950/80 px-2 py-0.5 text-[10px] text-slate-400 w-2/3 truncate">
                      <Globe className="h-3 w-3 text-cyan-400 shrink-0" />
                      <span className="truncate">{projectUrl.replace('https://', '')}</span>
                    </div>

                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition shrink-0"
                      title="Open Site"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Scaled iframe Live Window */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <iframe
                      src={projectUrl}
                      title={project.title}
                      className="absolute left-0 top-0 h-[700px] w-[1100px] origin-top-left pointer-events-none border-0 select-none"
                      style={{
                        transform: 'scale(0.33)', // Scaled down to fit frame
                      }}
                      loading="lazy"
                    />

                    {/* Interactive Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 active:scale-95"
                      >
                        Visit Live App <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content Info */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div className="space-y-2.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      {project.type || 'Web Application'}
                    </p>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-400 line-clamp-3">
                      {project.description || 'Production-grade web application built with high performance and responsive user interfaces.'}
                    </p>
                  </div>

                  {/* Tech Stack Pills & View Action */}
                  <div className="mt-5 space-y-3.5 pt-3.5 border-t border-white/5">
                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-cyan-500/20 bg-cyan-950/30 px-2 py-0.5 text-[10px] font-medium text-cyan-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 transition-all group-hover:translate-x-1 hover:text-cyan-300"
                    >
                      View project <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;