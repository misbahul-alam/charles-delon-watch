import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface CharlesDelonHeaderProps {
  onOrderClick: () => void;
}

export const CharlesDelonHeader: React.FC<CharlesDelonHeaderProps> = ({ onOrderClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      {/* Top Editorial Ticker */}
      <div className="bg-neutral-900 text-neutral-300 text-[11px] py-1.5 px-4 font-mono tracking-wider text-center flex items-center justify-center gap-3">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>LIMITED EDITION 2026 // সারা দেশে ফ্রি হোম ডেলিভারি ও প্রোডাক্ট চেক করে পেমেন্ট করার নিশ্চয়তা</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Masthead */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 uppercase font-['Plus_Jakarta_Sans',sans-serif]">
              CHARLES DELON
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-mono -mt-1 font-semibold">
              GENEVA // WATERPROOF SERIES
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-neutral-600 tracking-wide uppercase font-mono">
          <a href="#features" className="hover:text-neutral-900 transition-colors">
            বৈশিষ্ট্যসমূহ
          </a>
          <a href="#editions" className="hover:text-neutral-900 transition-colors">
            ৩টি কালার এডিশন
          </a>
          <a href="#gallery" className="hover:text-neutral-900 transition-colors">
            লুকবুক গ্যালারি
          </a>
          <a href="#order-section" className="hover:text-neutral-900 transition-colors">
            অর্ডার ফর্ম
          </a>
        </nav>

        {/* Quick Order Action */}
        <div className="flex items-center gap-3">
          <a
            href="tel:01753481548"
            className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-700 font-mono font-bold hover:text-neutral-900 transition-colors border border-neutral-200 px-3 py-1.5 rounded-lg"
          >
            <Phone className="w-3 h-3 text-neutral-500" />
            <span>01753-481548</span>
          </a>

          <button
            onClick={onOrderClick}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all active:scale-95 cursor-pointer shadow-xs"
          >
            <span>অর্ডার করুন (৳৮৫০)</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
          </button>
        </div>
      </div>
    </header>
  );
};
