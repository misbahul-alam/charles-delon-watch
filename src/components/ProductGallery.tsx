import React, { useState } from 'react';
import {
  Sparkles,
  Maximize2,
  X,
  ShoppingBag,
} from 'lucide-react';
import { toBanglaNumber } from '../utils/bengali';
import {
  WATCH_VARIANTS,
  img12816_hero,
  img12816_front,
  img12816_cushion,
  img13279_hero,
  img13279_front,
  img13279_cushion,
  img13294_hero,
  img13295_hero,
} from '../images';

interface GalleryItem {
  id: string;
  variantCode: string;
  titleBangla: string;
  category: '12816' | '13279' | '13294' | '13295';
  src: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-12816-1',
    variantCode: '12816',
    titleBangla: 'ম্যাট ব্ল্যাক স্টুডিও শট',
    category: '12816',
    src: img12816_hero,
    caption: 'ডার্ক মেটালিক পেডেস্টালে ড্রামাটিক রিফ্লেকশন সহ ম্যাট ব্ল্যাক কেসিং',
  },
  {
    id: 'g-12816-2',
    variantCode: '12816',
    titleBangla: 'ম্যাট ব্ল্যাক ফ্রন্ট ভিউ',
    category: '12816',
    src: img12816_front,
    caption: 'স্পষ্ট ডিজিটাল ও অ্যানালগ ডিসপ্লে এবং সাদা স্টিচড লেদার স্ট্র্যাপ',
  },
  {
    id: 'g-12816-3',
    variantCode: '12816',
    titleBangla: 'লাক্সারি কুশন ডিসপ্লে',
    category: '12816',
    src: img12816_cushion,
    caption: 'হোয়াইট প্রিমিয়াম কুশনে রাখা রয়্যাল ভিন্টেজ ম্যাট ব্ল্যাক',
  },
  {
    id: 'g-13279-1',
    variantCode: '13279',
    titleBangla: 'সিলভার স্টিল স্টুডিও শট',
    category: '13279',
    src: img13279_hero,
    caption: 'মেটালিক ফিনিশ সিলভার কেসিং ও ডিপ ব্ল্যাক স্টিচড লেদার স্ট্র্যাপ',
  },
  {
    id: 'g-13279-2',
    variantCode: '13279',
    titleBangla: 'সিলভার ফ্রন্ট ডায়াল',
    category: '13279',
    src: img13279_front,
    caption: 'বিশ্ব মানচিত্র এলসিডি ও স্টেইনলেস লুকের নিখুঁত ফিনিশ',
  },
  {
    id: 'g-13279-3',
    variantCode: '13279',
    titleBangla: 'সিলভার কুশন ভিউ',
    category: '13279',
    src: img13279_cushion,
    caption: 'উপহার দেওয়ার উপযোগী আকর্ষণীয় ডিসপ্লে লুক',
  },
  {
    id: 'g-13294-1',
    variantCode: '13294',
    titleBangla: 'ভিন্টেজ ব্রোঞ্জ ও টান',
    category: '13294',
    src: img13294_hero,
    caption: 'রোজ ব্রোঞ্জ কেসিং ও লাইট ব্রাউন ক্যামেল লেদার স্ট্র্যাপ',
  },
  {
    id: 'g-13295-1',
    variantCode: '13295',
    titleBangla: 'অ্যান্টিক কপার ও বাদামি',
    category: '13295',
    src: img13295_hero,
    caption: 'অ্যান্টিক কপার লুক ও ডার্ক টেক্সচার্ড রাস্টিক লেদার স্ট্র্যাপ',
  },
];

interface ProductGalleryProps {
  onSelectVariantOrder?: (variantCode: string) => void;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  onSelectVariantOrder,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [modalImage, setModalImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeTab === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const handleOrderVariant = (code: string) => {
    if (onSelectVariantOrder) {
      onSelectVariantOrder(code);
    } else {
      const el = document.getElementById('order-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 bg-white dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 scroll-mt-16 transition-colors duration-300"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 radial-glow-amber opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>ফটো গ্যালারি</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            ক্যাসিও ইলুমিনেটর গ্যালারি 📸
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            প্রতিটি অ্যাঙ্গেল থেকে দেখুন প্রিমিয়াম ফিনিশিং ও লেদার স্ট্র্যাপের টেক্সচার।
          </p>
        </div>

        {/* Filter Tabs: Horizontal Scroll Strip on Mobile, Wrap on Desktop */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap sm:justify-center mb-6 sm:mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 min-h-[36px] ${
              activeTab === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
            }`}
          >
            সব মডেল ({toBanglaNumber(GALLERY_ITEMS.length)})
          </button>
          {WATCH_VARIANTS.map((v) => (
            <button
              key={v.code}
              onClick={() => setActiveTab(v.code)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 min-h-[36px] ${
                activeTab === v.code
                  ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
              }`}
            >
              কোড {toBanglaNumber(v.code)}
            </button>
          ))}
        </div>

        {/* Gallery Grid: 2-Columns on Mobile, 4-Columns on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500/40 p-2 sm:p-3 transition-all duration-200 shadow-xs flex flex-col justify-between"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.titleBangla}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />

                {/* Variant Code Badge */}
                <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-white/95 dark:bg-slate-950/90 text-amber-800 dark:text-amber-300 text-[10px] font-mono font-bold shadow-xs">
                  {item.variantCode}
                </div>

                {/* Zoom Preview Button */}
                <button
                  onClick={() => setModalImage(item)}
                  className="absolute bottom-1.5 right-1.5 p-1.5 rounded-lg bg-white/95 dark:bg-slate-950/90 text-slate-700 dark:text-slate-200 shadow-xs cursor-pointer active:scale-90"
                  aria-label="Zoom photo"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Title, Price & Order Action */}
              <div className="pt-2 sm:pt-3 space-y-1.5">
                <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {item.titleBangla}
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-black text-amber-600 dark:text-amber-400 font-mono">
                    ৳৯৯০
                  </span>
                  <button
                    onClick={() => handleOrderVariant(item.variantCode)}
                    className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-bold flex items-center gap-1 cursor-pointer active:scale-95 shadow-xs"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>অর্ডার</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="relative max-w-xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl space-y-3">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-3 right-3 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 z-10 cursor-pointer active:scale-90"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-square max-h-[65vh] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-2">
              <img
                src={modalImage.src}
                alt={modalImage.titleBangla}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <div>
                <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold block">
                  কোড: {toBanglaNumber(modalImage.variantCode)}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {modalImage.titleBangla}
                </h3>
              </div>

              <button
                onClick={() => {
                  const code = modalImage.variantCode;
                  setModalImage(null);
                  handleOrderVariant(code);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-slate-950" />
                <span>এই ঘড়িটি অর্ডার করুন (৳৯৯০)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
