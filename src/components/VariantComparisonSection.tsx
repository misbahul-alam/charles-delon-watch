import React from 'react';
import { ArrowRight, Check, Droplets, Sparkles, Shield } from 'lucide-react';
import { WATCH_VARIANTS } from '../images';
import { toBanglaNumber } from '../utils/bengali';

interface VariantComparisonSectionProps {
  onSelectVariant: (variantCode: string) => void;
}

const VARIANT_HIGHLIGHTS: Record<string, string[]> = {
  '13297': [
    'ভাইব্রেন্ট ওশান ব্লু সিলিকন স্ট্র্যাপ',
    'প্রিজম মাল্টিকালার স্পেকট্রাম ডায়াল',
    'ক্যাজুয়াল ও পার্টি ওয়্যার স্টাইল',
  ],
  '12713': [
    'ম্যাট ক্লাসিক ডিপ ব্ল্যাক স্ট্র্যাপ',
    'হাই-কনট্রাস্ট অল-ব্ল্যাক স্টিলথ লুক',
    'অফিসিয়াল ও ফরমাল আউটফিটে পারফেক্ট',
  ],
  '13296': [
    'নান্দনিক মডার্ন অ্যাশ সিলিকন স্ট্র্যাপ',
    'মিনিমালিস্ট সোবার গ্রেডিয়েন্ট রিফ্লেকশন',
    'যেকোনো কালারের পোশাকের সাথে অল-রাউন্ডার',
  ],
};

export const VariantComparisonSection: React.FC<VariantComparisonSectionProps> = ({
  onSelectVariant,
}) => {
  return (
    <section id="editions" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-10 border-b border-neutral-200">
          <div className="space-y-1">
            <div className="text-[11px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-[0.25em] text-neutral-500 font-bold">
              COLLECTION 2026 // THREE EDITIONS
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              ৩টি স্বতন্ত্র এডিশন — আপনার পছন্দের কালার বেছে নিন
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-neutral-500 max-w-sm">
            প্রতিটি এডিশনেই রয়েছে একই প্রিমিয়াম কালার-চেঞ্জিং ডায়াল আর্কিটেকচার ও ১০০% ওয়াটারপ্রুফ বডি।
          </div>
        </div>

        {/* 3-Column Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {WATCH_VARIANTS.map((variant, idx) => (
            <div
              key={variant.code}
              className="group rounded-3xl border border-neutral-200 bg-white hover:border-neutral-900 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs"
            >
              {/* Card Top Metadata */}
              <div className="p-6 pb-3 flex items-center justify-between border-b border-neutral-100 bg-white">
                <div className="flex items-center gap-2">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-neutral-400">
                    0{idx + 1}
                  </span>
                  <span className="text-neutral-300">/</span>
                  <span className="text-xs font-bold text-neutral-900">
                    কোড: {toBanglaNumber(variant.code)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 text-[10px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-wider font-semibold">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: variant.colorHex }}
                  />
                  <span>{variant.colorNameEnglish}</span>
                </div>
              </div>

              {/* Large Product Canvas with Pedestal */}
              <div className="relative aspect-square p-6 sm:p-8 flex items-center justify-center bg-gradient-to-b from-neutral-50 via-neutral-100/50 to-neutral-100/80 group-hover:from-white group-hover:to-neutral-50 transition-colors overflow-hidden">
                <div className="absolute inset-8 rounded-full bg-neutral-200/40 blur-md group-hover:bg-neutral-200/60 transition-colors pointer-events-none" />
                <img
                  src={variant.primaryImage}
                  alt={variant.titleEnglish}
                  className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-300 relative z-10"
                  loading="lazy"
                />
              </div>

              {/* Card Body & Specs */}
              <div className="p-6 pt-4 space-y-4 bg-white border-t border-neutral-200/60 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  {/* Micro tech pills */}
                  <div className="flex items-center gap-3 text-[10px] font-['Plus_Jakarta_Sans',sans-serif] text-neutral-500 font-bold uppercase tracking-wider pb-0.5">
                    <span className="flex items-center gap-1">
                      <Droplets className="w-3 h-3 text-neutral-700" />
                      3ATM
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-neutral-700" />
                      GRADIENT
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-neutral-700" />
                      SILICONE
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 leading-tight">
                    {variant.nameBangla}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                    {variant.strapColorBangla} সহ অপটিক্যাল কালার-চেঞ্জিং ডায়াল। ইউনিসেক্স স্টাইল।
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {(VARIANT_HIGHLIGHTS[variant.code] || variant.features.slice(0, 3)).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 stroke-[2.5]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Action Button */}
                <div className="pt-4 border-t border-neutral-100 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-bold text-neutral-900">
                        ৳{toBanglaNumber(850)}
                      </span>
                      <span className="text-xs line-through text-neutral-400 ml-2">
                        ৳{toBanglaNumber(1550)}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ৪৫% ছাড়
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectVariant(variant.code)}
                    className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer active:scale-98"
                  >
                    <span>এই মডেলটি সিলেক্ট করুন</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
