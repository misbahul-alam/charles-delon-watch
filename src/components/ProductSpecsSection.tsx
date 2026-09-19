import React from 'react';
import {
  Gift,
  CheckCircle2,
  Cpu,
  Layers,
} from 'lucide-react';
import { img12816_cushion } from '../images';

export const ProductSpecsSection: React.FC = () => {
  const specs = [
    { label: 'মডেল নাম', value: 'CASIO ILLUMINATOR AE-1200 LEATHER SERIES' },
    { label: 'মুভমেন্ট টাইপ', value: 'হাই-প্রিসিশন কোয়ার্টজ (ডিজিটাল + অ্যানালগ ডুয়াল ডিসপ্লে)' },
    { label: 'কেসিং সাইজ', value: '৪৫ মিমি × ৪২.১ মিমি (থিকনেস ১২.৫ মিমি)' },
    { label: 'স্ট্র্যাপ ম্যাটেরিয়াল', value: 'হ্যান্ডক্রাফটেড প্রিমিয়াম জেনুইন লেদার (সাদা সেলাই ফিনিশ)' },
    { label: 'ডিসপ্লে ফিচার', value: 'মিনি ওয়ার্ল্ড ম্যাপ, ডিজিটাল এলসিডি, অ্যানালগ সাবডায়াল' },
    { label: 'ব্যাকলাইট প্রযুক্তি', value: 'অ্যাম্বার ইলুমিনেটর LED লাইট (আফটারগ্লো সহ)' },
    { label: 'ফাংশনসমূহ', value: '৩১টি টাইম জোন, ৫টি অ্যালার্ম, স্টপওয়াচ, কাউন্টডাউন টাইমার' },
    { label: 'ওয়াটার রেসিস্ট্যান্স', value: 'ওয়াটার রেসিস্ট্যান্ট (দৈনন্দিন হাত ধোয়া ও বৃষ্টিতে নিরাপদ)' },
  ];

  const packageItems = [
    {
      title: '১ টি প্রিমিয়াম ক্যাসিও ঘড়ি',
      desc: 'আপনার পছন্দের ভ্যারিয়েন্ট কোড অনুযায়ী সম্পূর্ণ ব্র্যান্ড নিউ ঘড়ি।',
      badge: 'অরিজিনাল ইউনিট',
    },
    {
      title: '১ টি আকর্ষণীয় লাক্সারি বক্স',
      desc: 'ঘড়িটি নিরাপদে রাখার জন্য কিংবা কাউকে গিফট করার উপযোগী আকর্ষণীয় বক্স।',
      badge: 'ফ্রি গিফট বক্স',
    },
    {
      title: '২ টি অতিরিক্ত কোয়ার্টজ ব্যাটারি',
      desc: 'ভবিষ্যতে ব্যবহারের জন্য অতিরিক্ত ২টি ফ্রেশ ব্যাটারি একদম ফ্রি।',
      badge: '২টি ব্যাটারি ফ্রি',
    },
  ];

  return (
    <section id="specs" className="py-20 bg-slate-50 dark:bg-[#070b12] relative overflow-hidden border-t border-slate-200 dark:border-slate-900 scroll-mt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Layers className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>প্রোডাক্ট স্পেসিফিকেশন ও প্যাকেজ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            ঘড়ির বিস্তারিত স্পেসিফিকেশন ⚙️
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            আন্তর্জাতিক মানের বিল্ড কোয়ালিটি ও আধুনিক প্রযুক্তির নিখুঁত বিবরণী।
          </p>
        </div>

        {/* Specifications & Package Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Specs Table */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 backdrop-blur-xl shadow-lg space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <Cpu className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>টেকনিক্যাল স্পেসিফিকেশন</span>
            </h3>

            <div className="divide-y divide-slate-200 dark:divide-slate-800/80">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm"
                >
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-xs sm:text-sm">
                    {item.label}:
                  </span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold sm:text-right text-xs sm:text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Package Contents Showcase from docs.txt */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gradient-to-b dark:from-amber-500/15 dark:via-slate-900 dark:to-slate-950 rounded-3xl p-6 sm:p-8 border border-amber-300/80 dark:border-amber-500/30 backdrop-blur-xl shadow-xl space-y-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Gift className="w-4 h-4" />
                  <span>প্যাকেজে যা যা থাকছে</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  সম্পূর্ণ প্যাকেজে পাবেন:
                </h3>
              </div>

              {/* Package Cushion Photo */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-2">
                <img
                  src={img12816_cushion}
                  alt="Casio Watch in Luxury Display Cushion Box"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-300 text-[11px] font-bold shadow-xs">
                  লাক্সারি প্রেজেন্টেশন
                </div>
              </div>

              {/* 3 Package Items */}
              <div className="space-y-3 pt-1">
                {packageItems.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          {pkg.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 font-bold shrink-0">
                          {pkg.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {pkg.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
