import React from 'react';
import { Award, Compass, Sparkles, Droplets, Cpu, Layers, ShieldCheck, Watch } from 'lucide-react';
import { imgBlueFeature, imgBlackFeature } from '../images';

export const ProductBenefits: React.FC = () => {
  const technicalSpecs = [
    {
      icon: Sparkles,
      category: 'COLOR-CHANGING DIAL',
      titleBangla: 'আকর্ষণীয় কালার-চেঞ্জিং গোলাকার ডায়াল',
      specEnglish: 'Color-Changing Dial • Gradient Effect',
      desc: 'ঘড়িটিতে রয়েছে চমৎকার গোলাকার ডায়াল, যাতে রয়েছে মাল্টিকালার বা কালার-চেঞ্জিং ও গ্রেডিয়েন্ট ইফেক্ট। আলোর প্রতিফলনে এর ভিন্ন রূপ একে দেয় প্রিমিয়াম ফিল।',
    },
    {
      icon: Watch,
      category: 'ANALOG INDICES',
      titleBangla: 'স্পষ্ট এনালগ ১ থেকে ১২ মার্কিং',
      specEnglish: 'Clear Arabic 1–12 Numerals • High Visibility',
      desc: 'ডায়ালের চারপাশে ১ থেকে ১২ পর্যন্ত সংখ্যাগুলো অত্যন্ত স্পষ্ট করে লেখা রয়েছে, যার ফলে যেকোনো কোণ থেকে এক পলকেই নিখুঁত সময় দেখা যায়।',
    },
    {
      icon: ShieldCheck,
      category: 'STRAP & MATERIAL',
      titleBangla: 'প্রিমিয়াম সিলিকন / নরম রাবার স্ট্র্যাপ',
      specEnglish: 'High-Quality Soft Silicone & Rubber',
      desc: 'এর স্ট্র্যাপটি তৈরি হয়েছে হাই-কোয়ালিটি সিলিকন বা নরম রাবার দিয়ে, যা হাতে পরতে অত্যন্ত আরামদায়ক, নমনীয় এবং দীর্ঘস্থায়ী।',
    },
    {
      icon: Layers,
      category: 'UNISEX DESIGN',
      titleBangla: 'ইউনিক ইউনিসেক্স মডার্ন ডিজাইন',
      specEnglish: 'Modern Unisex Design (For Him & Her)',
      desc: 'আধুনিক ডিজাইন ছেলে ও মেয়ে উভয়ের কব্জির সাথেই নিখুঁতভাবে মানানসই। যেকোনো ক্যাজুয়াল বা ট্রেন্ডি আউটফিটের সাথে দারুণ মানিয়ে যায়।',
    },
    {
      icon: Droplets,
      category: 'WATER RESISTANCE',
      titleBangla: 'দৈনন্দিন ওয়াটারপ্রুফ সুবিধা',
      specEnglish: 'Daily Life Waterproof Protection',
      desc: 'এটি ওয়াটারপ্রুফ হওয়ায় দৈনন্দিন ব্যবহার, হাত ধোয়া, অজু করা কিংবা সামান্য বৃষ্টির মাঝেও ঘড়িটি নিয়ে থাকবে না কোনো দুশ্চিন্তা।',
    },
    {
      icon: Cpu,
      category: 'QUARTZ MOVEMENT',
      titleBangla: 'প্রেসিশন অ্যানালগ কোয়ার্টজ মুভমেন্ট',
      specEnglish: 'Precision Quartz Analog & Long-Life Battery',
      desc: 'উচ্চমানের প্রিসিশন অ্যানালগ গিয়ার ও নির্ভরযোগ্য কোয়ার্টজ মেকানিজম যা দেয় নিখুঁত সময় ও দীর্ঘস্থায়ী নিরবচ্ছিন্ন ব্যাটারি লাইফ।',
    },
  ];

  return (
    <section id="features" className="bg-[#fafbfc] border-b border-neutral-200 divide-y divide-neutral-200/80">
      
      {/* Editorial Header Masthead */}
      <div className="py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800 text-[11px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-[0.25em] font-bold shadow-2xs">
          <Award className="w-3.5 h-3.5 text-neutral-900" />
          <span>ORIGINAL DESIGN • 100% WATERPROOF</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight leading-tight">
          স্টাইল, আধুনিকতা এবং আকর্ষণীয় লুকের এক দুর্দান্ত সমন্বয়
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-xl mx-auto font-normal">
          আলোর প্রতিফলনে মাল্টিকালার প্রিজম ডায়াল, স্কিন-ফ্রেন্ডলি সিলিকন স্ট্র্যাপ ও দীর্ঘস্থায়ী ওয়াটারপ্রুফ বডি।
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
                  FEATURE 01 • THE PRISM DIAL
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
                  FEATURE 02 • WATERPROOF & ERGONOMICS
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
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">দৈনন্দিন ওয়াটারপ্রুফ সুবিধা</h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 leading-relaxed">
                      হাত ধোয়া, অজু করা কিংবা হঠাৎ বৃষ্টির পানির মাঝেও ঘড়িটি নিয়ে থাকবে না কোনো দুশ্চিন্তা।
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 flex items-start gap-3.5 shadow-2xs">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-neutral-400 mt-0.5">04</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">হাই-কোয়ালিটি সিলিকন / নরম রাবার</h4>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 leading-relaxed">
                      নরম রাবার উপাদান যা অত্যন্ত আরামদায়ক ও নমনীয়, সারাদিন হাতে পরে থাকলেও কোনো অস্বস্তি হয় না।
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
              <span>OFFICIAL PRODUCT SPECIFICATIONS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
              ঘড়িটির অফিসিয়াল প্রযুক্তিগত স্পেসিফিকেশন
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal">
              দৈনন্দিন ব্যবহার, নিখুঁত সময় ও প্রিমিয়াম ম্যাটেরিয়ালের সর্বোচ্চ মানদণ্ড।
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

      {/* Why Choose This Watch Section (Direct from docs.txt) */}
      <div className="py-16 sm:py-24 bg-[#fafbfc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800 text-[11px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-[0.25em] font-bold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              <span>WHY CHOOSE CHARLES DELON</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
              কেন এই ঘড়িটি আপনার সংগ্রহে রাখা উচিত?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal">
              স্টাইলিশ আউটফিট ও দৈনন্দিন ব্যবহারের জন্য এক নিখুঁত টাইমপিস।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-neutral-400">01</span>
              <h4 className="text-sm font-bold text-neutral-900">ট্রেন্ডি কালার-চেঞ্জিং ডায়াল</h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                আলোর প্রতিফলনে ভিন্ন ভিন্ন আকর্ষণীয় গ্রেডিয়েন্ট লুক ঘড়িটিকে সাধারণ ঘড়ির চেয়ে আলাদা ও অনন্য করে তুলেছে।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-neutral-400">02</span>
              <h4 className="text-sm font-bold text-neutral-900">আরামদায়ক সিলিকন স্ট্র্যাপ</h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                হাই-কোয়ালিটি নরম সিলিকন বা রাবার স্ট্র্যাপ থাকায় সারাদিন হাতে পরে থাকলেও কোনো অস্বস্তি বোধ হবে না।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-neutral-400">03</span>
              <h4 className="text-sm font-bold text-neutral-900">উপহার দেওয়ার চমৎকার চয়েস</h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                নিজের স্টাইলিশ ব্যবহারের পাশাপাশি এটি প্রিয়জনকে উপহার দেওয়ার জন্যও একটি চমৎকার চয়েস।
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold text-neutral-400">04</span>
              <h4 className="text-sm font-bold text-neutral-900">দৈনন্দিন ওয়াটারপ্রুফ সুবিধা</h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                দৈনন্দিন ব্যবহার, হাত ধোয়া, অজু করা কিংবা সামান্য বৃষ্টির মাঝেও এটি নিয়ে থাকবে না কোনো দুশ্চিন্তা।
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
