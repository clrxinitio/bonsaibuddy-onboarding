import { Leaf } from "lucide-react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsOfServiceModal from "./TermsOfServiceModal";

interface StepConsentProps {
  onComplete: () => void;
}

const StepConsent = ({ onComplete }: StepConsentProps) => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col px-6 py-8"
      style={{ background: 'hsl(12, 10%, 10%)' }}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-6">
        {/* Leaf Icon with Glow */}
        <div className="animate-earth-scale opacity-0">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center animate-neon-glow"
            style={{ 
              background: 'hsl(145 90% 52% / 0.1)',
              boxShadow: '0 0 30px hsl(145 90% 52% / 0.3)'
            }}
          >
            <Leaf 
              className="w-10 h-10" 
              style={{ color: 'hsl(145, 90%, 52%)' }}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Headline */}
        <h2 
          className="earth-title text-3xl md:text-4xl animate-earth-fade-in opacity-0 delay-100"
        >
          Precision & Privacy
        </h2>

        {/* Body Text */}
        <p 
          className="text-sm md:text-base leading-relaxed animate-earth-fade-in opacity-0 delay-200"
          style={{ color: 'hsl(12, 8%, 55%)' }}
        >
          To provide accurate identification and health diagnostics, BonsaiBuddy uses AI-powered vision logic. By continuing, you agree to the secure processing of your tree images to generate personalized care guidance.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-md mx-auto space-y-4 animate-earth-fade-in opacity-0 delay-300 pb-4">
        {/* CTA Button */}
        <button 
          onClick={onComplete} 
          className="earth-button-primary w-full text-base py-4 font-medium"
        >
          I Agree & Continue
        </button>

        {/* Legal Links */}
        <div className="flex items-center justify-center gap-4">
          <PrivacyPolicyModal>
            <button 
              className="text-xs transition-colors hover:opacity-80"
              style={{ color: 'hsl(12, 8%, 45%)' }}
            >
              Privacy Policy
            </button>
          </PrivacyPolicyModal>
          <span style={{ color: 'hsl(12, 8%, 35%)' }}>•</span>
          <TermsOfServiceModal>
            <button 
              className="text-xs transition-colors hover:opacity-80"
              style={{ color: 'hsl(12, 8%, 45%)' }}
            >
              Terms of Service
            </button>
          </TermsOfServiceModal>
        </div>
      </div>
    </div>
  );
};

export default StepConsent;
