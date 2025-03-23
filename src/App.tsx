import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
  Download,
  BookOpen,
  Shield,
  MessageSquare,
  Globe,
  Lock,
  Menu,
  X,
  Users,
} from 'lucide-react';
import Section from './components/Section';
import Paragraph from './components/Paragraph';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';
import CTASection from './components/CTASection';

const Colors = {
  primary: '#4a7c12',
  background: '#f1f9e7',
  text: '#242424',
  secondaryBackground: '#ffffff',
  border: 'rgba(74, 124, 18, 0.2)',
  secondary: '#f6ab59',
  tertiary: '#d5e8b4',
  accent: '#6a9f23',
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='min-h-screen bg-[#f1f9e7]'>
      {/* Navigation */}
      <nav className='glass-effect shadow-glow fixed w-full z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex items-center'>
              <BookOpen className='h-8 w-8 text-[#4a7c12]' />
              <span className='ml-2 text-xl font-bold text-[#4a7c12]'>
                IslamQA AI
              </span>
            </div>

            <div className='hidden md:flex items-center space-x-8'>
              <Link
                to='about'
                spy
                smooth
                offset={-64}
                duration={500}
                className='text-[#4a7c12] hover:text-[#6a9f23] cursor-pointer'
              >
                About
              </Link>
              <Link
                to='features'
                spy
                smooth
                offset={-64}
                duration={500}
                className='text-[#4a7c12] hover:text-[#6a9f23] cursor-pointer'
              >
                Features
              </Link>
              <Link
                to='testimonials'
                spy
                smooth
                offset={-64}
                duration={500}
                className='text-[#4a7c12] hover:text-[#6a9f23] cursor-pointer'
              >
                Testimonials
              </Link>
              <a
                href='https://play.google.com/store/apps/details?id=com.anonymous.IslamQA'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#4a7c12] text-white px-6 py-2 rounded-full hover:bg-[#6a9f23] transition duration-300'
              >
                Download Now
              </a>
            </div>

            <div className='md:hidden flex items-center'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-[#4a7c12]'
              >
                {isMenuOpen ? (
                  <X className='h-6 w-6' />
                ) : (
                  <Menu className='h-6 w-6' />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className='md:hidden bg-white'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link
                to='about'
                spy
                smooth
                offset={-64}
                duration={500}
                className='block px-3 py-2 text-[#4a7c12] cursor-pointer'
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to='features'
                spy
                smooth
                offset={-64}
                duration={500}
                className='block px-3 py-2 text-[#4a7c12] cursor-pointer'
                onClick={closeMenu}
              >
                Features
              </Link>
              <Link
                to='testimonials'
                spy
                smooth
                offset={-64}
                duration={500}
                className='block px-3 py-2 text-[#4a7c12] cursor-pointer'
                onClick={closeMenu}
              >
                Testimonials
              </Link>
              <a
                href='https://play.google.com/store/apps/details?id=com.anonymous.IslamQA'
                target='_blank'
                rel='noopener noreferrer'
                className='block w-full px-3 py-2 text-center bg-[#4a7c12] text-white rounded-full'
              >
                Download Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Section bgColor='bg-[#f1f9e7]'>
        <div className='grid md:grid-cols-3 gap-12 items-center'>
          <div className='relative md:col-span-2'>
            <div className='absolute -top-10 -left-10 w-20 h-20 bg-[#4a7c12]/10 rounded-full blur-xl'></div>
            <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-[#f6ab59]/10 rounded-full blur-xl'></div>
            <h1 className='text-4xl md:text-5xl font-bold text-[#4a7c12] mb-6 relative'>
              Bridging Faith and Technology
            </h1>
            <p className='text-xl md:text-2xl text-[#6a9f23] mb-8'>
              Instant, Authentic Islamic Answers at Your Fingertips
            </p>
            <Paragraph>
              In an era where misinformation spreads at the speed of a click,
              IslamQA AI transforms how Muslims access reliable religious
              guidance.
            </Paragraph>
            <Paragraph>
              Powered by advanced AI and backed by traditional Islamic
              scholarship, our app delivers immediate answers to your everyday
              questions.
            </Paragraph>
            <div className='flex flex-wrap gap-4 max-md:flex max-md:justify-center'>
              <a
                href='https://play.google.com/store/apps/details?id=com.anonymous.IslamQA'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#4a7c12] text-white px-8 py-3 rounded-full hover:bg-[#6a9f23] transition-all duration-300 hover:shadow-glow-lg hover:scale-105 flex items-center'
              >
                <Download className='mr-2 h-5 w-5' />
                Download Now
              </a>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='relative animate-float w-fit'>
              <div className='absolute inset-0 bg-[#4a7c12] rounded-2xl blur-2xl opacity-10 transform rotate-3'></div>
              <img
                src='/images/screenshot_english.png'
                alt='IslamQA AI Screenshot'
                className='rounded-2xl shadow-2xl relative max-h-[80vh] z-10 hover-lift'
              />
              <div className='absolute inset-0 bg-gradient-to-r from-[#4a7c12]/20 to-transparent rounded-2xl z-20'></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Rest of the components remain unchanged */}
      {/* About Section */}
      <Section id='about'>
        <h2 className='text-3xl font-bold text-center text-[#4a7c12] mb-8'>
          The Birth of IslamQA AI
        </h2>
        <div className='glass-effect p-8 rounded-2xl shadow-glow hover-lift'>
          <Paragraph>
            Frustrated by the endless search for trustworthy Islamic answers,
            Ahmad Soliman— a software engineer and devout Muslim from New
            York—created IslamQA AI.
          </Paragraph>
          <Paragraph>
            Inspired by a personal experience during Ramadan, he set out to
            solve the problem of conflicting information online.
          </Paragraph>
          <Paragraph>
            What began as a quest for clarity transformed into a groundbreaking
            innovation in Islamic knowledge, marrying cutting-edge AI with
            centuries of scholarly tradition.
          </Paragraph>
        </div>
      </Section>

      {/* Features Section */}
      <Section id='features' bgColor='bg-[#f1f9e7]'>
        <h2 className='text-3xl font-bold text-center text-[#4a7c12] mb-12'>
          Key Features
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <FeatureCard
            icon={<MessageSquare className='h-8 w-8' />}
            title='Instant Answers'
            description='Receive reliable responses within seconds, no matter the complexity of your question.'
          />
          <FeatureCard
            icon={<Shield className='h-8 w-8' />}
            title='Authentic & Verified'
            description='All answers are sourced from the respected IslamQA database, ensuring adherence to traditional Islamic scholarship.'
          />
          <FeatureCard
            icon={<Globe className='h-8 w-8' />}
            title='User-Friendly AI'
            description='Interacts naturally in both English and Arabic, recognizing colloquialisms, mixed languages, and even typos.'
          />
          <FeatureCard
            icon={<BookOpen className='h-8 w-8' />}
            title='Wide Range of Topics'
            description='From daily rituals to contemporary issues, get guidance on everything from prayer to modern financial practices.'
          />
          <FeatureCard
            icon={<Users className='h-8 w-8' />}
            title='Ethical Framework'
            description='For sensitive or complex matters, the app directs you to consult a qualified human scholar.'
          />
          <FeatureCard
            icon={<Lock className='h-8 w-8' />}
            title='Privacy Guaranteed'
            description='Ask any question with confidence, knowing that your queries remain confidential.'
          />
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id='testimonials'>
        <h2 className='text-3xl font-bold text-center text-[#4a7c12] mb-12'>
          Real Stories, Real Impact
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <TestimonialCard
            quote='IslamQA AI has revolutionized how I support new Muslims. New converts no longer hesitate to ask questions—they have immediate access to reliable knowledge, letting us focus on spiritual growth.'
            author='Samir Mahmoud'
            role='Conversion Specialist, Chicago'
          />
          <TestimonialCard
            quote='Being the only Muslim doctor in a 200-mile radius, I often felt isolated. IslamQA AI has given me the confidence to practice my faith, even in the remotest areas.'
            author='Aisha Rahman'
            role='Physician'
          />
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className='glass-effect py-12 relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='col-span-2'>
              <div className='flex items-center mb-4'>
                <BookOpen className='h-8 w-8 text-[#4a7c12]' />
                <span className='ml-2 text-xl font-bold text-[#4a7c12]'>
                  IslamQA AI
                </span>
              </div>
              <Paragraph className='text-left'>
                Empowering Muslims with the wisdom of centuries in the palm of
                your hand.
              </Paragraph>
            </div>
            <div>
              <h3 className='font-semibold text-[#4a7c12] mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    to='about'
                    spy
                    smooth
                    offset={-64}
                    duration={500}
                    className='text-[#242424] hover:text-[#4a7c12] cursor-pointer'
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to='features'
                    spy
                    smooth
                    offset={-64}
                    duration={500}
                    className='text-[#242424] hover:text-[#4a7c12] cursor-pointer'
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to='testimonials'
                    spy
                    smooth
                    offset={-64}
                    duration={500}
                    className='text-[#242424] hover:text-[#4a7c12] cursor-pointer'
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-[#4a7c12] mb-4'>Legal</h3>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='text-[#242424] hover:text-[#4a7c12]'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='text-[#242424] hover:text-[#4a7c12]'>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href='#' className='text-[#242424] hover:text-[#4a7c12]'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-[#4a7c12]/20 mt-8 pt-8 text-center text-[#242424]'>
            <p>&copy; {currentYear} IslamQA AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
