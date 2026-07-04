import { motion } from "framer-motion";
import {
  BarChart3,
  FileSearch,
  Sparkles,
  FileCheck,
  ShieldCheck,
  Download,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "ATS Score",
    description:
      "Know exactly how ATS-friendly your resume is before applying.",
  },
  {
    icon: FileSearch,
    title: "Keyword Analysis",
    description:
      "Compare your resume with any Job Description and discover missing keywords.",
  },
  {
    icon: Sparkles,
    title: "AI Suggestions",
    description:
      "Receive AI-powered improvements for every section of your resume.",
  },
  {
    icon: FileCheck,
    title: "Grammar Check",
    description:
      "Fix grammar mistakes and improve readability instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Templates",
    description:
      "Create clean, ATS-friendly resumes used by professionals.",
  },
  {
    icon: Download,
    title: "Export PDF",
    description:
      "Download your optimized resume in one click.",
  },
];

function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-center">
          Powerful Features
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Everything you need to build a professional resume that passes ATS
          filters and impresses recruiters.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition-all shadow-lg"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center">

                <Icon size={28} />

              </div>

              <h3 className="text-2xl font-semibold mt-8">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-7">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;