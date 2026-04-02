import { motion } from "framer-motion";

export default function Education() {
  const edu = [
    {
      school: "ABES Institute of Technology",
      degree: "B.Tech in Information Technology",
      score: "GPA: 6.75 / 10",
      year: "2023 – 2027"
    },
    {
      school: "UMS Durgasthan",
      degree: "Senior Secondary Education",
      score: "64.4%",
      year: "2022"
    },
    {
      school: "UMS Durgasthan",
      degree: "Secondary Education",
      score: "84.4%",
      year: "2020"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 relative border-t border-white/5 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-orange-500 tracking-wider uppercase mb-3"
          >
            Academic
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Education <span className="text-gray-500 font-light">Journey.</span>
          </motion.h3>
        </div>

        <div className="space-y-6">
          {edu.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{item.school}</h3>
                <p className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors">{item.degree}</p>
                <div className="text-sm text-orange-400 mt-2 font-mono bg-orange-500/10 border border-orange-500/20 inline-block px-3 py-1 rounded-full">{item.score}</div>
              </div>
              <div className="text-gray-500 font-medium md:text-right shrink-0 group-hover:text-orange-500/80 transition-colors">
                {item.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
