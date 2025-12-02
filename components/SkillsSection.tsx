import React from 'react';
import { SKILLS_DATA } from '../constants';

export const SkillsSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {SKILLS_DATA.map((category, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-serif font-bold text-navy-900 mb-4 pb-2 border-b border-gold-500 inline-block">
            {category.title}
          </h3>
          <ul className="space-y-2">
            {category.skills.map((skill, sIdx) => (
              <li key={sIdx} className="flex items-center text-slate-600 text-sm">
                <span className="text-gold-500 mr-2">›</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};