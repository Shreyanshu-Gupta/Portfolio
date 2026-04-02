import { motion } from "framer-motion";

export default function Skills() {
  const customCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Redux", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "WebSockets"],
    },
    {
      title: "Tools & DB",
      skills: ["MongoDB", "Git/GitHub", "Docker", "Vite", "Postman", "Linux"],
    },
    {
      title: "Core Concepts",
      skills: ["System Architecture", "Performance Optimization", "Responsive Design", "Machine Learning/AI Integration"],
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-orange-500 tracking-wider uppercase mb-3"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Technical <span className="text-gray-500 font-light">Arsenal.</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card flex flex-col h-full rounded-3xl p-8"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-orange-500/50 block"></span>
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-lg hover:bg-orange-500/10 hover:border-orange-500/40 hover:text-orange-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
