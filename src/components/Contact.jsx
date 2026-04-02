import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending...");

    const formData = new FormData(e.target);
    
    // https://web3forms.com/ 
    formData.append("access_key", "50fe0c29-b5e2-4954-a8a0-faf56b818672");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const socials = [
    {
      title: "LinkedIn",
      subtitle: "shreyanshu-kumar", // Match the screenshot
      link: "https://linkedin.com/in/shreyanshukumar",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      title: "X",
      subtitle: "shreyanshu662",
      link: "https://x.com/shreyanshu662",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      title: "Email",
      subtitle: "shreyanshukumar662@gmail.com",
      link: "mailto:shreyanshukumar662@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        {/* We keep the main header section hidden or just use the ones inside the component as requested by image */}
        {/* If user prefers the header at top we can keep it, but the screenshot seems to have the title inside the form */}
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT SIDE: FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="glass-card rounded-[2rem] p-8 md:p-10 shadow-2xl relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
                Get in Touch — <span className="text-orange-500">Let's Connect</span>
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                
                {/* NAME */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-gray-300 font-medium text-sm">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="What's your good name?"
                    className="w-full bg-[#111111] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 hover:border-white/10 transition-all font-medium"
                  />
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-gray-300 font-medium text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="What's your email address?"
                    className="w-full bg-[#111111] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 hover:border-white/10 transition-all font-medium"
                  />
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-gray-300 font-medium text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="How can I help you?"
                    className="w-full bg-[#111111] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 hover:border-white/10 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={status === "sending..."}
                  className="mt-4 w-full bg-orange-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <span className="relative z-10">{status === "sending..." ? "Sending..." : "Send Message"}</span>
                </button>

                {/* STATUS MESSAGES */}
                {status === "success" && (
                  <p className="text-green-400 text-center font-medium mt-2">Message sent successfully! I'll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-center font-medium mt-2">Oops! Something went wrong. Please try again.</p>
                )}

              </form>
            </div>
          </motion.div>

          {/* RIGHT SIDE: SOCIAL LINKS */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col pt-2 lg:pt-8"
          >
            <h3 className="text-xl font-bold text-white mb-8 px-2">
              Connect with Me
            </h3>
            
            <div className="flex flex-col gap-4">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target={social.title !== "Email" ? "_blank" : undefined}
                  rel={social.title !== "Email" ? "noreferrer" : undefined}
                  variants={itemVariants}
                  className="group relative flex items-center gap-6 p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon Circle */}
                  <div className="w-14 h-14 shrink-0 rounded-full bg-orange-900/30 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                    {social.icon}
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col flex-1 truncate">
                    <span className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                      {social.title}
                    </span>
                    <span className="text-sm text-gray-500 truncate">
                      {social.subtitle}
                    </span>
                  </div>

                  {/* Top Right Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 translate-x-[-10px] translate-y-[10px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-500">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
