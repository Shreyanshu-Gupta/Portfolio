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
    <section id="education" className="py-16 md:py-24 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-3">Academic</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Education <span className="text-gray-500 font-light">Journey.</span>
          </h3>
        </div>

        <div className="space-y-6">
          {edu.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{item.school}</h3>
                <p className="text-gray-400 font-medium">{item.degree}</p>
                <div className="text-sm text-white mt-2 font-mono bg-white/10 inline-block px-3 py-1 rounded-full">{item.score}</div>
              </div>
              <div className="text-gray-500 font-medium md:text-right shrink-0">
                {item.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
