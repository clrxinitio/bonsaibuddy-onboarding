import { Lock } from "lucide-react";

interface StepIdentityProps {
  onNext: () => void;
}

const StepIdentity = ({ onNext }: StepIdentityProps) => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col px-6 py-8"
      style={{ background: 'hsl(12, 10%, 10%)' }}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4 animate-earth-fade-in opacity-0">
          <p className="earth-tagline">The Identity</p>
          <h2 className="earth-title text-3xl md:text-4xl">Create your profile.</h2>
          <p className="earth-subtitle">
            Secure your garden data and custom care schedule.
          </p>
        </div>

        {/* Security badge */}
        <div 
          className="flex items-center gap-2 px-4 py-2 rounded-full animate-earth-fade-in opacity-0 delay-200"
          style={{ 
            background: 'hsl(145 90% 52% / 0.1)',
            border: '1px solid hsl(145 90% 52% / 0.3)'
          }}
        >
          <Lock className="w-4 h-4" style={{ color: 'hsl(145, 90%, 52%)' }} />
          <span className="text-sm font-medium neon-glow">End-to-end encrypted</span>
        </div>

        {/* Auth buttons */}
        <div className="w-full space-y-4 animate-earth-slide-right opacity-0 delay-300">
          {/* Apple button */}
          <button 
            onClick={onNext}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:opacity-90"
            style={{ 
              background: 'hsl(60, 50%, 98%)',
              color: 'hsl(12, 10%, 10%)'
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Continue with Apple
          </button>

          {/* Google button */}
          <button 
            onClick={onNext}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300"
            style={{ 
              background: 'hsl(0 0% 100% / 0.03)',
              border: '1px solid hsl(0 0% 100% / 0.1)',
              color: 'hsl(60, 50%, 98%)'
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full animate-earth-fade-in opacity-0 delay-400">
          <div className="flex-1 h-px" style={{ background: 'hsl(0 0% 100% / 0.08)' }} />
          <span className="text-xs" style={{ color: 'hsl(12, 8%, 55%)' }}>or</span>
          <div className="flex-1 h-px" style={{ background: 'hsl(0 0% 100% / 0.08)' }} />
        </div>

        {/* Email option */}
        <button 
          onClick={onNext}
          className="earth-button-secondary animate-earth-fade-in opacity-0 delay-500"
        >
          Continue with email
        </button>

        {/* Terms */}
        <p className="text-xs max-w-xs animate-earth-fade-in opacity-0 delay-600" style={{ color: 'hsl(12, 8%, 45%)' }}>
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default StepIdentity;
