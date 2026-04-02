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

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Get in Touch – <span className="text-orange-500">Let's Connect</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-10 shadow-2xl relative"
        >
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
                className="w-full bg-[#1c1c21]/50 border border-white/5 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 hover:border-white/10 transition-all font-medium"
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
                className="w-full bg-[#1c1c21]/50 border border-white/5 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 hover:border-white/10 transition-all font-medium"
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
                className="w-full bg-[#1c1c21]/50 border border-white/5 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 hover:border-white/10 transition-all font-medium resize-none"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={status === "sending..."}
              className="mt-4 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg py-4 rounded-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
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
        </motion.div>
      </div>
    </section>
  );
}
