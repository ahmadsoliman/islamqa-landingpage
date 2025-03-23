import React from 'react';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="glass-effect p-6 rounded-xl hover-lift transition-all duration-300 hover:shadow-glow">
      <div className="text-[#4a7c12] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#4a7c12] mb-2">{title}</h3>
      <p className="text-[#242424]">{description}</p>
    </div>
  );
}
