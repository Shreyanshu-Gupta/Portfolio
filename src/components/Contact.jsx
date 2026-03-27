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
    <section id="contact" className="py-16 md:py-24 bg-[#09090b]">
      <div className="max-w-3xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Get in Touch – Let's Connect
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#111113] border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
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
                className="w-full bg-[#1c1c21] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-medium"
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
                className="w-full bg-[#1c1c21] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-medium"
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
                className="w-full bg-[#1c1c21] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-medium resize-none"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={status === "sending..."}
              className="mt-4 w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending..." ? "Sending..." : "Send Message"}
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
