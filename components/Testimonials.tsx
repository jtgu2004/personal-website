import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {TESTIMONIALS.map((t) => (
        <div key={t.id} className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative">
          <div className="relative z-10">
            <p className="text-slate-700 italic mb-6 leading-relaxed">
              "{t.quote}"
            </p>
            <div className="border-t border-slate-200 pt-4">
              <p className="font-serif font-bold text-navy-900">{t.author}</p>
              <p className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};