import { useRef } from "react";
import { projects } from "../data/projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const container = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');
    
    cards.forEach((card) => {
      // Fade and slide up reveal
      gsap.fromTo(card, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1, 
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
      
      // Premium Image Parallax Effect
      const img = card.querySelector('.project-image');
      if (img) {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    });
  }, { scope: container });

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#09090b] relative w-full overflow-hidden" ref={container}>
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-20 md:flex justify-between items-end">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-3">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Projects that drive <span className="text-gray-500 font-light">impact.</span>
            </h3>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card group relative grid lg:grid-cols-12 gap-10 items-center"
            >
              {/* Image Side - Compact and Premium */}
              <div className="lg:col-span-6 h-[260px] md:h-[340px] rounded-2xl bg-[#111113] border border-white/5 relative overflow-hidden transition-all duration-500 group-hover:border-white/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
                
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="project-image absolute -top-[10%] -bottom-[10%] left-0 right-0 w-full h-[120%] object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                    onError={(e) => { 
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex-col items-center justify-center hidden">
                    <span className="text-gray-500 text-sm font-mono">[ Missing Image ]</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-6 relative z-10 lg:pl-6">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-full tracking-wider uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {project.title}
                </h4>
                
                <p className="text-base text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 border-l-2 border-l-white">
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-semibold">Impact</div>
                  <div className="text-sm text-white font-medium">{project.impact}</div>
                </div>

                <div className="flex items-center gap-6">
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-medium group/link border-b border-white/30 pb-0.5 hover:border-white transition-colors">
                    <span className="text-sm">Live Preview</span>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
