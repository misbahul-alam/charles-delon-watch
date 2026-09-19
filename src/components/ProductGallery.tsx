import React, { useState } from 'react';
import { Maximize2, X, Camera } from 'lucide-react';
import { toBanglaNumber } from '../utils/bengali';
import {
  WATCH_VARIANTS,
  imgBlueHero,
  imgBlueFeature,
  imgBlackHero,
  imgBlackFeature,
  imgGreyHero,
  imgGreyFront,
} from '../images';

interface LookbookItem {
  id: string;
  variantCode: string;
  titleBangla: string;
  editionName: string;
  src: string;
  caption: string;
  exhibitNo: string;
}

const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'lb-1',
    variantCode: '13297',
    editionName: 'ROYAL BLUE EDITION',
    titleBangla: 'রয়্যাল ব্লু — ড্রামাটিক ওয়াটার স্প্ল্যাশ স্টুডিও শট',
    src: imgBlueHero,
    caption: 'সিলিকন স্ট্র্যাপ ও অপটিক্যাল গ্রেডিয়েন্ট ডায়াল ইন রিয়েল ওয়াটার স্প্ল্যাশ',
    exhibitNo: 'EXHIBIT 01',
  },
  {
    id: 'lb-2',
    variantCode: '13297',
    editionName: 'ROYAL BLUE EDITION',
    titleBangla: 'রয়্যাল ব্লু — ডায়াল আর্কিটেকচার ও ক্রিস্টাল ডিটেইল',
    src: imgBlueFeature,
    caption: 'আলোর ভিন্ন কোণে প্রিজম ডায়ালের অনন্য রূপবদল ও নিখুঁত মার্কার',
    exhibitNo: 'EXHIBIT 02',
  },
  {
    id: 'lb-3',
    variantCode: '12713',
    editionName: 'JET BLACK EDITION',
    titleBangla: 'জেট ব্ল্যাক — ড্রামাটিক ওয়াটার স্প্ল্যাশ শট',
    src: imgBlackHero,
    caption: 'ডিপ জেট ব্ল্যাক কেসিং ও ভাইব্রেন্ট কালার চেঞ্জিং প্রিজম রিফ্লেকশন',
    exhibitNo: 'EXHIBIT 03',
  },
  {
    id: 'lb-4',
    variantCode: '12713',
    editionName: 'JET BLACK EDITION',
    titleBangla: 'জেট ব্ল্যাক — ওয়াটারপ্রুফ আর্কিটেকচার ভিউ',
    src: imgBlackFeature,
    caption: '৩-লেয়ার ওয়াটার সিলিং ও ডিপ ব্ল্যাক প্রিমিয়াম সিলিকন স্ট্র্যাপ',
    exhibitNo: 'EXHIBIT 04',
  },
  {
    id: 'lb-5',
    variantCode: '13296',
    editionName: 'NAUTICAL ASH EDITION',
    titleBangla: 'নান্দনিক অ্যাশ — ড্রপলেট স্টুডিও রিফ্লেকশন',
    src: imgGreyHero,
    caption: 'মডার্ন নিউট্রাল অ্যাশ কালার স্ট্র্যাপ ও লাইট প্রিজম ডায়াল',
    exhibitNo: 'EXHIBIT 05',
  },
  {
    id: 'lb-6',
    variantCode: '13296',
    editionName: 'NAUTICAL ASH EDITION',
    titleBangla: 'নান্দনিক অ্যাশ — আর্কিটেকচারাল কাটআউট',
    src: imgGreyFront,
    caption: 'নরম সিলিকন ম্যাটেরিয়াল ও দীর্ঘস্থায়ী আরামদায়ক ব্যবহার',
    exhibitNo: 'EXHIBIT 06',
  },
];

export const ProductGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [modalImage, setModalImage] = useState<LookbookItem | null>(null);

  const filteredItems =
    activeTab === 'all'
      ? LOOKBOOK_ITEMS
      : LOOKBOOK_ITEMS.filter((item) => item.variantCode === activeTab);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-10 border-b border-neutral-200">
          <div className="space-y-1.5">
            <div className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-semibold flex items-center gap-2">
              <Camera className="w-3.5 h-3.5 text-neutral-900" />
              <span className="font-['Plus_Jakarta_Sans',sans-serif]">STUDIO LOOKBOOK</span>
              <span className="text-neutral-300">//</span>
              <span>ফটো গ্যালারি</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              বাস্তব কোণ ও আলোকছটার স্টুডিও লুকবুক
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-sm font-normal">
            প্রাকৃতিক আলো ও পানির সান্নিধ্যে ঘড়িটির প্রতিটি কোণের নিখুঁত ফিনিশিং দেখে নিন।
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-start md:justify-center gap-2.5 overflow-x-auto pb-2 sm:pb-0 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-neutral-50 text-neutral-600 border border-neutral-200 hover:border-neutral-300'
            }`}
          >
            সবগুলো ছবি ({toBanglaNumber(LOOKBOOK_ITEMS.length)})
          </button>
          {WATCH_VARIANTS.map((v) => (
            <button
              key={v.code}
              onClick={() => setActiveTab(v.code)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeTab === v.code
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-50 text-neutral-600 border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full border border-neutral-300"
                style={{ backgroundColor: v.colorHex }}
              />
              <span>{v.nameBangla} [কোড {toBanglaNumber(v.code)}]</span>
            </button>
          ))}
        </div>

        {/* Museum-Grade Lookbook Exhibition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-neutral-200/80 hover:border-neutral-900 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              {/* Photo Canvas - Aspect Square Uncropped */}
              <div className="relative aspect-square bg-neutral-50/70 flex items-center justify-center overflow-hidden">
                <img
                  src={item.src}
                  alt={item.titleBangla}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-103 ${
                    item.src.includes('front') ? 'object-contain p-4 sm:p-6' : 'object-contain'
                  }`}
                  loading="lazy"
                />

                {/* Exhibit Code Badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-neutral-900/80 backdrop-blur-xs text-[10px] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white tracking-wider">
                  {item.exhibitNo}
                </div>

                {/* Zoom Preview Action Button */}
                <button
                  onClick={() => setModalImage(item)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/95 text-neutral-900 shadow-md hover:bg-neutral-900 hover:text-white transition-all cursor-pointer group-hover:scale-105"
                  aria-label="Zoom photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Museum Plaque Description */}
              <div className="p-5 sm:p-6 space-y-1.5 bg-white border-t border-neutral-200/60">
                <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">{item.editionName}</span>
                  <span className="font-bold text-neutral-700">কোড: {toBanglaNumber(item.variantCode)}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                  {item.titleBangla}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-normal pt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 cursor-pointer active:scale-90 transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-4/3 max-h-[65vh] rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 flex items-center justify-center">
              <img
                src={modalImage.src}
                alt={modalImage.titleBangla}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">{modalImage.editionName}</span>
                <span className="font-bold text-neutral-700">মডেল কোড: {toBanglaNumber(modalImage.variantCode)}</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                {modalImage.titleBangla}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {modalImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
