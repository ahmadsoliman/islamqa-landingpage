import React from 'react';

export default function Paragraph({ children, className = '' }) {
  return (
    <p className={`text-[#242424] text-lg leading-relaxed mb-8 max-w-3xl mx-auto ${className}`}>
      {children}
    </p>
  );
}
