import React from 'react';
import { Clock, Award, Compass, ChevronRight } from 'lucide-react';
import { imgBlueHero, imgBlackFeature } from '../images';

export const ProductBenefits: React.FC = () => {
  const technicalSpecs = [
    { label: 'CALIBRE // MOVEMENT', value: 'PRECISION QUARTZ ANALOG' },
    { label: 'CASE DIAMETER', value: '40 MM // SLIM PROFILE' },
    { label: 'WATER RESISTANCE', value: '3 ATM (30 METERS DAILY PROOF)' },
    { label: 'CRYSTAL // GLASS', value: 'HARDENED MINERAL PRISM' },
    { label: 'STRAP COMPOSITION', value: 'ULTRA-SOFT HYPOALLERGENIC SILICONE' },
    { label: 'DIAL ARCHITECTURE', value: 'LIGHT-REACTIVE MULTI-GRADIENT' },
    { label: 'INDICES // NUMERALS', value: 'HIGH-CONTRAST ARABIC 1–12' },
    { label: 'WRIST FITMENT', value: 'UNISEX ERGONOMIC (FOR HIM & HER)' },
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
                  src={imgBlueHero}
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

      {/* Horology Specifications & Technical Precision Matrix */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left: Engineering & Craftsmanship Standards */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-semibold flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-neutral-900" />
                  <span className="font-['Plus_Jakarta_Sans',sans-serif]">CRAFTSMANSHIP STANDARDS</span>
                  <span className="text-neutral-300">//</span>
                  <span>নির্মাণ মানদণ্ড</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                  সুইস কারিগরি ও নিখুঁত ফিনিশিং
                </h3>
              </div>

              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-2xl bg-neutral-50/70 border border-neutral-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-900">
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                    <span>হার্ডেনড মিনারেল প্রিজম গ্লাস</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed pl-5 font-normal">
                    দৈনন্দিন ব্যবহারে দাগ ও আঁচড় প্রতিরোধী বিশেষ মিনারেল ক্রিস্টাল কোটিং।
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50/70 border border-neutral-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-900">
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                    <span>প্রেসিশন কোয়ার্টজ মুভমেন্ট</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed pl-5 font-normal">
                    সুইস আর্কিটেকচার অনুযায়ী তৈরি অ্যানালগ গিয়ার যা দেয় নিখুঁত সময় ও দীর্ঘস্থায়ী ব্যাটারি ব্যাকআপ।
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50/70 border border-neutral-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-900">
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                    <span>স্লিম এরগোনোমিক কেসিং</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed pl-5 font-normal">
                    কব্জিতে অতিরিক্ত ভারী ভাব তৈরি করে না, সারাদিন স্বাচ্ছন্দ্যে পরিধানযোগ্য।
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Specifications Matrix */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-semibold flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-neutral-900" />
                  <span className="font-['Plus_Jakarta_Sans',sans-serif]">DATA SHEET</span>
                  <span className="text-neutral-300">//</span>
                  <span>প্রযুক্তিগত বিবরণ</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                  সুইস স্ট্যান্ডার্ড স্পেসিফিকেশন
                </h3>
              </div>

              {/* Clean Swiss Hairline Table */}
              <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-2xs divide-y divide-neutral-100 text-xs font-['Plus_Jakarta_Sans',sans-serif]">
                {technicalSpecs.map((spec, i) => (
                  <div key={i} className="p-3.5 sm:p-4 flex items-center justify-between hover:bg-neutral-50/60 transition-colors">
                    <span className="text-neutral-500 font-medium">{spec.label}</span>
                    <span className="text-neutral-900 font-bold text-right">{spec.value}</span>
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
