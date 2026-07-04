import { motion } from "framer-motion";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "TCS",
  "Infosys",
  "Accenture",
];

function TrustedBy() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-center text-gray-400 uppercase tracking-[0.3em] text-sm">
          Inspired by hiring standards of
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-2xl border border-slate-800 bg-slate-900 py-5 text-center font-semibold text-gray-300 hover:border-blue-500 hover:text-white transition"
            >
              {company}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TrustedBy;