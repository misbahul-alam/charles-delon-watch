import React from 'react';
import { ShoppingBag, Sparkles, ShieldCheck, Gift } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface FinalCTAProps {
  onOrderClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOrderClick }) => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-amber-50/60 via-slate-100 to-amber-50/80 dark:from-slate-950 dark:via-[#0c121e] dark:to-slate-950 text-slate-900 dark:text-white overflow-hidden border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Horology Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] radial-glow-amber opacity-40 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs">
          <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>রয়্যাল ভিন্টেজ কালেকশন • অফার সীমিত সময়ের জন্য</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          ব্যক্তিত্বে আনুন আভিজাত্যের ছোঁয়া — আজই নিন{' '}
          <span className="text-amber-600 dark:text-amber-400">ক্যাসিও ইলুমিনেটর!</span>
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          ক্যাশ অন ডেলিভারিতে কোনো অগ্রিম টাকা ছাড়াই সারা বাংলাদেশ থেকে অর্ডার করুন। ১টি প্রিমিয়াম বক্স এবং ২টি অতিরিক্ত ব্যাটারি সম্পূর্ণ বিনামূল্যে পেয়ে যান।
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOrderClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-base uppercase tracking-wider shadow-xl shadow-amber-500/25 active:scale-98 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-slate-950" />
            <span>এখনই অর্ডার করুন — মাত্র ৳৯৯০</span>
          </button>

          <a
            href="https://wa.me/8801753481548"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>হোয়াটসঅ্যাপ: ০১৭৫৩-৪৮১৫৪৮</span>
          </a>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            ১০০% ক্যাশ অন ডেলিভারি
          </span>
          <span className="flex items-center gap-1.5">
            <Gift className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            ফ্রি বক্স ও ২টি অতিরিক্ত ব্যাটারি
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            ৩ দিনের রিপ্লেসমেন্ট সুবিধা
          </span>
        </div>
      </div>
    </section>
  );
};
