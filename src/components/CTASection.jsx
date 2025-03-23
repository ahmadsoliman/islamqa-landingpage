import React from 'react';
import { Download } from 'lucide-react';

export default function CTASection() {
  return (
    <section className='py-24 bg-gradient-to-r from-[#4a7c12] to-[#6a9f23] relative overflow-hidden'>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <h2 className='text-3xl font-bold text-white mb-6'>
          Experience Authentic Islamic Guidance
        </h2>
        <div className='flex flex-wrap justify-center gap-4'>
          <a
            href='https://play.google.com/store/apps/details?id=com.anonymous.IslamQA'
            target='_blank'
            rel='noopener noreferrer'
            className='glass-effect px-8 py-3 rounded-full text-[#4a7c12] hover:bg-[#4a7c12] hover:text-white transition-all duration-300 hover:shadow-glow-lg hover:scale-105 flex items-center'
          >
            <Download className='mr-2 h-5 w-5' />
            Download on the Play Store
          </a>
        </div>
      </div>
    </section>
  );
}
