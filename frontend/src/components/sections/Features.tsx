import {
  BarChart3,
  FileSearch,
  Sparkles,
  FileCheck,
  ShieldCheck,
  Download,
} from "lucide-react";

import Card from "../ui/Card";

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
      "Create clean ATS-friendly resumes used by professionals.",
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
      <div className="text-center">
        <h2 className="text-5xl font-bold">
          Powerful Features
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Everything you need to create a professional resume that
          impresses recruiters and passes ATS filters.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card key={feature.title}>
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                <Icon size={28} />
              </div>

              <h3 className="text-2xl font-semibold mt-8">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-7">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default Features;
