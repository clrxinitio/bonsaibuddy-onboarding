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
  },
  {
    id: "deciduous",
    icon: TreeDeciduous,
    title: "Deciduous",
    description: "Maple, Elm, Beech",
  },
  {
    id: "conifer",
    icon: TreePine,
    title: "Conifers",
    description: "Pine, Juniper, Cedar",
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
    <div className="earth-container">
      <div className="flex flex-col items-center text-center max-w-lg space-y-10">
        {/* Header */}
        <div className="space-y-4 animate-earth-fade-in opacity-0">
          <p className="earth-tagline">The Ritual</p>
          <h2 className="earth-title text-3xl md:text-4xl">Select your focus.</h2>
          <p className="earth-subtitle">Choose all that apply to your collection.</p>
        </div>

        {/* Options Grid */}
        <div className="w-full grid grid-cols-1 gap-4 animate-earth-slide-right opacity-0 delay-200">
          {focuses.map((focus) => {
            const Icon = focus.icon;
            const isSelected = selected.includes(focus.id);
            
            return (
              <button
                key={focus.id}
                onClick={() => toggleSelect(focus.id)}
                className={`earth-choice-card flex items-center gap-5 text-left ${isSelected ? 'selected' : ''}`}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                  style={{ 
                    background: isSelected ? 'hsl(145 90% 52% / 0.1)' : 'hsl(0 0% 100% / 0.03)',
                    boxShadow: isSelected ? '0 0 20px hsl(145 90% 52% / 0.3)' : 'none'
                  }}
                >
                  <Icon 
                    className="w-8 h-8 transition-colors duration-300"
                    style={{ color: isSelected ? 'hsl(145, 90%, 52%)' : 'hsl(12, 8%, 55%)' }}
                    strokeWidth={1.5} 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg" style={{ color: 'hsl(60, 50%, 98%)' }}>{focus.title}</h3>
                  <p className="text-sm" style={{ color: 'hsl(12, 8%, 55%)' }}>{focus.description}</p>
                </div>
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ 
                    border: isSelected ? '2px solid hsl(145, 90%, 52%)' : '2px solid hsl(0 0% 100% / 0.15)',
                    background: isSelected ? 'hsl(145, 90%, 52%)' : 'transparent',
                    boxShadow: isSelected ? '0 0 10px hsl(145 90% 52% / 0.5)' : 'none'
                  }}
                >
                  {isSelected && (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="hsl(12, 10%, 10%)">
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
          <p className="text-sm animate-earth-fade-in neon-glow">
            ✨ Personalizing your experience for {selected.length} tree type{selected.length > 1 ? 's' : ''}
          </p>
        )}

        {/* Continue */}
        <div className="animate-earth-fade-in opacity-0 delay-400 pt-4">
          <button 
            onClick={onNext}
            disabled={selected.length === 0}
            className={`earth-button-primary transition-opacity duration-300 ${
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
