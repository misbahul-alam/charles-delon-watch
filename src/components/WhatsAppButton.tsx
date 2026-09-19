import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/8801753481548?text=${encodeURIComponent('হ্যালো, আমি চার্লস ডেলন ওয়াটারপ্রুফ ওয়াচ সম্পর্কে জানতে চাই')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-20 md:bottom-6 left-4 z-40 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
    >
      <WhatsAppIcon className="w-5 h-5 text-white" />
      <span className="hidden group-hover:inline-block pr-1 text-xs font-semibold whitespace-nowrap">
        হোয়াটসঅ্যাপে মেসেজ দিন
      </span>
    </a>
  );
};
