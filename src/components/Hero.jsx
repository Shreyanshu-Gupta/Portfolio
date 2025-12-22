export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-black text-white pt-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I’m <span className="text-blue-500">Himanshu</span> 👋
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Frontend Developer focused on building clean, responsive,
          and user-friendly web experiences.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
            View Projects
          </button>
          <button className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
