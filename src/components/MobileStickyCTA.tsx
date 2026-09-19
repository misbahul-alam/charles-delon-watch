import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

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
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pt-2.5 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-xl"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col pl-1">
          <span className="text-[10px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-wider text-neutral-500 font-bold">
            SPECIAL OFFER
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold text-neutral-900">
              ৳৮৫০
            </span>
            <span className="text-xs text-neutral-400 line-through">
              ৳১,৫৫০
            </span>
          </div>
        </div>

        <button
          onClick={onOrderClick}
          className="flex-1 py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm tracking-wide shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>অর্ডার করুন</span>
          <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
        </button>
      </div>
    </div>
  );
};
