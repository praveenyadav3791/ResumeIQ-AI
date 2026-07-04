import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Sparkles,
  BarChart3,
} from "lucide-react";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 text-blue-400 px-4 py-2 text-sm font-medium">
            <Sparkles size={16} />
            AI Powered Resume Optimizer
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-8 leading-tight">
            Build an
            <span className="text-blue-500"> ATS Friendly </span>
            Resume
          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-8">
            Upload your resume and receive ATS Score, AI Suggestions,
            Grammar Improvements and Keyword Optimization in seconds.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl flex items-center gap-2 font-semibold">
              Upload Resume
              <ArrowRight size={18} />
            </button>

            <button className="border border-slate-700 hover:border-blue-500 transition px-8 py-4 rounded-xl">
              Watch Demo
            </button>
          </div>

          <div className="flex gap-8 mt-12 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-gray-400">Users</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">96%</h2>
              <p className="text-gray-400">ATS Accuracy</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">50K+</h2>
              <p className="text-gray-400">Resumes</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl">

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <FileText className="text-blue-500" />
                <span className="font-semibold">Resume.pdf</span>
              </div>

              <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
                Uploaded
              </span>
            </div>

            <div className="mt-10 space-y-5">

              <div className="bg-slate-800 rounded-xl p-5 flex justify-between">
                <span>ATS Score</span>
                <span className="text-green-400 font-bold">92%</span>
              </div>

              <div className="bg-slate-800 rounded-xl p-5 flex justify-between">
                <span>Grammar</span>
                <CheckCircle2 className="text-green-400" />
              </div>

              <div className="bg-slate-800 rounded-xl p-5 flex justify-between">
                <span>Keywords</span>
                <BarChart3 className="text-blue-500" />
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;