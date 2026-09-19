import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/8801753481548?text=${encodeURIComponent('হ্যালো, আমি ক্যাসিও ইলুমিনেটর ওয়াচ সম্পর্কে জানতে চাই')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-20 md:bottom-6 left-4 z-40 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
    >
      <WhatsAppIcon className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
      <span className="hidden group-hover:inline-block pr-1 text-xs font-bold whitespace-nowrap">
        হোয়াটসঅ্যাপে কথা বলুন
      </span>
    </a>
  );
};
