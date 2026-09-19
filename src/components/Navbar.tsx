import React, { useState, useEffect } from "react";
import { ShoppingBag, Flame, Clock } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-amber-500/20 py-3 shadow-md shadow-slate-200/40 dark:shadow-xl dark:shadow-black/40"
          : "bg-transparent py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-black tracking-wider text-slate-900 dark:text-white uppercase flex items-center gap-1.5">
              <span>CASIO</span>
              <span className="text-amber-600 dark:text-amber-400">ILLUMINATOR</span>
              <span className="hidden sm:inline-flex text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full items-center gap-1">
                <Flame className="w-3 h-3 text-amber-600 dark:text-amber-400 fill-amber-500" /> ৳৯৯০
              </span>
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide hidden sm:block">
              PREMIUM LEATHER STRAP WATCH
            </span>
          </div>
        </a>

        {/* Right Actions: WhatsApp, Order CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/8801753481548"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-3 py-2 rounded-xl bg-emerald-50 dark:bg-slate-900/90 hover:bg-emerald-100 dark:hover:bg-slate-800 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-bold transition-all items-center gap-1.5 shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>০১৭৫৩-৪৮১৫৪৮</span>
          </a>

          <button
            onClick={onOrderClick}
            className="rounded-xl px-3.5 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
            <span>অর্ডার করুন (৳৯৯০)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
