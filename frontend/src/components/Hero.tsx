function Hero() {
  return (
    <section className="text-center mt-24 px-5">

      <h1 className="text-6xl font-bold">
        Build
        <span className="text-blue-500"> ATS Friendly </span>
        Resume
      </h1>

      <p className="mt-8 text-gray-400 text-xl max-w-3xl mx-auto">
        Upload your resume and get AI-powered ATS score,
        keyword optimization, grammar suggestions,
        and resume improvements instantly.
      </p>

      <button
        className="mt-10 bg-blue-600 px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition"
      >
        Upload Resume
      </button>

    </section>
  );
}

export default Hero;