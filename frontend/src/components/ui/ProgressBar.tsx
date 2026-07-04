interface ProgressBarProps {
  label: string;
  value: number;
  color?: string;
}

function ProgressBar({
  label,
  value,
  color = "bg-blue-500",
}: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">
          {label}
        </span>

        <span className="text-gray-400">
          {value}%
        </span>
      </div>

      <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
        <div
          className={`${color} h-full rounded-full transition-all duration-700`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;