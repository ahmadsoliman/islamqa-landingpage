import React from 'react';

export default function Section({ id, children, className = '', bgColor = 'bg-white' }) {
  return (
    <section id={id} className={`py-24 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
