import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-orange-500/10 border border-orange-500/20 mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-orange-500">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
            Builder mindset. <br className="hidden md:block"/>
            <span className="text-gray-500 font-normal">Problem-solving focus.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto group-hover:text-gray-300 transition-colors">
            I believe that great engineering is about more than just writing code—it's about architecting scalable solutions that deliver measurable value. From conceptualizing the architecture to refining the final micro-interactions, I bring a performance-driven approach to every project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
