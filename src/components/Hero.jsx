export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Shreyanshu
          </span>
          {/* 👋 */}
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Web Developer | MERN Stack | Machine Learning Enthusiast
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
