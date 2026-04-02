import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Engineer Intern",
      company: "Campus Pull",
      period: "Recent",
      description: "Spearheaded frontend architecture, focusing on web performance and scalable component design.",
      achievements: [
        "Led performance optimization initiatives resulting in a 30% improvement in load times.",
        "Engineered a scalable UI component library, achieving a 40% reduction in code duplication.",
      ]
    },
    {
      role: "ML Trainee",
      company: "NVIDIA (DGX-A100)",
      period: "Previous",
      description: "Worked on high-performance Machine Learning systems and deployment workflows.",
      achievements: [
        "Utilized NVIDIA DGX-A100 hardware for enterprise ML workloads.",
        "Deployed containerized ML pipelines utilizing Docker and Kubeflow.",
        "Developed scalable multi-person face recognition systems."
      ]
    },
    {
      role: "Web Developer",
      company: "Zidio Development",
      period: "Aug 2024 – Oct 2024",
      description: "Full-stack web development utilizing the MERN stack.",
      achievements: [
        "Architected and deployed full-stack MERN web applications.",
        "Integrated robust REST APIs to bridge frontend UI and backend services.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-[#09090b] relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-3">Career</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Professional <span className="text-gray-500 font-light">Experience.</span>
          </h3>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent z-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#09090b] text-gray-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300 group-hover:border-white group-hover:bg-white/10">
                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <span className="text-sm font-medium text-gray-400 mt-1 sm:mt-0">{exp.period}</span>
                </div>
                <div className="text-gray-400 font-medium mb-4">{exp.company}</div>
                <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achieve, j) => (
                    <li key={j} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="text-gray-500 mt-0.5 opacity-70">▹</span>
                      <span>{achieve}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
//