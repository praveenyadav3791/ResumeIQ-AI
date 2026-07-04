function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5">
      <h1 className="text-3xl font-bold text-blue-500">
        ResumeIQ AI 🚀
      </h1>

      <div className="space-x-8 hidden md:flex">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">Features</a>
        <a href="#" className="hover:text-blue-500">Pricing</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
      </div>

      <button
        className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;