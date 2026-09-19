import React from 'react';
import { Award, Compass, Sparkles, Droplets, Cpu, Layers, ShieldCheck, Watch } from 'lucide-react';
import { imgBlueFeature, imgBlackFeature } from '../images';

export const ProductBenefits: React.FC = () => {
  const technicalSpecs = [
    {
      icon: Cpu,
      category: 'CALIBRE // MOVEMENT',
      titleBangla: 'প্রেসিশন অ্যানালগ কোয়ার্টজ মুভমেন্ট',
      specEnglish: 'Precision Quartz Analog // Long-Life Battery',
      desc: 'সুইস আর্কিটেকচার অনুযায়ী তৈরি অ্যানালগ গিয়ার যা দেয় নিখুঁত সময় ও দীর্ঘস্থায়ী নির্ভরযোগ্য ব্যাটারি লাইফ।',
    },
    {
      icon: Sparkles,
      category: 'CRYSTAL // GLASS',
      titleBangla: 'হার্ডেনড মিনারেল প্রিজম গ্লাস',
      specEnglish: 'Mineral Prism Crystal // Scratch-Resistant',
      desc: 'দৈনন্দিন ব্যবহারে দাগ ও আঁচড় প্রতিরোধী বিশেষ কোটিং এবং আলোর প্রতিফলনে দৃষ্টিনন্দন গ্রেডিয়েন্ট লুক।',
    },
    {
      icon: Droplets,
      category: 'WATER RESISTANCE',
      titleBangla: '৩ এটিএম ওয়াটারপ্রুফ আর্কিটেকচার',
      specEnglish: '3 ATM // 30 Meters Daily Proof',
      desc: '৩-লেয়ার অভ্যন্তরীণ গ্যাসকেট সিলিং—হাত ধোয়া, ওযু কিংবা আকস্মিক বৃষ্টির পানিতে ১০০% নিশ্চিন্ত ব্যবহার।',
    },
    {
      icon: Layers,
      category: 'CASE & PROFILE',
      titleBangla: '৪০ মিমি স্লিম এরগোনোমিক কেসিং',
      specEnglish: '40mm Diameter // Slim Ergonomic Profile',
      desc: 'হালকা ও টেকসই গঠন যা কব্জিতে কোনো বাড়তি চাপ বা ভারী ভাব তৈরি করে না, সারাদিন স্বাচ্ছন্দ্য বজায় রাখে।',
    },
    {
      icon: ShieldCheck,
      category: 'STRAP COMPOSITION',
      titleBangla: 'হাইপোঅ্যালার্জেনিক আল্ট্রা-সফট সিলিকন',
      specEnglish: 'Ultra-Soft Hypoallergenic Silicone Strap',
      desc: 'নরম রাবার উপাদান যা শতভাগ ত্বকবান্ধব এবং নমনীয়, দীর্ঘ ব্যবহারে কোনো দাগ বা ঘাম জমতে দেয় না।',
    },
    {
      icon: Watch,
      category: 'INDICES & FITMENT',
      titleBangla: '১-১২ অ্যানালগ মার্কার ও ইউনিসেক্স সাইজ',
      specEnglish: 'Arabic 1–12 Numerals // For Him & Her',
      desc: 'সুস্পষ্ট ফন্টে মুদ্রিত মার্কারের কারণে এক পলকেই নিখুঁত সময় দেখা যায়। ছেলে ও মেয়ে উভয়ের কব্জিতে মানানসই।',
    },
  ];

  return (
    <section id="features" className="bg-[#fafbfc] border-b border-neutral-200 divide-y divide-neutral-200/80">
      
      {/* Editorial Header Masthead */}
      <div className="py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800 text-[11px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-[0.25em] font-bold shadow-2xs">
          <Award className="w-3.5 h-3.5 text-neutral-900" />
          <span>SWISS HOROLOGY STANDARDS // ARCHITECTURE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight leading-tight">
          প্রযুক্তি ও নান্দনিকতার এক রাজকীয় সংমিশ্রণ
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-xl mx-auto font-normal">
          প্রতিটি ডিটেইলে সুইস মিনিমালিজম ও আধুনিক মেটেরিয়ালের অনন্য প্রতিফলন।
        </p>
      </div>

      {/* Feature Story 01: The Optical Prism Gradient */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Visual Photography Frame */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200/80 bg-white shadow-lg aspect-square max-w-lg mx-auto group">
                <img
                  src={imgBlueFeature}
                  alt="Charles Delon Light-Reactive Gradient Dial"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Editorial Story */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <div className="text-[11px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-[0.25em] text-neutral-400 font-bold">
                  FEATURE I // THE PRISM DIAL
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight leading-snug">
                  আলোর প্রতিফলন ও দিক পরিবর্তনে ডায়ালের রূপবদল
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                  ঘড়িটিতে ব্যবহার করা হয়েছে বিশেষ অপটিক্যাল প্রিজম মাল্টিকালার ডায়াল। স্বাভাবিক ঘরের আলো, দিনের রোদ কিংবা রাতের মৃদু আলোতে ঘড়িটির ডায়াল বিভিন্ন দৃষ্টিনন্দন গ্রেডিয়েন্ট শেড তৈরি করে।
                </p>
              </div>

              {/* Horology Callout Bullets */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-3.5">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-neutral-400 mt-0.5">01</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">ডায়নামিক কালার চেঞ্জিং ক্রিস্টাল</h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 leading-relaxed">
                      হাতের সামান্য নাড়াচাড়াতেই ডায়ালে বর্ণালীর মতো রঙের রূপবদল ঘটে।
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-3.5">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-neutral-400 mt-0.5">02</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">হাই-কনট্রাস্ট ১ থেকে ১২ অ্যানালগ মার্কার</h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 leading-relaxed">
                      সুস্পষ্ট ফন্টে মুদ্রিত মার্কারের কারণে যে কোনো কোণ থেকেই নিখুঁত সময় দর্শন।
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Feature Story 02: Daily Waterproofing & Ergonomic Silicone */}
      <div className="py-16 sm:py-24 bg-[#fafbfc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Editorial Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="text-[11px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-[0.25em] text-neutral-400 font-bold">
                  FEATURE II // WATERPROOF & ERGONOMICS
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight leading-snug">
                  ১০০% ওয়াটারপ্রুফ বডি ও হাই-গ্রেড সিলিকন স্ট্র্যাপ
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                  দৈনন্দিন জীবনের সব বাস্তব পরিস্থিতিতে ব্যবহারের উপযোগী করে তৈরি। ওযু, হাত ধোয়া কিংবা হঠাৎ বৃষ্টির সময় ঘড়ি খুলে রাখার ঝামেলা নেই। নরম রাবার/সিলিকন স্ট্র্যাপ সারাদিন কব্জিকে রাখে আরামদায়ক।
                </p>
              </div>

              {/* Horology Callout Bullets */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 flex items-start gap-3.5 shadow-2xs">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-neutral-400 mt-0.5">03</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">৩-লেয়ার ওয়াটার রেসিস্ট্যান্ট সিলিং</h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 leading-relaxed">
                      ঘড়ির ইন্টারনাল কেসিং সম্পূর্ণ পানিরোধী গ্যাসকেট দ্বারা সুরক্ষিত।
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 flex items-start gap-3.5 shadow-2xs">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-neutral-400 mt-0.5">04</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">হাইপোঅ্যালার্জেনিক আল্ট্রা-সফট সিলিকন</h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 leading-relaxed">
                      ত্বকের সাথে সংবেদনশীল এবং নমনীয়, দীর্ঘ ব্যবহারে কোনো দাগ বা ঘাম জমতে দেয় না।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Photography Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200/80 bg-white shadow-lg aspect-square max-w-lg mx-auto group">
                <img
                  src={imgBlackFeature}
                  alt="Charles Delon 100% Waterproof Feature"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Horology Specifications & Technical Precision Matrix (Unified, Non-Duplicate) */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-[11px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-[0.25em] font-bold">
              <Compass className="w-3.5 h-3.5 text-neutral-900" />
              <span>HOROLOGY ARCHITECTURE // TECHNICAL MATRIX</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
              সুইস স্ট্যান্ডার্ড প্রযুক্তিগত স্পেসিফিকেশন
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal">
              স্থায়িত্ব, নিখুঁত সময় ও প্রিমিয়াম ম্যাটেরিয়ালের সর্বোচ্চ মানদণ্ড।
            </p>
          </div>

          {/* Unified 6-Item Technical Precision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {technicalSpecs.map((spec, i) => {
              const IconComp = spec.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-neutral-50/70 border border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-200 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center shadow-2xs">
                      <IconComp className="w-5 h-5 text-neutral-900 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-['Plus_Jakarta_Sans',sans-serif] font-bold uppercase tracking-wider text-neutral-400">
                      {spec.category}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                      {spec.titleBangla}
                    </h4>
                    <div className="text-[11px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-neutral-500">
                      {spec.specEnglish}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed font-normal pt-1 border-t border-neutral-200/60">
                    {spec.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
};
