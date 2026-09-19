import React, { useState } from 'react';
import { ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';
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
    <section
      id="hero"
      className="relative pt-6 pb-12 sm:py-16 overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-slate-50 dark:from-slate-950 dark:via-[#090d16] dark:to-slate-950 transition-colors duration-300"
    >
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] radial-glow-amber opacity-40 pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Price, Swatches, CTA */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
              <span>CASIO VINTAGE COLLECTION</span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight sm:leading-none">
                CASIO <span className="text-amber-600 dark:text-amber-400">ILLUMINATOR</span>
              </h1>
              <p className="text-base sm:text-xl font-bold text-slate-700 dark:text-slate-300 pt-0.5">
                ভিন্টেজ লুক আর আধুনিক ফিচারের রাজকীয় মেলবন্ধন!!
              </p>
            </div>

            {/* Mobile-Only Watch Visual: Appears right above price on phones */}
            <div className="block lg:hidden my-3">
              <div className="relative w-full max-w-[280px] xs:max-w-[320px] aspect-square mx-auto rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center justify-center p-4">
                <img
                  key={`m-${selectedVariant.code}`}
                  src={selectedVariant.primaryImage}
                  alt={`Casio Illuminator ${selectedVariant.nameBangla}`}
                  className="w-full h-full object-contain transition-all duration-300"
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/95 dark:bg-slate-950/85 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">
                    {selectedVariant.nameBangla}
                  </span>
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400">
                    ৳৯৯০
                  </span>
                </div>
              </div>
            </div>

            {/* Price & Discount */}
            <div className="flex items-baseline justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <span className="text-3.5xl sm:text-5xl font-black text-amber-600 dark:text-amber-400 font-mono">
                ৳৯৯০
              </span>
              <span className="text-lg sm:text-xl text-slate-400 dark:text-slate-500 line-through font-mono">
                ৳১,৯৫০
              </span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 text-xs font-bold border border-rose-200 dark:border-rose-500/30">
                ৪৯% ছাড়
              </span>
            </div>

            {/* Model Swatches - Clean touch friendly buttons */}
            <div className="space-y-2 pt-0.5">
              <div className="text-xs font-bold text-slate-600 dark:text-slate-400">
                মডেল সিলেক্ট করুন: <span className="text-amber-600 dark:text-amber-400 font-mono font-bold">কোড {toBanglaNumber(selectedVariant.code)}</span> ({selectedVariant.nameBangla})
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-lg mx-auto lg:mx-0">
                {WATCH_VARIANTS.map((variant) => {
                  const isSelected = selectedVariant.code === variant.code;
                  return (
                    <button
                      key={variant.code}
                      onClick={() => setSelectedVariant(variant)}
                      className={`p-2 rounded-xl text-left transition-all border cursor-pointer flex items-center gap-2 min-h-[44px] active:scale-95 ${
                        isSelected
                          ? 'bg-amber-100/90 dark:bg-amber-500/20 border-amber-500 text-slate-950 dark:text-white ring-1 ring-amber-400 shadow-xs'
                          : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <img
                        src={variant.primaryImage}
                        alt={variant.nameBangla}
                        className="w-7 h-7 rounded-lg object-contain bg-slate-100 dark:bg-slate-950 shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold truncate leading-tight">
                          {toBanglaNumber(variant.code)}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                          {variant.nameBangla}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary Order CTA */}
            <div className="pt-1 sm:pt-2">
              <button
                onClick={() => onOrderClick(selectedVariant.code)}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-amber-500/25 active:scale-98 transition-all inline-flex items-center justify-center gap-2 cursor-pointer group min-h-[48px]"
              >
                <ShoppingBag className="w-5 h-5 text-slate-950" />
                <span>অর্ডার করুন (৳৯৯০)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 3 Clean Trust Bullets */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400 pt-0.5">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                ক্যাশ অন ডেলিভারি
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                ১টি ফ্রি ওয়াচ বক্স
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                ২টি অতিরিক্ত ব্যাটারি ফ্রি
              </span>
            </div>
          </div>

          {/* Right Column: Desktop Watch Display (Hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-6 justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 shadow-xl dark:shadow-2xl flex items-center justify-center p-6 overflow-hidden">
              <img
                key={`d-${selectedVariant.code}`}
                src={selectedVariant.primaryImage}
                alt={`Casio Illuminator ${selectedVariant.nameBangla}`}
                className="w-full h-full object-contain transition-all duration-500 ease-out hover:scale-105"
              />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-xs">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {selectedVariant.nameBangla}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {selectedVariant.strapColorBangla}
                  </div>
                </div>
                <span className="font-mono font-bold text-amber-600 dark:text-amber-400 text-sm">
                  ৳৯৯০
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
