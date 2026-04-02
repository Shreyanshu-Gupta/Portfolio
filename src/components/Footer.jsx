export default function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-600 py-8 text-center text-sm border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} Shreyanshu Kumar. All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-mono text-xs hover:text-orange-500 transition-colors cursor-default">Built with React & Tailwind</p>
      </div>
    </footer>
  );
}
