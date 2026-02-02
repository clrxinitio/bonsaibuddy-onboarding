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
    <div className="zen-container">
      <div className="flex flex-col items-center text-center max-w-lg space-y-10">
        {/* Header */}
        <div className="space-y-4 animate-zen-fade-in opacity-0">
          <p className="zen-tagline">The Intent</p>
          <h2 className="zen-title text-3xl md:text-4xl">What is your vision?</h2>
        </div>

        {/* Options */}
        <div className="w-full space-y-4 animate-zen-slide-up opacity-0 delay-200">
          {intents.map((intent, index) => {
            const Icon = intent.icon;
            const isSelected = selected === intent.id;
            
            return (
              <button
                key={intent.id}
                onClick={() => setSelected(intent.id)}
                className={`zen-choice-card w-full flex items-center gap-4 text-left ${isSelected ? 'selected' : ''}`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{intent.title}</h3>
                  <p className="text-sm text-muted-foreground">{intent.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Continue */}
        <div className="animate-zen-fade-in opacity-0 delay-500 pt-4">
          <button 
            onClick={onNext}
            disabled={!selected}
            className={`zen-button-primary transition-opacity duration-300 ${
              !selected ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepIntent;
