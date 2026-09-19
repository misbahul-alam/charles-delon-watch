import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'ঘড়িটি কি আসলেই ওয়াটার রেসিস্ট্যান্ট?',
    answer:
      'হ্যাঁ, এটি নির্ভরযোগ্য ওয়াটার রেসিস্ট্যান্ট। হাত ধোয়া, অজু করা, ঘাম কিংবা হঠাৎ বৃষ্টির পানির সংস্পর্শে ঘড়ির কোনো সমস্যা হবে না। তবে দীর্ঘক্ষণ পানিতে ডুবিয়ে রাখা বা গরম পানি পরিহার করা উচিত।',
  },
  {
    question: 'অতিরিক্ত ব্যাটারি ও বক্স কি সত্যিই ফ্রি পাব?',
    answer:
      'জ্বি, অবশ্যই! আমাদের বর্তমান স্পেশাল অফারে প্রতিটি ঘড়ির অর্ডারের সাথে ১টি আকর্ষণীয় প্রিমিয়াম বক্স এবং অতিরিক্ত ২টি ফ্রেশ কোয়ার্টজ ব্যাটারি সম্পূর্ণ বিনামূল্যে উপহার হিসেবে পাচ্ছেন।',
  },
  {
    question: 'ডেলিভারির সময় কি পার্সেল খুলে চেক করে নিতে পারব?',
    answer:
      '১০০% পারবেন। আমাদের ডেলিভারি সার্ভিসে কোনো প্রকার অগ্রিম পেমেন্ট ছাড়াই পণ্য হাতে পেয়ে রাইডারের সামনে খুলে চেক করে দেখে তারপর মূল্য পরিশোধ (ক্যাশ অন ডেলিভারি) করতে পারবেন।',
  },
  {
    question: 'অর্ডার করার কতদিনের মধ্যে ডেলিভারি পাব?',
    answer:
      'ঢাকা সিটির ভেতরে অর্ডার কনফার্মেশনের ২৪ থেকে ৪৮ ঘণ্টার মধ্যে এবং ঢাকার বাইরে সারা বাংলাদেশে ২ থেকে ৩ কার্যদিবসের মধ্যে আপনার দোরগোড়ায় হোম ডেলিভারি পৌঁছে দেওয়া হয়।',
  },
  {
    question: 'পণ্য পাওয়ার পর কোনো সমস্যা হলে কি পরিবর্তন করা যাবে?',
    answer:
      'অবশ্যই! আমাদের রয়েছে ৩ দিনের সহজ রিপ্লেসমেন্ট গ্যারান্টি। ঘড়িতে কোনো কারিগরি ত্রুটি বা সমস্যা থাকলে আমাদের হটলাইন বা হোয়াটসঅ্যাপে জানালে দ্রুত সমাধান বা পরিবর্তন করে দেওয়া হবে।',
  },
  {
    question: 'লেদার স্ট্র্যাপের সাইজ কি সব কবজির জন্য উপযোগী?',
    answer:
      'হ্যাঁ, ঘড়ির প্রিমিয়াম লেদার স্ট্র্যাপটিতে একাধিক অ্যাডজাস্টেবল হোল রয়েছে যা পাতলা বা চওড়া যেকোনো হাতের কবজির সাথে নিখুঁতভাবে ও আরামদায়কভাবে ফিট হয়ে যায়।',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-[#070b12] border-t border-slate-200 dark:border-slate-900 relative scroll-mt-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>সাধারণ জিজ্ঞাসা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            সচরাচর জিজ্ঞাসিত প্রশ্ন ও উত্তর ❓
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            আপনার মনের যেকোনো প্রশ্নের দ্রুত ও সহজ সমাধান জেনে নিন।
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-slate-900/90 border-amber-400/80 dark:border-amber-500/40 shadow-md dark:shadow-lg'
                    : 'bg-white/80 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-100 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
