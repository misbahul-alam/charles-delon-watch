import React, { useState, useEffect } from 'react';
import { ShoppingBag, Flame } from 'lucide-react';

interface MobileStickyCTAProps {
  onOrderClick: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({
  onOrderClick,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 250;
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      // Hide if near the bottom order form so it doesn't overlap the submit button
      const nearBottom = totalHeight - (scrollPosition + clientHeight) < 550;

      if (scrollPosition > heroHeight && !nearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pt-2.5 bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl border-t border-slate-200 dark:border-amber-500/30 shadow-2xl animate-in slide-in-from-bottom duration-200 transition-colors"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col pl-0.5">
          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <Flame className="w-3 h-3 fill-amber-500" />
            অফার মূল্য
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-amber-600 dark:text-amber-400 font-mono">
              ৳৯৯০
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 line-through font-mono">
              ৳১,৯৫০
            </span>
          </div>
        </div>

        <button
          onClick={onOrderClick}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
        >
          <ShoppingBag className="w-4 h-4 text-slate-950" />
          <span>এখনই অর্ডার করুন</span>
        </button>
      </div>
    </div>
  );
};
