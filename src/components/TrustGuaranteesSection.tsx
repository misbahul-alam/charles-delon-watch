import React from 'react';
import { ShieldCheck, Truck, RefreshCw, CheckCircle2, Award } from 'lucide-react';

export const TrustGuaranteesSection: React.FC = () => {
  const guarantees = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
      title: 'ক্যাশ অন ডেলিভারি',
      desc: 'কোনো অগ্রিম টাকা দিতে হবে না। রাইডারের সামনে ঘড়িটি দেখে চেক করে তারপর মূল্য পরিশোধ করুন।',
      badge: '১০০% নিরাপদ',
    },
    {
      icon: <Truck className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
      title: 'সারা দেশে দ্রুত ডেলিভারি',
      desc: 'ঢাকা সিটির ভেতর ২৪-৪৮ ঘন্টায় এবং ঢাকার বাইরে ২-৩ কার্যদিবসে দ্রুততম হোম ডেলিভারি।',
      badge: 'হোম ডেলিভারি',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
      title: '৩ দিনের রিপ্লেসমেন্ট',
      desc: 'প্রোডাক্টে কোনো ত্রুটি থাকলে কোনো ঝামেলা ছাড়াই ৩ দিনের মাঝে দ্রুত রিপ্লেসমেন্ট সুবিধা।',
      badge: 'ইজি রিটার্ন',
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: '১০০% কোয়ালিটি গ্যারান্টি',
      desc: 'প্রতিটি ঘড়ি ডেলিভারির পূর্বে কঠোরভাবে কোয়ালিটি চেক করে প্যাকেজিং নিশ্চিত করা হয়।',
      badge: 'প্রিমিয়াম মান',
    },
  ];

  return (
    <section className="py-16 bg-slate-100/80 dark:bg-[#090d16] border-y border-slate-200 dark:border-slate-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] text-amber-700 dark:text-amber-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>নিশ্চিত সেবা</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
