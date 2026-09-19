import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { WATCH_VARIANTS, type WatchVariant } from '../images';
import { toBanglaNumber } from '../utils/bengali';

interface HeroSectionProps {
  onOrderClick: (variantCode?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick }) => {
  const [selectedVariant, setSelectedVariant] = useState<WatchVariant>(
    WATCH_VARIANTS[0]
  );

  return (
    <section id="hero" className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 bg-white border-b border-neutral-200 overflow-hidden">
      
      {/* Ambient background soft glow (strictly contained) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-112.5 bg-neutral-100/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Unified 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold, Clean, Uncluttered Editorial Typography & Action */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            {/* Minimal Brand Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-wider text-[11px] font-bold">CHARLES DELON • 100% WATERPROOF COLOR-CHANGING WATCH</span>
            </div>

            {/* Clean Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-900 tracking-tight leading-[1.2]">
                স্টাইল, আধুনিকতা ও আকর্ষণীয় লুক — <br />
                <span className="text-neutral-900 underline decoration-neutral-300 underline-offset-8">
                  Charles Delon Waterproof Color-Changing Watch
                </span>
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal pt-1">
                পুরুষ ও নারী উভয়ের (Unisex) ব্যবহারের উপযোগী করে তৈরি। আলোর প্রতিফলনে বদলে যায় আকর্ষণীয় কালার-চেঞ্জিং ডায়াল। প্রিমিয়াম সিলিকন স্ট্র্যাপ ও ওয়াটারপ্রুফ সুবিধা সহ যেকোনো ক্যাজুয়াল বা ট্রেন্ডি আউটফিটে নিখুঁত মানানসই।
              </p>
            </div>

            {/* Color Switcher Strip */}
            <div className="space-y-2.5 pt-1 w-full">
              <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                কালার নির্বাচন করুন: <span className="text-neutral-900 font-bold">{selectedVariant.nameBangla} [কোড {toBanglaNumber(selectedVariant.code)}]</span>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {WATCH_VARIANTS.map((v) => {
                  const isSelected = selectedVariant.code === v.code;
                  return (
                    <button
                      key={v.code}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                          : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: v.colorHex }}
                      />
                      <span>{v.nameBangla}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-white ml-0.5 stroke-3" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Presentation & Primary CTA */}
            <div className="space-y-4 pt-2 w-full flex flex-col items-center lg:items-start">
              <div className="flex items-baseline justify-center lg:justify-start gap-3">
                <span className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
                  ৳{toBanglaNumber(890)}
                </span>
                <span className="text-base sm:text-lg line-through text-neutral-400">
                  ৳{toBanglaNumber(1550)}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                  ৪৩% ছাড়
                </span>
              </div>

              <button
                onClick={() => onOrderClick(selectedVariant.code)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-150 flex items-center justify-center gap-2.5 shadow-md active:scale-98 cursor-pointer group mx-auto lg:mx-0"
              >
                <ShoppingBag className="w-5 h-5 text-white" />
                <span>অর্ডার করুন — ক্যাশ অন ডেলিভারি</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Minimal Trust Line */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-neutral-500 pt-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-neutral-900" />
                  প্যাকেজ খুলে দেখে পেমেন্ট
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-neutral-900" />
                  সারা দেশে হোম ডেলিভারি
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-neutral-900" />
                  ১০০% অরিজিনাল প্রোডাক্ট
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Cinematic Lifestyle Photography Stage */}
          <div className="lg:col-span-6 order-1 lg:order-2 w-full">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-xl aspect-square max-w-md lg:max-w-lg mx-auto group">
              
              {/* Dynamic Lifestyle Hero Image (Clean, Uncropped Presentation) */}
              <img
                key={selectedVariant.code}
                src={selectedVariant.heroImage}
                alt={selectedVariant.titleEnglish}
                className="w-full h-full object-contain transition-all duration-500 animate-in fade-in"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
