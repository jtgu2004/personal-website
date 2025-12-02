import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-12">
      {EXPERIENCE_DATA.map((item, index) => (
        <div key={item.id} className="relative flex flex-col md:flex-row gap-8 md:gap-0">
          
          {/* Vertical Line for Desktop */}
          {index !== EXPERIENCE_DATA.length - 1 && (
            <div className="hidden md:block absolute left-[25%] top-12 bottom-0 w-px bg-slate-200 -ml-px z-0"></div>
          )}

          {/* Left Column: Date & Company */}
          <div className="md:w-1/4 md:text-right md:pr-12 relative z-10">
            <h4 className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-1">{item.period}</h4>
            <h3 className="text-xl font-serif text-navy-900 font-semibold">{item.company}</h3>
            {/* Dot on Timeline */}
            <div className="hidden md:block absolute right-0 top-2 w-3 h-3 bg-navy-900 rounded-full translate-x-1.5 ring-4 ring-white"></div>
          </div>

          {/* Right Column: Details */}
          <div className="md:w-3/4 md:pl-12 bg-white md:bg-transparent p-6 md:p-0 rounded-lg shadow-sm md:shadow-none border border-slate-100 md:border-none">
            <h3 className="text-2xl font-semibold text-navy-800 mb-2">{item.role}</h3>
            <p className="text-slate-600 italic mb-4">{item.description}</p>
            <ul className="space-y-2">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start text-slate-700">
                  <span className="text-gold-500 mr-2 mt-1.5 text-xs">●</span>
                  <span className="text-sm leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};