function Features() {
  const features = [
    {
      title: "ATS Score",
      desc: "Get an ATS compatibility score instantly."
    },
    {
      title: "Grammar Check",
      desc: "Improve grammar and readability."
    },
    {
      title: "Keyword Optimization",
      desc: "Add missing keywords for better hiring chances."
    },
    {
      title: "Resume Suggestions",
      desc: "Receive AI-powered improvement suggestions."
    },
    {
      title: "Modern Templates",
      desc: "Create beautiful professional resumes."
    },
    {
      title: "PDF Export",
      desc: "Download your optimized resume instantly."
    }
  ];

  return (
    <section className="py-24 px-10">
      <h2 className="text-4xl font-bold text-center mb-14">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item) => (
          <div
            key={item.title}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;