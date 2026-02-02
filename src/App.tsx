import React, { useState } from 'react';

// This is a simplified version to get the vibe right immediately.
// You can expand this into a multi-frame carousel later.

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex flex-col items-center justify-between px-8 py-16 selection:bg-[#2ECC71]/30">
      
      {/* 1. TOP SECTION: Branding & Visual */}
      <div className="flex flex-col items-center mt-8">
        <div className="relative mb-10 group">
          {/* Glowing Aura behind the tree */}
          <div className="absolute -inset-4 bg-[#2ECC71] opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity duration-700"></div>
          
          {/* Main Hero Image - Using a high-end Bonsai visual */}
          <img 
            src="https://images.unsplash.com/photo-1512423175373-b643a6034155?q=80&w=1000&auto=format&fit=crop" 
            alt="Bonsai Hero" 
            className="relative w-72 h-72 object-cover rounded-3xl shadow-2xl border border-white/5"
          />
        </div>

        <h1 className="text-5xl font-serif text-[#2ECC71] tracking-tight mb-3">
          BonsaiBuddy
        </h1>
        <p className="text-gray-400 text-sm uppercase tracking-[0.4em] font-light">
          Patience, practiced.
        </p>
      </div>

      {/* 2. BOTTOM SECTION: Action & Trust */}
      <div className="w-full max-w-sm flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-gray-300 text-lg">Your journey to mastery starts here.</p>
          <p className="text-gray-500 text-xs italic">Join 10,000+ growers preserving the art.</p>
        </div>

        <button 
          className="w-full bg-[#2ECC71] hover:bg-[#27ae60] text-[#0F0F0F] font-bold py-5 rounded-full text-xl transition-all active:scale-95 shadow-lg shadow-[#2ECC71]/20"
          onClick={() => console.log("Starting onboarding...")}
        >
          Begin Journey
        </button>
      </div>

    </div>
  );
}

export default App;
