import { Heart, Sun, Sparkles } from "lucide-react";
import { useState } from "react";

interface StepIntentProps {
  onNext: () => void;
}

const intents = [
  {
    id: "save",
    icon: Heart,
    title: "Save a dying tree",
    description: "Revive and restore your struggling bonsai",
  },
  {
    id: "care",
    icon: Sun,
    title: "Master daily care",
    description: "Build consistent, nurturing habits",
  },
  {
    id: "refine",
    icon: Sparkles,
    title: "Refine my art",
    description: "Elevate your styling and technique",
  },
];

const StepIntent = ({ onNext }: StepIntentProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div 
      className="min-h-screen w-full flex flex-col px-6 py-8"
      style={{ background: 'hsl(12, 10%, 10%)' }}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-lg mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-3 animate-earth-fade-in opacity-0">
          <p className="earth-tagline">The Intent</p>
          <h2 className="earth-title text-3xl md:text-4xl">What is your vision?</h2>
        </div>

        {/* Options */}
        <div className="w-full space-y-3 animate-earth-slide-right opacity-0 delay-200">
          {intents.map((intent, index) => {
            const Icon = intent.icon;
            const isSelected = selected === intent.id;
            
            return (
              <button
                key={intent.id}
                onClick={() => setSelected(intent.id)}
                className={`earth-choice-card w-full flex items-center gap-4 text-left ${isSelected ? 'selected' : ''}`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ 
                    background: isSelected ? 'hsl(145 90% 52% / 0.15)' : 'hsl(0 0% 100% / 0.05)',
                    boxShadow: isSelected ? '0 0 15px hsl(145 90% 52% / 0.3)' : 'none'
                  }}
                >
                  <Icon 
                    className="w-5 h-5 transition-colors duration-300" 
                    style={{ color: isSelected ? 'hsl(145, 90%, 52%)' : 'hsl(12, 8%, 55%)' }}
                    strokeWidth={1.5} 
                  />
                </div>
                <div>
                  <h3 className="font-medium" style={{ color: 'hsl(60, 50%, 98%)' }}>{intent.title}</h3>
                  <p className="text-sm" style={{ color: 'hsl(12, 8%, 55%)' }}>{intent.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Continue - Fixed at bottom */}
      <div className="w-full max-w-lg mx-auto animate-earth-fade-in opacity-0 delay-500 pb-4">
        <button 
          onClick={onNext}
          disabled={!selected}
          className={`earth-button-primary w-full text-base py-4 font-medium transition-opacity duration-300 ${
            !selected ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepIntent;
