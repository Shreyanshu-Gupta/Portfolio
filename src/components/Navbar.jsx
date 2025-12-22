export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Himanshu.dev</h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Skills</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
