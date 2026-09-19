import React from 'react';
import { Sparkles, Gift, ShieldCheck, Zap } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const items = [
    {
      icon: <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />,
      text: "লিমিটেড অফার: CASIO ILLUMINATOR লেদার ওয়াচ মাত্র ৳৯৯০ (রেগুলার ৳১৯৫০)",
    },
    {
      icon: <Gift className="w-3.5 h-3.5 text-amber-300" />,
      text: "প্রতি অর্ডারের সাথে পাচ্ছেন ১টি প্রিমিয়াম বক্স এবং ২টি অতিরিক্ত ব্যাটারি সম্পূর্ণ ফ্রি!",
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
      text: "ক্যাশ অন ডেলিভারি — পণ্য হাতে পেয়ে চেক করে মূল্য পরিশোধের ১০০% গ্যারান্টি",
    },
    {
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" />,
      text: "ভিন্টেজ লুক আর আধুনিক ফিচারের রাজকীয় মেলবন্ধন • ৪টি আকর্ষণীয় ভ্যারিয়েন্ট",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 dark:from-slate-950 dark:via-amber-950/80 dark:to-slate-950 border-b border-amber-400/30 dark:border-amber-500/20 text-white dark:text-slate-200 text-xs sm:text-sm font-semibold py-2.5 overflow-hidden relative z-50">
      <div className="animate-marquee whitespace-nowrap flex items-center justify-around gap-12">
        {items.map((item, idx) => (
          <div key={`a-${idx}`} className="inline-flex items-center gap-2">
            {item.icon}
            <span className="tracking-wide">{item.text}</span>
          </div>
        ))}
        {items.map((item, idx) => (
          <div key={`b-${idx}`} className="inline-flex items-center gap-2">
            {item.icon}
            <span className="tracking-wide">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
