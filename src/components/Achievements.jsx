import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    "Winner – Smart India Hackathon (SIH) 2025",
    "Winner – HackerCode Hackathon",
    "Winner – HackStreet Hackathon",
    "Active participant in competitive hackathons",
  ];

  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Achievements
        </motion.h2>

        {/* Achievements List */}
        <ul className="space-y-4">
          {achievements.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              whileHover={{ x: 8 }}
              className="text-gray-400 text-lg cursor-default"
            >
              • {item}
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  );
}
