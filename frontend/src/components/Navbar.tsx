import { Menu, User } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">

        {/* Logo */}

        <div className="flex items-center gap-2">

          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-lg">
            R
          </div>

          <div>
            <h1 className="text-xl font-bold">
              ResumeIQ AI
            </h1>

            <p className="text-xs text-gray-400">
              AI Resume Optimizer
            </p>
          </div>

        </div>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8 text-gray-300">

          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              Pricing
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Right Side */}

        <div className="hidden md:flex items-center gap-4">

          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
          >
            <User size={18} />
            Login
          </button>

          <button
            className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-medium"
          >
            Get Started
          </button>

        </div>

        {/* Mobile */}

        <button className="md:hidden">
          <Menu size={26} />
        </button>

      </nav>
    </header>
  );
}

export default Navbar;