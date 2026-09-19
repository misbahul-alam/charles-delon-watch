import React from "react";
import { Phone, ShieldCheck, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 py-12 text-xs text-neutral-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Top Masthead Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-100">
          <div className="space-y-1">
            <span className="text-xl font-black tracking-tight text-neutral-900 uppercase font-['Plus_Jakarta_Sans',sans-serif]">
              CHARLES DELON
            </span>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
              WATERPROOF COLOR-CHANGING WRISTWATCH // SERIES 2026
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs">
            <a
              href="tel:01753481548"
              className="flex items-center gap-2 text-neutral-800 hover:text-neutral-900 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span>01753-481548</span>
            </a>

            <span className="text-neutral-200">/</span>

            <a
              href="https://wa.me/8801753481548"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-800 hover:text-neutral-900 font-bold transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WHATSAPP SUPPORT</span>
            </a>

            <span className="text-neutral-200">/</span>

            <span className="flex items-center gap-1.5 text-neutral-700">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-900" />
              <span>100% CASH ON DELIVERY</span>
            </span>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} Charles Delon Watch BD. সর্বস্বত্ব সংরক্ষিত।
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-neutral-900 transition-colors">
              শীর্ষে যান
            </a>
            <Link
              to="/admin"
              className="flex items-center gap-1 hover:text-neutral-900 transition-colors"
              title="Admin Login"
            >
              <Lock className="w-3 h-3" />
              <span>ADMIN</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
