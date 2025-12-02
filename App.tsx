import React, { useState } from 'react';
import { PERSONAL_INFO, SERVICES, WORK_SAMPLES } from './constants';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { WorkSampleCard } from './components/WorkSampleCard';
import { AIChat } from './components/AIChat';
import { SkillsSection } from './components/SkillsSection';
import { Testimonials } from './components/Testimonials';

function App() {
  // Try explicit relative path to public folder first
  const [headshotSrc, setHeadshotSrc] = useState('./public/assets/headshot.jpeg');
  const [attempts, setAttempts] = useState(0);

  const handleImageError = () => {
    // COMPREHENSIVE Fallback strategy for different server configurations
    const fallbacks = [
      'public/assets/headshot.jpeg',   // Relative without dot
      '/public/assets/headshot.jpeg',  // Absolute to root
      '/assets/headshot.jpeg',         // Standard Vite/Public mapped to root
      'assets/headshot.jpeg',          // Relative assets
      './public/assets/headshot.jpg',  // Try JPG extension
      'https://ui-avatars.com/api/?name=John+Gu&background=0f172a&color=D4AF37&size=500' // Final Give up
    ];

    if (attempts < fallbacks.length) {
      console.log(`Image load failed, trying fallback: ${fallbacks[attempts]}`);
      setHeadshotSrc(fallbacks[attempts]);
      setAttempts(prev => prev + 1);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-navy-900 selection:bg-gold-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold text-navy-900 tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-navy-900 rounded-sm flex items-center justify-center text-gold-500 font-serif text-sm border border-gold-500">JG</div>
            <span>John Gu</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('about')} className="hover:text-gold-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-gold-600 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-gold-600 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-gold-600 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-gold-600 transition-colors">Testimonials</button>
          </div>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="bg-navy-900 text-gold-500 border border-gold-500 px-5 py-2 rounded-sm text-sm font-bold hover:bg-gold-500 hover:text-white transition-colors uppercase tracking-widest text-xs">
            Contact Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-16 pb-24 overflow-hidden bg-gradient-to-br from-slate-50 to-gold-100/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-16">
            
            {/* Left Column: Text */}
            <div className="w-full md:w-1/2 text-left animate-fade-in">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-navy-900 uppercase border-b-2 border-gold-500">
                {PERSONAL_INFO.title}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy-900 mb-6 leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl md:text-2xl font-serif text-navy-800 mb-6 leading-relaxed italic">
                {PERSONAL_INFO.tagline}
              </p>
              <p className="text-base text-slate-600 mb-8 max-w-lg leading-relaxed border-l-4 border-gold-500 pl-6">
                {PERSONAL_INFO.about}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                 {/* Explicitly point to public/assets/ */}
                 <a href="./public/assets/John_Gu_Resume.pdf" download className="flex items-center justify-center px-8 py-3 bg-navy-900 text-white rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors shadow-lg">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume (PDF)
                </a>
              </div>
            </div>

            {/* Right Column: Headshot */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in">
              <div className="relative p-4 border border-gold-500/30">
                {/* Decorative Frame */}
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gold-500"></div>
                
                <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden shadow-2xl bg-white transition-all duration-700">
                   <img 
                    src={headshotSrc} 
                    onError={handleImageError}
                    alt="John Gu Executive Headshot" 
                    className="w-full h-full object-cover object-top"
                   />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Core Competencies</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          </div>
          <SkillsSection />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Professional Experience</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <ExperienceTimeline />
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-2xl font-serif font-bold mb-8 text-white">Education</h2>
            <div className="flex flex-col md:flex-row justify-center gap-12">
               <div className="p-6 border border-gold-500/30 bg-navy-800/50">
                  <h3 className="text-xl font-bold text-gold-500 font-serif">University of North Carolina - Chapel Hill</h3>
                  <p className="text-slate-300 mt-2 font-light">Masters of Business Administration | 2010 - 2012</p>
               </div>
               <div className="p-6 border border-gold-500/30 bg-navy-800/50">
                  <h3 className="text-xl font-bold text-gold-500 font-serif">University of Virginia</h3>
                  <p className="text-slate-300 mt-2 font-light">Bachelor of Science - Chemistry | 2000 - 2004</p>
               </div>
            </div>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Services & Expertise</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          </div>
           <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="group bg-white p-8 border border-slate-200 hover:border-gold-500 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 bg-navy-900 flex items-center justify-center mb-6 text-gold-500">
                    {/* Simple icons based on type */}
                    {service.icon === 'chart' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>}
                    {service.icon === 'document' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                    {service.icon === 'users' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 text-navy-900">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Work Samples Section */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Work Samples & Artifacts</h2>
              <div className="w-16 h-1 bg-gold-500 mb-6"></div>
              <p className="text-slate-600">
                A collection of models, decks, and frameworks I have built. 
                Download these to see the granularity of my work.
              </p>
            </div>
            <div className="text-right">
              <a href="mailto:jtgu04@gmail.com" className="text-navy-900 font-bold hover:text-gold-600 flex items-center gap-1 group border-b border-gold-500 pb-1">
                Request access to deal room 
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WORK_SAMPLES.map(sample => (
              <WorkSampleCard key={sample.id} sample={sample} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">What Leaders Say</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto italic">
              Trusted by CEOs, Investors, and Senior Executives across the finance and technology sectors.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-navy-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center relative">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Ready to elevate your financial strategy?</h2>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="bg-gold-500 text-navy-900 px-8 py-4 text-lg font-bold hover:bg-white transition-all shadow-lg uppercase tracking-widest">
                  Contact Me
                </a>
              </div>
              <p className="text-slate-400 mt-8 font-medium">{PERSONAL_INFO.email} <span className="mx-2 text-gold-500">•</span> {PERSONAL_INFO.phone}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>{PERSONAL_INFO.location}</span>
             <span>•</span>
             <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-gold-500 transition-colors">Email</a>
             <span>•</span>
             <a href={`https://${PERSONAL_INFO.linkedin}`} className="hover:text-gold-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Gemini Chat Widget */}
      <AIChat />

    </div>
  );
}

export default App;