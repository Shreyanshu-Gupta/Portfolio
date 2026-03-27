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
    <section id="skills" className="py-16 md:py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-3">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical <span className="text-gray-500 font-light">Arsenal.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 flex flex-col h-full"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-white/50 block"></span>
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-lg hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
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
