import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-8
        shadow-lg
        hover:border-blue-500
        transition-all
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default Card;