export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl">
          Feel free to reach out for collaboration, opportunities, or
          just to say hello 👋
        </p>

        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:work.shreyanshu@gmail.com"
            className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/shreyanshu-gupta"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Shreyanshu-Gupta"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800 transition"
          >
            GitHub
          </a>

          <a
            href="tel:9102621967"
            className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800 transition"
          >
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
