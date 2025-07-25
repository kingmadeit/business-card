import React from "react";

const GlassCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg p-6">
      {children}
    </div>
  );
};

export default GlassCard;
