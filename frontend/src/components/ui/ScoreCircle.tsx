interface ScoreCircleProps {
  score: number;
}

function ScoreCircle({ score }: ScoreCircleProps) {
  const radius = 70;
  const stroke = 10;

  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (score / 100) * circumference;

  let color = "#22c55e";

  if (score < 80) color = "#eab308";
  if (score < 60) color = "#ef4444";

  return (
    <div className="flex justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="-rotate-90"
      >
        <circle
          stroke="#1e293b"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      <div className="absolute mt-10 text-center">
        <h2 className="text-4xl font-bold">{score}</h2>
        <p className="text-gray-400 text-sm">
          ATS Score
        </p>
      </div>
    </div>
  );
}

export default ScoreCircle;