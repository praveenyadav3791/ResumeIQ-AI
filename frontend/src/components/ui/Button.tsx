type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
};

function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/20",

    secondary:
      "border border-slate-700 hover:border-blue-500 hover:bg-slate-900 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;