import { useEffect, useState } from "react";

interface StepProofProps {
  onNext: () => void;
}

const StepProof = ({ onNext }: StepProofProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Line chart data points
  const withoutAI = [30, 45, 35, 50, 40, 55, 45, 60, 50, 45, 55, 40];
  const withAI = [30, 40, 50, 55, 65, 72, 78, 82, 88, 91, 94, 95];
  
  const chartWidth = 320;
  const chartHeight = 160;
  const padding = 20;
  
  const getPath = (data: number[]) => {
    const points = data.map((value, index) => {
      const x = padding + (index / (data.length - 1)) * (chartWidth - 2 * padding);
      const y = chartHeight - padding - (value / 100) * (chartHeight - 2 * padding);
      return `${x},${y}`;
    });
    return `M ${points.join(' L ')}`;
  };

  const withoutAIPath = getPath(withoutAI);
  const withAIPath = getPath(withAI);
  const pathLength = 400;

  return (
    <div className="earth-container">
      <div className="flex flex-col items-center text-center max-w-lg space-y-10">
        {/* Header */}
        <div className="space-y-4 animate-earth-fade-in opacity-0">
          <p className="earth-tagline">The Proof</p>
          <h2 className="earth-title text-3xl md:text-4xl">
            Join the <span className="neon-glow">95%</span>.
          </h2>
          <p className="earth-subtitle max-w-sm">
            AI-guided care eliminates the guesswork that leads to loss.
          </p>
        </div>

        {/* Animated Line Chart */}
        <div className="w-full earth-card animate-earth-scale opacity-0 delay-300">
          <svg 
            viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
            className="w-full h-48"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((value) => {
              const y = chartHeight - padding - (value / 100) * (chartHeight - 2 * padding);
              return (
                <line
                  key={value}
                  x1={padding}
                  y1={y}
                  x2={chartWidth - padding}
                  y2={y}
                  stroke="hsl(0 0% 100% / 0.05)"
                  strokeWidth="1"
                />
              );
            })}
            
            {/* Without AI - jagged red line */}
            <path
              d={withoutAIPath}
              fill="none"
              stroke="#ef4444"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={pathLength}
              strokeDashoffset={animated ? 0 : pathLength}
              style={{ 
                transition: 'stroke-dashoffset 2s ease-out',
                filter: 'drop-shadow(0 0 4px rgba(239, 68, 68, 0.5))'
              }}
            />
            
            {/* With AI - smooth green line */}
            <path
              d={withAIPath}
              fill="none"
              stroke="hsl(145, 90%, 52%)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={pathLength}
              strokeDashoffset={animated ? 0 : pathLength}
              style={{ 
                transition: 'stroke-dashoffset 2s ease-out 0.5s',
                filter: 'drop-shadow(0 0 8px hsl(145 90% 52% / 0.6))'
              }}
            />
            
            {/* End dots */}
            {animated && (
              <>
                <circle
                  cx={chartWidth - padding}
                  cy={chartHeight - padding - (withoutAI[withoutAI.length - 1] / 100) * (chartHeight - 2 * padding)}
                  r="4"
                  fill="#ef4444"
                  style={{ 
                    opacity: animated ? 1 : 0,
                    transition: 'opacity 0.5s ease-out 2s'
                  }}
                />
                <circle
                  cx={chartWidth - padding}
                  cy={chartHeight - padding - (withAI[withAI.length - 1] / 100) * (chartHeight - 2 * padding)}
                  r="5"
                  fill="hsl(145, 90%, 52%)"
                  style={{ 
                    opacity: animated ? 1 : 0,
                    transition: 'opacity 0.5s ease-out 2.5s',
                    filter: 'drop-shadow(0 0 8px hsl(145 90% 52% / 0.8))'
                  }}
                />
              </>
            )}
            
            {/* Labels */}
            <text x={chartWidth - padding + 8} y={chartHeight - padding - (40 / 100) * (chartHeight - 2 * padding)} 
                  fill="#ef4444" fontSize="11" fontWeight="500">40%</text>
            <text x={chartWidth - padding + 8} y={chartHeight - padding - (95 / 100) * (chartHeight - 2 * padding)} 
                  fill="hsl(145, 90%, 52%)" fontSize="11" fontWeight="500">95%</text>
          </svg>
          
          {/* Legend */}
          <div className="flex items-center justify-center gap-8 mt-6 pt-4" style={{ borderTop: '1px solid hsl(0 0% 100% / 0.08)' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ background: '#ef4444' }} />
              <span className="text-xs" style={{ color: 'hsl(12, 8%, 55%)' }}>Without AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm neon-dot" />
              <span className="text-xs" style={{ color: 'hsl(12, 8%, 55%)' }}>With BonsaiBuddy</span>
            </div>
          </div>
        </div>

        {/* Continue */}
        <div className="animate-earth-fade-in opacity-0 delay-500 pt-4">
          <button onClick={onNext} className="earth-button-primary">
            See How It Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepProof;
