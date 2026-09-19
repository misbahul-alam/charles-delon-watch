import React from 'react';
import {
  BatteryCharging,
  Globe2,
  Droplets,
  Watch,
  Sparkles,
  CheckCircle,
  Gift,
  CheckCircle2,
} from 'lucide-react';
import { img12816_cushion } from '../images';

export const ProductBenefits: React.FC = () => {
  const coreFeatures = [
    {
      icon: <BatteryCharging className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" />,
      title: 'লং ব্যাটারি লাইফ',
      subtitle: 'দীর্ঘদিন নিশ্চিন্তে ব্যবহার',
      desc: 'একবার ব্যবহারে দীর্ঘদিন নিশ্চিন্ত। সাথে অতিরিক্ত ২টি ব্যাটারি একদম ফ্রি!',
      borderColor: 'border-amber-300/60 dark:border-amber-500/30',
    },
    {
      icon: <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" />,
      title: 'ওয়ার্ল্ড ম্যাপ ডিসপ্লে',
      subtitle: 'বিশ্ব সময় রিয়েল-টাইম ট্র্যাকিং',
      desc: 'উপরের ডিসপ্লেতে রয়েছে ক্ষুদ্র পৃথিবী মানচিত্র ও ৩১টি বিশ্ব টাইমজোন।',
      borderColor: 'border-cyan-300/60 dark:border-cyan-500/30',
    },
    {
      icon: <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />,
      title: 'ওয়াটার রেসিস্ট্যান্স',
      subtitle: 'পানির সংস্পর্শে নিরাপদ',
      desc: 'দৈনন্দিন হাত ধোয়া, অজু করা কিংবা হঠাৎ বৃষ্টিতে ঘড়িটি সম্পূর্ণ সুরক্ষিত।',
      borderColor: 'border-blue-300/60 dark:border-blue-500/30',
    },
    {
      icon: <Watch className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" />,
      title: 'প্রিমিয়াম লেদার স্ট্র্যাপ',
      subtitle: 'সর্বোচ্চ আরাম ও আভিজাত্য',
      desc: 'জেনুইন সফট লেদার ও কনট্রাস্ট স্টিচিং যা পরতে আরামদায়ক ও স্টাইলিশ।',
      borderColor: 'border-orange-300/60 dark:border-orange-500/30',
    },
  ];

  const whyBuyPoints = [
    'লেদার স্ট্র্যাপ ব্যবহার করায় এটি সাধারণ প্লাস্টিক বা চেইনের চেয়ে অনেক বেশি স্টাইলিশ এবং ফরমাল বা ক্যাজুয়াল পোশাকে দারুণ ফুটে ওঠে।',
    'ডিজিটাল ও অ্যানালগ ডুয়াল টাইম ডিসপ্লে নিখুঁত সময় ও অ্যালার্ম নিশ্চয়তা দেয়।',
    '৮০ ও ৯০-এর ক্লাসিক ক্যাসিও রয়্যাল ভিন্টেজ লুক আপনার ব্যক্তিত্বে রাজকীয় আভিজাত্য যোগ করে।',
  ];

  const packageItems = [
    { title: '১ টি প্রিমিয়াম ঘড়ি', desc: 'ক্যাসিও ইলুমিনেটর ওয়াচ' },
    { title: '১ টি আকর্ষণীয় বক্স', desc: 'গিফট করার উপযোগী বক্স' },
    { title: '২ টি অতিরিক্ত ব্যাটারি', desc: 'ফ্রি কোয়ার্টজ ব্যাটারি' },
  ];

  return (
    <section id="features" className="py-12 sm:py-16 relative bg-slate-100/70 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      {/* Ambient Lights */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 radial-glow-amber opacity-35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 sm:w-96 h-72 sm:h-96 radial-glow-cyan opacity-25 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>মূল বৈশিষ্ট্যসমূহ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            ক্যাসিও ইলুমিনেটরের বিশেষ সুবিধাসমূহ ✨
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            দৈনন্দিন ব্যবহারে স্থায়িত্ব এবং ফ্যাশনে আভিজাত্যের অনন্য সমন্বয়।
          </p>
        </div>

        {/* 4 Core Features: 2x2 Grid on Mobile, 4-Cols on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {coreFeatures.map((item, idx) => (
            <div
              key={idx}
              className={`p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border ${item.borderColor} backdrop-blur-xl relative flex flex-col justify-between shadow-xs hover:border-amber-400 transition-all`}
            >
              <div>
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-2.5 sm:mb-3.5 shadow-inner">
                  {item.icon}
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block leading-tight">
                  {item.subtitle}
                </span>
                <h3 className="text-xs sm:text-base font-bold text-slate-900 dark:text-white leading-snug mt-1">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Buy & Package Inclusions Combined Card */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-md">
          {/* Why Buy Points */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>এটা কেন কিনবেন?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
              স্টাইলিশ লুক আর নির্ভুল সময়ের নিশ্চয়তা
            </h3>
            <div className="space-y-2.5 pt-1">
              {whyBuyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-500/20" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Package Inclusions */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                <Gift className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>প্যাকেজে যা যা থাকছে:</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30">
                ফ্রি গিফট
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-16/9 bg-slate-200 dark:bg-slate-900">
              <img
                src={img12816_cushion}
                alt="Watch and Box Cushion Presentation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1.5">
              {packageItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-100 dark:border-slate-800/60 last:border-0">
                  <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-[11px] sm:text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    {item.title}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-[11px]">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
