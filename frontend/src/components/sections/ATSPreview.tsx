import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";

import ScoreCircle from "../ui/ScoreCircle";
import ProgressBar from "../ui/ProgressBar";
import Card from "../ui/Card";

function ATSPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <h2 className="text-5xl font-bold text-center">
          AI Resume Analysis Preview
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          See how ResumeIQ AI analyzes your resume before you even upload it.
        </p>

      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 mt-16">

        {/* Left Card */}

        <Card>

          <ScoreCircle score={92} />

          <div className="mt-10 space-y-6">

            <ProgressBar
              label="ATS Compatibility"
              value={92}
            />

            <ProgressBar
              label="Grammar"
              value={96}
              color="bg-green-500"
            />

            <ProgressBar
              label="Keyword Match"
              value={84}
              color="bg-yellow-500"
            />

            <ProgressBar
              label="Readability"
              value={90}
            />

          </div>

        </Card>

        {/* Right Card */}

        <Card>

          <h3 className="text-2xl font-bold">
            AI Suggestions
          </h3>

          <div className="space-y-6 mt-8">

            <div className="flex gap-4">

              <CheckCircle2
                className="text-green-500 mt-1"
              />

              <div>

                <h4 className="font-semibold">
                  Excellent Resume
                </h4>

                <p className="text-gray-400">
                  ATS compatibility is very high.
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <AlertTriangle
                className="text-yellow-500 mt-1"
              />

              <div>

                <h4 className="font-semibold">
                  Missing Skills
                </h4>

                <p className="text-gray-400">
                  Docker, Kubernetes, AWS
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <CheckCircle2
                className="text-green-500 mt-1"
              />

              <div>

                <h4 className="font-semibold">
                  Grammar
                </h4>

                <p className="text-gray-400">
                  No major grammar issues detected.
                </p>

              </div>

            </div>

          </div>

        </Card>

      </div>

    </section>
  );
}

export default ATSPreview;