import React from "react";
import { Clock, Phone, ShieldCheck, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 text-slate-500 dark:text-slate-400 py-8 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & Hotline */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-black tracking-wider text-slate-900 dark:text-white uppercase">
              CASIO ILLUMINATOR
            </span>
          </div>

          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>

          <div className="flex items-center gap-3">
            <a
              href="tel:01753481548"
              className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-amber-600 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>০১৭৫৩-৪৮১৫৪৮</span>
            </a>

            <a
              href="https://wa.me/8801753481548"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>হোয়াটসঅ্যাপ</span>
            </a>
          </div>

          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>

          <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>১০০% ক্যাশ অন ডেলিভারি</span>
          </span>
        </div>

        {/* Copyright & Admin Link */}
        <div className="flex items-center gap-4 text-slate-400 dark:text-slate-600">
          <span>© {new Date().getFullYear()} Casio Illuminator BD.</span>
          <Link
            to="/admin"
            className="flex items-center gap-1 hover:text-slate-600 dark:hover:text-slate-400 transition-colors text-[11px]"
            title="Admin Login"
          >
            <Lock className="w-3 h-3" />
            <span>অ্যাডমিন</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
