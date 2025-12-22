import { motion } from "framer-motion";
import FlipInline from "./FlipInline";

/* Line animation */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export default function LandingHero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT */}
        <div className="max-w-xl lg:pl-20">
          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold leading-[1.12]"
          >
            {/* LINE 1 */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-4 mb-4"
            >
              <span>Turning</span>
              <FlipInline />
            </motion.div>

            {/* LINE 2 */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="mb-6"
            >
              into real{" "}
              <span className="text-blue-400">Projects</span>
            </motion.div>

            {/* LINE 3 */}
            <motion.div
              variants={fadeUp}
              custom={2}
            >
              that Deliver Results
            </motion.div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-gray-400 text-lg mt-8 max-w-lg"
          >
            Hi, I’m Shreyanshu — a developer driven by a passion for building
            impactful and seamless digital experiences.
          </motion.p>

          {/* CTA */}
          <div className="mt-14">
            <SeeMyWorkButton />
          </div>
        </div>

        {/* RIGHT (keep empty / visual later) */}
      </div>
    </section>
  );
}

/* CTA BUTTON — INLINE (Kartikey-style) */
function SeeMyWorkButton() {
  return (
    <motion.a
      href="#projects"
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="
        group
        relative
        inline-flex
        items-center
        gap-6
        px-10
        py-4
        rounded-2xl
        bg-[#1c1f2a]
        text-white
        font-medium
        tracking-wide
        overflow-hidden
      "
    >
      {/* Hover overlay */}
      <motion.span
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-white/5"
      />

      {/* Text */}
      <span className="relative z-10 uppercase text-sm">
        See my work
      </span>

      {/* Arrow circle */}
      <motion.span
        variants={{
          rest: { x: 0 },
          hover: { x: 6 },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          relative z-10
          flex items-center justify-center
          w-10 h-10
          rounded-full
          bg-[#e6f0ff]
        "
      >
        <motion.img
          src="/images/arrow-down.svg"
          alt="arrow"
          variants={{
            rest: { y: 0 },
            hover: { y: 4 },
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-4 h-4"
        />
      </motion.span>
    </motion.a>
  );
}
