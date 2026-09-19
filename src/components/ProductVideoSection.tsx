import React, { useState } from 'react';
import {
  Sparkles,
  ShoppingBag,
  Compass,
  Clock,
  Globe,
  Sun,
  Check,
} from 'lucide-react';
import { img12816_hero, img13279_hero } from '../images';
import { toBanglaNumber } from '../utils/bengali';

interface ProductVideoSectionProps {
  onOrderClick: () => void;
}

export const ProductVideoSection: React.FC<ProductVideoSectionProps> = ({
  onOrderClick,
}) => {
  const [activeHighlight, setActiveHighlight] = useState<number>(0);

  const highlights = [
    {
      title: 'মিনি ডিজিটাল ওয়ার্ল্ড ম্যাপ',
      desc: 'উপরের ডানদিকের ডিসপ্লেতে থাকা ক্ষুদ্র বিশ্ব মানচিত্রে বর্তমান টাইম জোন কালো হাইলাইট হয়ে প্রদর্শিত হয়। বিশ্বের যে প্রান্তেই থাকুন, সময়ের নিখুঁত নিয়ন্ত্রণ আপনার হাতে।',
      icon: <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      detailBadge: '31 Time Zones',
    },
    {
      title: 'অ্যাম্বার ইলুমিনেটর নাইট ব্যাকলাইট',
      desc: 'LIGHT বাটন চাপলেই ডিসপ্লে জুড়ে ছড়িয়ে পড়ে মৃদু উষ্ণ অ্যাম্বার আভা। ঘোর অন্ধকারেও এক ক্লিকে স্পষ্ট সময় দেখা যায় চোখের কোনো ক্লান্তি ছাড়াই।',
      icon: <Sun className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      detailBadge: 'Amber Afterglow',
    },
    {
      title: 'এনালগ সাব-ডায়াল ক্লক ফেজ',
      desc: 'ডিজিটাল স্ক্রিনের পাশাপাশি বামদিকের রাউন্ড সাব-ডায়ালে এনালগ কাঁটার স্টাইলে প্রতি সেকেন্ড ও মিনিট প্রিসিশন রাডার সুইপে দেখা যায়।',
      icon: <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      detailBadge: 'Dual Quartz Sweep',
    },
    {
      title: 'হ্যান্ডক্রাফটেড স্টিচড লেদার স্ট্র্যাপ',
      desc: 'জেনুইন সফট লেদারের সাথে কনট্রাস্ট হোয়াইট স্টিচিং যেকোনো কবজিতে অত্যন্ত আরামদায়ক ফিট দেয় এবং সারাদিন ব্যবহারে ঘাম আটকায়।',
      icon: <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
      detailBadge: 'Genuine Leather',
    },
  ];

  return (
    <section
      id="craftsmanship"
      className="py-20 relative bg-white dark:bg-gradient-to-b dark:from-[#070b12] dark:via-slate-950 dark:to-[#070b12] text-slate-900 dark:text-white overflow-hidden border-y border-slate-200 dark:border-slate-900 transition-colors duration-300"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 radial-glow-amber opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 radial-glow-cyan opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>নিখুঁত কারিগরি ও ডায়াল ফিচার</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            ক্যাসিও ইলুমিনেটরের ডায়াল আর্কিটেকচার 🧭
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            ৮০-এর দশকের বিশ্বখ্যাত 'Royale' ডিজিটাল ইন্টারফেস ও লেদার ফিনিশিংয়ের অনন্য মিশ্রণ।
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Main Visual Showcase Display */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950 p-4 border border-slate-200 dark:border-amber-500/25 shadow-xl dark:shadow-2xl">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-4">
                <img
                  src={activeHighlight % 2 === 0 ? img12816_hero : img13279_hero}
                  alt="Casio Illuminator Dial Showcase"
                  className="w-full h-full object-contain transition-all duration-700 hover:scale-105"
                />

                {/* Tactical Callout Badges on the Dial */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 animate-ping" />
                  <span>{highlights[activeHighlight].detailBadge}</span>
                </div>

                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-mono shadow-xs">
                  SPECIAL OFFER: ৳৯৯০
                </div>
              </div>

              {/* Bottom Quick Control Pills */}
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {highlights.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHighlight(idx)}
                    className={`p-2 rounded-xl text-center text-xs font-bold transition-all border cursor-pointer ${
                      activeHighlight === idx
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                        : 'bg-white dark:bg-slate-900/70 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    ফিচার #{toBanglaNumber(idx + 1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-5 backdrop-blur-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/30 flex items-center justify-center shrink-0">
                  {highlights[activeHighlight].icon}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 font-bold uppercase">
                    FEATURE SPOTLIGHT
                  </span>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    {highlights[activeHighlight].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {highlights[activeHighlight].desc}
              </p>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>১টি বক্স ও অতিরিক্ত ২টি ব্যাটারি গিফট হিসেবে অন্তর্ভুক্ত</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>ক্যাশ অন ডেলিভারিতে চেক করে মূল্য পরিশোধের নিশ্চয়তা</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOrderClick}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-slate-950" />
                  <span>এই ঘড়িটি এখনই অর্ডার করুন (৳৯৯০)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
