import React from 'react';
import { Star, CheckCircle, ThumbsUp } from 'lucide-react';

interface Review {
  name: string;
  location: string;
  variantBought: string;
  rating: number;
  comment: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    name: 'তানভীর আহমেদ',
    location: 'উত্তরা, ঢাকা',
    variantBought: 'মডেল কোড ১২৮১৬ (ম্যাট ব্ল্যাক)',
    rating: 5,
    comment:
      'ম্যাট ব্ল্যাক কালারটা অর্ডার করেছিলাম। সত্যি বলতে ছবি দেখে যতটা ভালো লেগেছিল, হাতে পাওয়ার পর আরও বেশি প্রিমিয়াম লাগছে! লেদার স্ট্র্যাপের সেলাই আর ফিনিশিং খুবই আরামদায়ক। অফিসের শার্টের সাথে জাস্ট ফাটাফাটি মানায়।',
    date: '২ দিন আগে',
  },
  {
    name: 'সাজিদ হাসান',
    location: 'জিইসি মোড়, চট্টগ্রাম',
    variantBought: 'মডেল কোড ১৩২৭৯ (সিলভার স্টিল)',
    rating: 5,
    comment:
      'সিলভার মডেলটা দারুণ রাজকীয় লুক দেয়! সাথে সুন্দর একটা বক্স আর ২টি অতিরিক্ত ব্যাটারি পেয়েছি। সবচেয়ে ভালো লেগেছে ডেলিভারি ম্যানের সামনে প্যাকেট খুলে চেক করে তারপর টাকা দেওয়ার সুযোগ ছিল।',
    date: '৪ দিন আগে',
  },
  {
    name: 'মাহফুজুর রহমান',
    location: 'উপশহর, সিলেট',
    variantBought: 'মডেল কোড ১৩২৯৪ (ভিন্টেজ ব্রোঞ্জ)',
    rating: 5,
    comment:
      'আমার বন্ধুর জন্মদিনের উপহার হিসেবে নিয়েছিলাম। ও অনেক খুশি হয়েছে। ঘড়ির উপরের ওয়ার্ল্ড ম্যাপ আর অ্যাম্বার ব্যাকলাইটটা একদম অরিজিনাল ক্যাসিও ভাইব দেয়। ৯৯০ টাকায় সেরা ডিল!',
    date: '১ সপ্তাহ আগে',
  },
  {
    name: 'জুবায়ের হোসেন',
    location: 'বোয়ালিয়া, রাজশাহী',
    variantBought: 'মডেল কোড ১৩২৯৫ (অ্যান্টিক কপার)',
    rating: 5,
    comment:
      'অ্যান্টিক কপার কালারটা সত্যিই ইউনিক। ডার্ক ব্রাউন লেদারের সাথে কপার কেসিংয়ের কম্বিনেশনটা নজরকাড়া। পানিতে হাত ধোয়ার পরও কোনো সমস্যা হয়নি। ১০০% রেকমেন্ডেড!',
    date: '১ সপ্তাহ আগে',
  },
];

export const CustomerReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden scroll-mt-16 transition-colors duration-300">
      {/* Horology Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 radial-glow-amber opacity-25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Star className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 fill-amber-500" />
            <span>গ্রাহকদের মতামত ও অভিজ্ঞতা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            সন্তুষ্ট গ্রাহকদের বাস্তব রিভিউ 💬
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            ইতিমধ্যেই সারা বাংলাদেশ থেকে শত শত ঘড়িপ্রেমী ক্যাসিও ইলুমিনেটর ব্যবহার করছেন।
          </p>

          {/* Social Proof Rating Banner */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              ৪.৯ / ৫.০ রেটিং
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              (৫০০+ ভেরিফায়েড কাস্টমার)
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500/30 backdrop-blur-xl transition-all duration-300 space-y-4 shadow-sm dark:shadow-xl"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-slate-900 dark:text-white">
                      {review.name}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30 font-semibold">
                      <CheckCircle className="w-3 h-3" />
                      ভেরিফায়েড
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {review.location} • <span className="text-amber-700 dark:text-amber-400/90 font-medium">{review.variantBought}</span>
                  </div>
                </div>

                <div className="flex items-center text-amber-500 shrink-0">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "{review.comment}"
              </p>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span>{review.date}</span>
                <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                  <ThumbsUp className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> রেকমেন্ডেড
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
