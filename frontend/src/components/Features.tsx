function Features() {
  const features = [
    {
      title: "ATS Score",
      description: "Get an ATS compatibility score instantly for your resume.",
      icon: "📊",
    },
    {
      title: "Grammar Check",
      description: "Improve grammar, readability and professionalism.",
      icon: "✍️",
    },
    {
      title: "Keyword Optimization",
      description: "Find missing keywords from job descriptions.",
      icon: "🎯",
    },
    {
      title: "Resume Suggestions",
      description: "Receive AI-powered suggestions to improve your resume.",
      icon: "🤖",
    },
    {
      title: "Modern Templates",
      description: "Create clean and professional ATS-friendly resumes.",
      icon: "📄",
    },
    {
      title: "PDF Export",
      description: "Download your optimized resume in PDF format.",
      icon: "⬇️",
    },
  ];

  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-4">
        Powerful Features
      </h2>

      <p className="text-center text-gray-400 mb-14">
        Everything you need to build a professional ATS-friendly resume.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition duration-300"
          >
            <div className="text-5xl mb-6">{feature.icon}</div>

            <h3 className="text-2xl font-semibold mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-400 leading-7">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;