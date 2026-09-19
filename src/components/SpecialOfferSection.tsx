import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Flame, Gift, CheckCircle2 } from 'lucide-react';
import { toBanglaNumber } from '../utils/bengali';

interface SpecialOfferSectionProps {
  onOrderClick: () => void;
}

export const SpecialOfferSection: React.FC<SpecialOfferSectionProps> = ({
  onOrderClick,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 30, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="offer" className="py-16 relative bg-gradient-to-r from-amber-100/60 via-amber-50 to-amber-100/60 dark:from-amber-950/40 dark:via-slate-950 dark:to-amber-950/40 border-y border-amber-300/80 dark:border-amber-500/20 overflow-hidden scroll-mt-16 transition-colors duration-300">
      {/* Background Accent */}
      <div className="absolute inset-0 radial-glow-amber opacity-30 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/95 dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950 border border-amber-300 dark:border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-xl dark:shadow-2xl backdrop-blur-xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-500/20 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-rose-600 dark:text-rose-400 fill-rose-500 animate-pulse" />
            <span>আজকের বিশেষ ফ্ল্যাশ ডিল</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              অরিজিনাল ক্যাসিও ভিন্টেজ লুক মাত্র{' '}
              <span className="text-amber-600 dark:text-amber-400">৳৯৯০ টাকায়!</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              রেগুলার মূল্য <span className="line-through text-slate-400 dark:text-slate-500">৳১,৯৫০</span> এর ওপর পাচ্ছেন প্রায় ৪৯% বিশাল ছাড়। সাথে ফ্রি পাচ্ছেন ১টি আকর্ষণীয় বক্স এবং ২টি অতিরিক্ত ব্যাটারি।
            </p>
          </div>

          {/* Countdown Clock Tiles */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 py-2">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-amber-300 dark:border-amber-500/40 flex items-center justify-center text-2xl sm:text-3xl font-mono font-black text-amber-600 dark:text-amber-400 shadow-inner">
                {toBanglaNumber(String(timeLeft.hours).padStart(2, '0'))}
              </div>
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mt-1.5">
                ঘণ্টা
              </span>
            </div>

            <span className="text-2xl font-mono font-bold text-amber-500">:</span>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-amber-300 dark:border-amber-500/40 flex items-center justify-center text-2xl sm:text-3xl font-mono font-black text-amber-600 dark:text-amber-400 shadow-inner">
                {toBanglaNumber(String(timeLeft.minutes).padStart(2, '0'))}
              </div>
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mt-1.5">
                মিনিট
              </span>
            </div>

            <span className="text-2xl font-mono font-bold text-amber-500">:</span>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-amber-300 dark:border-amber-500/40 flex items-center justify-center text-2xl sm:text-3xl font-mono font-black text-amber-600 dark:text-amber-400 shadow-inner">
                {toBanglaNumber(String(timeLeft.seconds).padStart(2, '0'))}
              </div>
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mt-1.5">
                সেকেন্ড
              </span>
            </div>
          </div>

          {/* Package Inclusions Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-700 dark:text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              ১ টি ক্যাসিও ঘড়ি
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
              <Gift className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              ১ টি ফ্রি ওয়াচ বক্স
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-400" />
              ২ টি ফ্রি অতিরিক্ত ব্যাটারি
            </span>
          </div>

          <div className="pt-2">
            <button
              onClick={onOrderClick}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-base uppercase tracking-wider shadow-xl shadow-amber-500/25 active:scale-98 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 text-slate-950" />
              <span>অফার মূল্যে অর্ডার করুন (৳৯৯০)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
