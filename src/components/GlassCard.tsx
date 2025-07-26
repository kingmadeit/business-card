import React from "react";
import clsx from 'clsx'

const GlassCard = ({ children, className = ''}: { children: React.ReactNode, className?: string }) => {
  return (
    <section className={`glass-border-wrapper border-animated max-w-[320px] w-full mx-auto`}>
      <div className={clsx('glass-inner', className)}>
        {children}
      </div>
    </section>
  );
};

export default GlassCard;
