import { useState } from "react";
import { TreeDeciduous, TreePine, Palmtree } from "lucide-react";

interface StepRitualProps {
  onNext: () => void;
}

const focuses = [
  {
    id: "tropical",
    icon: Palmtree,
    title: "Indoor Tropicals",
    description: "Ficus, Jade, Schefflera",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "deciduous",
    icon: TreeDeciduous,
    title: "Deciduous",
    description: "Maple, Elm, Beech",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "conifer",
    icon: TreePine,
    title: "Conifers",
    description: "Pine, Juniper, Cedar",
    gradient: "from-green-600/20 to-emerald-600/20",
  },
];

const StepRitual = ({ onNext }: StepRitualProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="zen-container">
      <div className="flex flex-col items-center text-center max-w-lg space-y-10">
        {/* Header */}
        <div className="space-y-4 animate-zen-fade-in opacity-0">
          <p className="zen-tagline">The Ritual</p>
          <h2 className="zen-title text-3xl md:text-4xl">Select your focus.</h2>
          <p className="zen-subtitle">Choose all that apply to your collection.</p>
        </div>

        {/* Options Grid */}
        <div className="w-full grid grid-cols-1 gap-4 animate-zen-slide-up opacity-0 delay-200">
          {focuses.map((focus) => {
            const Icon = focus.icon;
            const isSelected = selected.includes(focus.id);
            
            return (
              <button
                key={focus.id}
                onClick={() => toggleSelect(focus.id)}
                className={`zen-choice-card flex items-center gap-5 text-left ${isSelected ? 'selected' : ''}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br transition-all duration-300 ${
                  isSelected ? 'bg-primary/20' : focus.gradient
                }`}>
                  <Icon className={`w-8 h-8 transition-colors duration-300 ${
                    isSelected ? 'text-primary' : 'text-muted-foreground'
                  }`} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground text-lg">{focus.title}</h3>
                  <p className="text-sm text-muted-foreground">{focus.description}</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isSelected 
                    ? 'border-primary bg-primary' 
                    : 'border-border'
                }`}>
                  {isSelected && (
                    <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Adapting text */}
        {selected.length > 0 && (
          <p className="text-sm text-primary animate-zen-fade-in">
            ✨ Personalizing your experience for {selected.length} tree type{selected.length > 1 ? 's' : ''}
          </p>
        )}

        {/* Continue */}
        <div className="animate-zen-fade-in opacity-0 delay-400 pt-4">
          <button 
            onClick={onNext}
            disabled={selected.length === 0}
            className={`zen-button-primary transition-opacity duration-300 ${
              selected.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepRitual;
