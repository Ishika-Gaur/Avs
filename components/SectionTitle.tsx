
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      <div className={`flex items-center space-x-2 mb-4 ${centered ? 'justify-center' : ''}`}>
        <span className="w-8 h-1 bg-brand rounded-full"></span>
        <span className={`text-sm font-extrabold uppercase tracking-[0.3em] ${light ? 'text-corporate-300' : 'text-brand'}`}>AVS Enterprise</span>
      </div>
      <h2 className={`text-3xl md:text-5xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
