import { Leaf } from "lucide-react";
interface StepEntryProps {
  onNext: () => void;
}
const StepEntry = ({
  onNext
}: StepEntryProps) => {
  return <div className="zen-container bg-secondary-foreground">
      <div className="flex flex-col items-center text-center max-w-md space-y-12">
        {/* Logo */}
        <div className="animate-zen-fade-in opacity-0">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-zen-breathe">
            <Leaf className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        {/* Brand */}
        <div className="space-y-4 animate-zen-fade-in opacity-0 delay-200">
          <h1 className="zen-title">BonsaiBuddy</h1>
          <p className="zen-tagline">Patience, practiced.</p>
        </div>

        {/* CTA */}
        <div className="animate-zen-fade-in opacity-0 delay-400 pt-8">
          <button onClick={onNext} className="zen-button-primary text-lg">
            Begin Your Journey
          </button>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-zen-fade-in opacity-0 delay-600">
          <div className="flex items-center gap-2 text-muted-foreground/50">
            <div className="w-8 h-px bg-border" />
            <span className="text-xs tracking-widest">SCROLL</span>
            <div className="w-8 h-px bg-border" />
          </div>
        </div>
      </div>
    </div>;
};
export default StepEntry;