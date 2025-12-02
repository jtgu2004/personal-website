import React from 'react';
import { WorkSample } from '../types';

const FileIcon = ({ type, isMacro }: { type: string, isMacro: boolean }) => {
  if (type === 'RESUME') {
    return (
      <svg className="w-8 h-8 text-navy-900" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    );
  }
  if (type === 'EXCEL') {
    return (
      <div className="relative">
        <svg className={`w-8 h-8 ${isMacro ? 'text-amber-600' : 'text-green-600'}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
        {isMacro && (
          <div className="absolute -bottom-1 -right-1 bg-amber-600 text-white text-[8px] font-bold px-1 rounded">
            M
          </div>
        )}
      </div>
    );
  }
  if (type === 'PDF') {
    return (
      <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H8c-1.1 0-2 .9-2 2v12H4c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5v1.5H19v2h-1.5V7h2V7zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/>
      </svg>
    );
  }
  return (
    <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
       <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>
  );
};

export const WorkSampleCard: React.FC<{ sample: WorkSample }> = ({ sample }) => {
  const isResume = sample.type === 'RESUME';
  // Check specifically for XLSM files (macros)
  const isMacro = sample.downloadUrl.toLowerCase().endsWith('.xlsm');
  
  // Extract filename from path for display, decoding URI components (spaces, etc.)
  const rawFileName = sample.downloadUrl.split('/').pop() || '';
  const fileName = decodeURIComponent(rawFileName);

  return (
    <div className={`group border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white border-slate-200 hover:border-gold-500/30 relative overflow-hidden`}>
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <FileIcon type={sample.type} isMacro={isMacro} />
          <div className="flex gap-2">
            {isMacro && (
               <span className="text-[10px] font-bold tracking-wider px-2 py-1 rounded uppercase bg-amber-100 text-amber-800 border border-amber-200">
                 Macro Enabled
               </span>
            )}
            <span className={`text-[10px] font-bold tracking-wider px-2 py-1 rounded uppercase ${isResume ? 'bg-navy-900 text-white' : 'text-slate-500 bg-slate-100 group-hover:bg-white'}`}>
              {isMacro ? 'XLSM' : sample.type}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-500 transition-colors">{sample.title}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow">{sample.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {sample.tags.map(tag => (
              <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="border-t border-slate-100 pt-3 mb-3">
             <p className="text-xs text-slate-400 font-mono flex items-center gap-1 break-all">
               <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
               {fileName}
             </p>
          </div>

          <a 
            href={sample.downloadUrl}
            download
            className={`w-full block text-center font-bold text-sm py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
              isResume ? 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg shadow-gold-500/20' : 'bg-slate-50 hover:bg-navy-900 text-navy-900 hover:text-white border border-slate-200 hover:border-navy-900'
            }`}
          >
            <span>Download File</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};