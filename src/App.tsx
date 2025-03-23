import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { 
  Download,
  Smartphone,
  BookOpen,
  Shield,
  MessageSquare,
  Globe,
  Lock,
  ChevronRight,
  Menu,
  X,
  Heart,
  Mic,
  Brain,
  Languages,
  Settings,
  Users
} from 'lucide-react';

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
    <div className="min-h-screen bg-[#f1f9e7]">
      {/* Navigation - Updated with glass effect */}
      <nav className="glass-effect shadow-glow fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-[#4a7c12]" />
              <span className="ml-2 text-xl font-bold text-[#4a7c12]">IslamQA AI</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-64} 
                duration={500} 
                className="text-[#4a7c12] hover:text-[#6a9f23] cursor-pointer"
              >
                About
              </Link>
              <Link 
                to="features" 
                spy={true} 
                smooth={true} 
                offset={-64} 
                duration={500} 
                className="text-[#4a7c12] hover:text-[#6a9f23] cursor-pointer"
              >
                Features
              </Link>
              <Link 
                to="testimonials" 
                spy={true} 
                smooth={true} 
                offset={-64} 
                duration={500} 
                className="text-[#4a7c12] hover:text-[#6a9f23] cursor-pointer"
              >
                Testimonials
              </Link>
              <button className="bg-[#4a7c12] text-white px-6 py-2 rounded-full hover:bg-[#6a9f23] transition duration-300">
                Download Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#4a7c12]"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-64} 
                duration={500} 
                className="block px-3 py-2 text-[#4a7c12] cursor-pointer"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="features" 
                spy={true} 
                smooth={true} 
                offset={-64} 
                duration={500} 
                className="block px-3 py-2 text-[#4a7c12] cursor-pointer"
                onClick={closeMenu}
              >
                Features
              </Link>
              <Link 
                to="testimonials" 
                spy={true} 
                smooth={true} 
                offset={-64} 
                duration={500} 
                className="block px-3 py-2 text-[#4a7c12] cursor-pointer"
                onClick={closeMenu}
              >
                Testimonials
              </Link>
              <button className="w-full text-left px-3 py-2 text-[#4a7c12] font-semibold">
                Download Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Enhanced with modern elements */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 gradient-animate">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#4a7c12]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#f6ab59]/10 rounded-full blur-xl"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#4a7c12] mb-4 relative">
                Bridging Faith and Technology
              </h1>
              <p className="text-xl md:text-2xl text-[#6a9f23] mb-6">
                Instant, Authentic Islamic Answers at Your Fingertips
              </p>
              <p className="text-[#242424] mb-8">
                In an era where misinformation spreads at the speed of a click, IslamQA AI transforms how Muslims access reliable religious guidance. Powered by advanced AI and backed by traditional Islamic scholarship, our app delivers immediate answers to your everyday questions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#4a7c12] text-white px-8 py-3 rounded-full hover:bg-[#6a9f23] transition-all duration-300 hover:shadow-glow-lg hover:scale-105 flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Now
                </button>
                <button className="border-2 border-[#4a7c12] text-[#4a7c12] px-8 py-3 rounded-full hover:bg-[#4a7c12] hover:text-white transition-all duration-300 hover:shadow-glow hover:scale-105">
                  Get Started Today
                </button>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-[#4a7c12] rounded-2xl blur-2xl opacity-10 transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1584286595398-a59511e0e2b2?auto=format&fit=crop&w=800&q=80"
                alt="Islamic Architecture"
                className="rounded-2xl shadow-2xl relative z-10 hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#4a7c12]/20 to-transparent rounded-2xl z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Added modern card design */}
      <section id="about" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center text-[#4a7c12] mb-8">The Birth of IslamQA AI</h2>
          <div className="max-w-3xl mx-auto">
            <div className="glass-effect p-8 rounded-2xl shadow-glow hover-lift">
              <p className="text-[#242424] text-lg leading-relaxed">
                Frustrated by the endless search for trustworthy Islamic answers, Ahmad Soliman— a software engineer and devout Muslim from New York—created IslamQA AI. Inspired by a personal experience during Ramadan, he set out to solve the problem of conflicting information online. What began as a quest for clarity transformed into a groundbreaking innovation in Islamic knowledge, marrying cutting-edge AI with centuries of scholarly tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Enhanced with floating elements */}
      <section className="py-16 bg-[#f1f9e7] relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center text-[#4a7c12] mb-8">Inside the Technology</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-effect p-8 rounded-2xl shadow-glow hover-lift">
                <p className="text-[#242424] text-lg leading-relaxed">
                  IslamQA AI harnesses sophisticated natural language processing to understand questions as naturally as you would ask at your local mosque. Whether your inquiry is about prayer, fasting, or modern financial dilemmas, our AI processes your question and retrieves comprehensive answers. Each response is meticulously sourced from Quranic verses, authentic Hadith, and trusted scholarly interpretations. This is not just a yes/no response—the app explains the underlying principles and provides the evidence supporting various perspectives.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Brain className="h-12 w-12" />, text: "AI Processing" },
                { icon: <BookOpen className="h-12 w-12" />, text: "Scholar Review" },
                { icon: <Shield className="h-12 w-12" />, text: "Verification" },
                { icon: <MessageSquare className="h-12 w-12" />, text: "Response" }
              ].map((step, index) => (
                <div key={index} className="glass-effect p-6 rounded-xl text-center hover-lift transition-all duration-300 hover:shadow-glow">
                  <div className="text-[#4a7c12] flex justify-center mb-3">{step.icon}</div>
                  <p className="text-[#4a7c12] font-semibold">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Modern card design */}
      <section id="features" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center text-[#4a7c12] mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Instant Answers",
                description: "Receive reliable responses within seconds, no matter the complexity of your question."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Authentic & Verified",
                description: "All answers are sourced from the respected IslamQA database, ensuring adherence to traditional Islamic scholarship."
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "User-Friendly AI",
                description: "Interacts naturally in both English and Arabic, recognizing colloquialisms, mixed languages, and even typos."
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Wide Range of Topics",
                description: "From daily rituals to contemporary issues, get guidance on everything from prayer to modern financial practices."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Ethical Framework",
                description: "For sensitive or complex matters, the app directs you to consult a qualified human scholar."
              },
              {
                icon: <Lock className="h-8 w-8" />,
                title: "Privacy Guaranteed",
                description: "Ask any question with confidence, knowing that your queries remain confidential."
              }
            ].map((feature, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl hover-lift transition-all duration-300 hover:shadow-glow">
                <div className="text-[#4a7c12] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#4a7c12] mb-2">{feature.title}</h3>
                <p className="text-[#242424]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced cards */}
      <section id="testimonials" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center text-[#4a7c12] mb-12">Real Stories, Real Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "IslamQA AI has revolutionized how I support new Muslims. New converts no longer hesitate to ask questions—they have immediate access to reliable knowledge, letting us focus on spiritual growth.",
                author: "Samir Mahmoud",
                role: "Conversion Specialist, Chicago"
              },
              {
                quote: "Being the only Muslim doctor in a 200-mile radius, I often felt isolated. IslamQA AI has given me the confidence to practice my faith, even in the remotest areas.",
                author: "Aisha Rahman",
                role: "Physician"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-effect p-8 rounded-xl hover-lift transition-all duration-300 hover:shadow-glow">
                <p className="text-[#242424] mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-[#4a7c12]">{testimonial.author}</p>
                    <p className="text-sm text-[#6a9f23]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Approach Section - Modern design */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center text-[#4a7c12] mb-8">Technology with a Heart</h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-effect p-8 rounded-2xl hover-lift transition-all duration-300 hover:shadow-glow">
              <Heart className="h-16 w-16 text-[#4a7c12] mx-auto mb-6" />
              <p className="text-[#242424] text-lg leading-relaxed mb-8">
                At the core of IslamQA AI lies a commitment to ethical technology. Our development team, composed of AI experts and traditional Islamic scholars, has established robust ethical guardrails. For questions involving complex personal situations, the app immediately recommends consulting a trusted human scholar. This balanced approach ensures that technology enhances—not replaces—the invaluable human element in Islamic guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap Section - Enhanced cards */}
      <section className="py-16 bg-[#f1f9e7] relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center text-[#4a7c12] mb-8">Looking Forward</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="h-8 w-8" />,
                title: "Voice Activation",
                description: "Coming soon: Voice-activated functionality for elderly Muslims and those with limited literacy."
              },
              {
                icon: <Languages className="h-8 w-8" />,
                title: "Global Access",
                description: "Expanding multilingual support for underserved populations in Africa and Southeast Asia."
              },
              {
                icon: <Settings className="h-8 w-8" />,
                title: "Specialized Versions",
                description: "Developing versions tailored for children and specific user needs."
              }
            ].map((feature, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl hover-lift transition-all duration-300 hover:shadow-glow">
                <div className="text-[#4a7c12] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#4a7c12] mb-2">{feature.title}</h3>
                <p className="text-[#242424]">{feature.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#242424] mt-8 max-w-3xl mx-auto">
            Our vision is clear: to make the timeless wisdom of Islamic scholarship accessible to every Muslim, regardless of language, location, or education.
          </p>
        </div>
      </section>

      {/* Final CTA Section - Modern gradient background */}
      <section className="py-16 bg-gradient-to-r from-[#4a7c12] to-[#6a9f23] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Experience Authentic Islamic Guidance</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Muslims worldwide who trust IslamQA AI for immediate, authentic religious guidance. Whether you're a student, professional, or lifelong believer, our app bridges the gap between traditional scholarship and modern technology. Download IslamQA AI now and take the first step towards a more informed and connected faith journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="glass-effect text-[#4a7c12] px-8 py-3 rounded-full hover:bg-[#f6ab59] hover:text-white transition-all duration-300 hover:shadow-glow-lg hover:scale-105 flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Download on the Play Store
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#4a7c12] transition-all duration-300 hover:shadow-glow hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Glass effect */}
      <footer className="glass-effect py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-[#4a7c12]" />
                <span className="ml-2 text-xl font-bold text-[#4a7c12]">IslamQA AI</span>
              </div>
              <p className="text-[#242424]">
                Empowering Muslims with the wisdom of centuries in the palm of your hand.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#4a7c12] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={-64} 
                    duration={500} 
                    className="text-[#242424] hover:text-[#4a7c12] cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="features" 
                    spy={true} 
                    smooth={true} 
                    offset={-64} 
                    duration={500} 
                    className="text-[#242424] hover:text-[#4a7c12] cursor-pointer"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link 
                    to="testimonials" 
                    spy={true} 
                    smooth={true} 
                    offset={-64} 
                    duration={500} 
                    className="text-[#242424] hover:text-[#4a7c12] cursor-pointer"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#4a7c12] mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#242424] hover:text-[#4a7c12]">Privacy Policy</a></li>
                <li><a href="#" className="text-[#242424] hover:text-[#4a7c12]">Terms of Service</a></li>
                <li><a href="#" className="text-[#242424] hover:text-[#4a7c12]">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#4a7c12]/20 mt-8 pt-8 text-center text-[#242424]">
            <p>&copy; {currentYear} IslamQA AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;