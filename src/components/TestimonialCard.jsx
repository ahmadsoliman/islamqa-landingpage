import React from 'react';

export default function TestimonialCard({ quote, author, role }) {
  return (
    <div className="glass-effect p-8 rounded-xl hover-lift transition-all duration-300 hover:shadow-glow">
      <p className="text-[#242424] mb-4 italic">"{quote}"</p>
      <div className="flex items-center">
        <div>
          <p className="font-semibold text-[#4a7c12]">{author}</p>
          <p className="text-sm text-[#6a9f23]">{role}</p>
        </div>
      </div>
    </div>
  );
}
