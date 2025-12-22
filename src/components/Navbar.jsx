import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -96; // navbar height
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center text-white">

        {/* LEFT – LOGO */}
        <div className="font-bold text-lg">
          Shreyanshu<span className="text-blue-400">.</span>
        </div>

        {/* CENTER – LINKS */}
        <div className="hidden md:flex justify-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.id}
              text={link.label}
              onClick={() => handleScroll(link.id)}
            />
          ))}
        </div>

        {/* RIGHT – CONTACT BUTTON */}
        <div className="hidden md:flex justify-end">
          <ContactButton onClick={() => handleScroll("contact")} />
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setOpen(!open)}>
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
            >
              {open ? "✕" : "☰"}
            </motion.div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-left text-gray-300"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleScroll("contact")}
                className="mt-4 text-blue-400 text-left"
              >
                Contact me →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* CENTER LINKS */
function NavLink({ text, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="relative text-gray-300 hover:text-white"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {text}
      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute left-1/2 -bottom-2 h-[2px] w-full bg-white origin-center -translate-x-1/2"
      />
    </motion.button>
  );
}

/* CONTACT BUTTON */
function ContactButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative overflow-hidden rounded-full border border-white/20 px-6 py-2 font-medium"
    >
      <motion.span
        variants={{
          rest: { x: "-100%" },
          hover: { x: "0%" },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute inset-0 bg-white/20"
      />
      <motion.span
        variants={{
          rest: { color: "#ffffff" },
          hover: { color: "#000000" },
        }}
        transition={{ duration: 0.35 }}
        className="relative z-10"
      >
        Contact me
      </motion.span>
    </motion.button>
  );
}
