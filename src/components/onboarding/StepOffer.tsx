import { Check, Zap } from "lucide-react";

interface StepOfferProps {
  onComplete: () => void;
}

const features = [
  { 
    text: "Perfect Species Identification", 
    description: "100% accurate recognition of your tree's variety and specific needs.",
    highlight: false 
  },
  { 
    text: "In-Depth Health Diagnostics", 
    description: "Instantly detect pests, diseases, or deficiencies with a single scan.",
    highlight: false 
  },
  { 
    text: "12-Month Custom Roadmap", 
    description: "A full year of guided care including precise pruning and shaping recommendations.",
    highlight: true 
  },
  { 
    text: "Unlimited Scans & Storage", 
    description: "Scan every tree in your garden with unlimited cloud history for Pro users.",
    highlight: false 
  },
  { 
    text: "Precision Watering Reminders", 
    description: "Smart alerts that adjust to your climate and tree species.",
    highlight: false 
  },
  { 
    text: "Weekly Feature Drops", 
    description: "Pro users get priority access to new tools and logic updates added every single week.",
    highlight: false,
    badge: true 
  },
];

const StepOffer = ({ onComplete }: StepOfferProps) => {
  return (
    <div className="earth-container">
      <div className="flex flex-col items-center text-center max-w-lg space-y-8 py-8">
        {/* Pro Badge */}
        <div className="animate-earth-scale opacity-0">
          <div 
            className="px-5 py-2 rounded-full"
            style={{ 
              background: 'hsl(145 90% 52% / 0.1)',
              border: '1px solid hsl(145 90% 52% / 0.3)'
            }}
          >
            <span className="text-sm font-semibold tracking-wide" style={{ color: 'hsl(145, 90%, 52%)' }}>
              BONSAIBUDDY PRO
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-4 animate-earth-fade-in opacity-0 delay-100">
          <h2 className="earth-title text-3xl md:text-4xl lg:text-5xl">
            Never Guess <span className="neon-glow">Again</span>.
          </h2>
          <p className="earth-subtitle max-w-md mx-auto">
            BonsaiBuddy Pro transforms your scans into a professional action plan for every tree in your collection.
          </p>
        </div>

        {/* Features List */}
        <div className="w-full space-y-3 animate-earth-slide-right opacity-0 delay-200 text-left">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                feature.highlight ? 'ring-1 ring-accent/50' : ''
              }`}
              style={{ 
                background: feature.highlight 
                  ? 'hsl(145 90% 52% / 0.08)' 
                  : 'hsl(0 0% 100% / 0.02)'
              }}
            >
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ 
                  background: 'hsl(145 90% 52% / 0.15)',
                }}
              >
                <Check className="w-3.5 h-3.5" style={{ color: 'hsl(145, 90%, 52%)' }} strokeWidth={3} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span 
                    className={`font-medium ${feature.highlight ? 'text-base' : 'text-sm'}`} 
                    style={{ color: 'hsl(60, 50%, 98%)' }}
                  >
                    {feature.text}
                  </span>
                  {feature.badge && (
                    <span 
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{ 
                        background: 'hsl(145 90% 52% / 0.15)',
                        color: 'hsl(145, 90%, 52%)'
                      }}
                    >
                      <Zap className="w-3 h-3" />
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: 'hsl(12, 8%, 55%)' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing & CTA */}
        <div className="w-full space-y-4 animate-earth-fade-in opacity-0 delay-300 pt-2">
          {/* Pricing disclosure */}
          <div className="space-y-1">
            <p className="text-sm font-medium" style={{ color: 'hsl(60, 50%, 98%)' }}>
              Then $29.99/year <span style={{ color: 'hsl(12, 8%, 55%)' }}>(billed annually)</span>
            </p>
            <p className="text-xs" style={{ color: 'hsl(12, 8%, 45%)' }}>
              Less than the cost of a morning coffee once a month.
            </p>
          </div>

          {/* CTA Button */}
          <button onClick={onComplete} className="earth-button-primary w-full text-lg py-5 font-medium">
            Start 7-Day Free Trial
          </button>
          
          {/* Skip option */}
          <button 
            onClick={onComplete} 
            className="text-sm transition-colors hover:opacity-80"
            style={{ color: 'hsl(12, 8%, 45%)' }}
          >
            Maybe later
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 pt-2 animate-earth-fade-in opacity-0 delay-400">
          <div className="flex items-center gap-2" style={{ color: 'hsl(12, 8%, 50%)' }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2" style={{ color: 'hsl(12, 8%, 50%)' }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs">Cancel Anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOffer;
