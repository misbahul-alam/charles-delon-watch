// Charles Delon Watch image references & variant configurations

// Renamed public images
export const imgBlueHero = '/images/blue-hero.webp';
export const imgBlueFront = '/images/blue-front.webp';
export const imgBlueFeature = '/images/blue-feature.webp';

export const imgGreyHero = '/images/grey-hero.webp';
export const imgGreyFront = '/images/grey-front.webp';

export const imgBlackHero = '/images/black-hero.webp';
export const imgBlackFront = '/images/black-front.webp';
export const imgBlackFeature = '/images/black-feature.webp';

export interface WatchVariant {
  code: string;
  nameBangla: string;
  titleEnglish: string;
  strapColorBangla: string;
  colorNameEnglish: string;
  colorHex: string;
  primaryImage: string;
  heroImage: string;
  featureImage: string;
  galleryImages: string[];
  features: string[];
}

export const WATCH_VARIANTS: WatchVariant[] = [
  {
    code: '13297',
    nameBangla: 'রয়্যাল ব্লু ডায়াল',
    titleEnglish: 'Unisex Blue Silicone Strap Gradient Dial Wristwatch',
    strapColorBangla: 'রয়্যাল ব্লু সিলিকন স্ট্র্যাপ',
    colorNameEnglish: 'Royal Blue',
    colorHex: '#2563eb',
    primaryImage: imgBlueFront,
    heroImage: imgBlueHero,
    featureImage: imgBlueFeature,
    galleryImages: [imgBlueHero, imgBlueFront, imgBlueFeature],
    features: [
      'আলোর প্রতিফলনে কালার-চেঞ্জিং ডায়াল',
      'দৈনন্দিন ব্যবহারে ১০০% ওয়াটারপ্রুফ',
      'প্রিমিয়াম স্কিন-ফ্রেন্ডলি সিলিকন স্ট্র্যাপ',
      'নিখুঁত এনালগ ১-১২ মার্কার',
      'ছেলে ও মেয়ে উভয়ের জন্য পারফেক্ট সাইজ'
    ],
  },
  {
    code: '12713',
    nameBangla: 'জেট ব্ল্যাক ডায়াল',
    titleEnglish: 'Unisex Black Silicone Strap Gradient Dial Wristwatch',
    strapColorBangla: 'জেট ব্ল্যাক সিলিকন স্ট্র্যাপ',
    colorNameEnglish: 'Jet Black',
    colorHex: '#18181b',
    primaryImage: imgBlackFront,
    heroImage: imgBlackHero,
    featureImage: imgBlackFeature,
    galleryImages: [imgBlackHero, imgBlackFront, imgBlackFeature],
    features: [
      'আলোর প্রতিফলনে কালার-চেঞ্জিং ডায়াল',
      'দৈনন্দিন ব্যবহারে ১০০% ওয়াটারপ্রুফ',
      'প্রিমিয়াম স্কিন-ফ্রেন্ডলি সিলিকন স্ট্র্যাপ',
      'নিখুঁত এনালগ ১-১২ মার্কার',
      'ছেলে ও মেয়ে উভয়ের জন্য পারফেক্ট সাইজ'
    ],
  },
  {
    code: '13296',
    nameBangla: 'নান্দনিক অ্যাশ ডায়াল',
    titleEnglish: 'Unisex Ash Silicone Strap Gradient Dial Wristwatch',
    strapColorBangla: 'নান্দনিক অ্যাশ সিলিকন স্ট্র্যাপ',
    colorNameEnglish: 'Nautical Ash',
    colorHex: '#64748b',
    primaryImage: imgGreyFront,
    heroImage: imgGreyHero,
    featureImage: imgGreyHero,
    galleryImages: [imgGreyHero, imgGreyFront],
    features: [
      'আলোর প্রতিফলনে কালার-চেঞ্জিং ডায়াল',
      'দৈনন্দিন ব্যবহারে ১০০% ওয়াটারপ্রুফ',
      'প্রিমিয়াম স্কিন-ফ্রেন্ডলি সিলিকন স্ট্র্যাপ',
      'নিখুঁত এনালগ ১-১২ মার্কার',
      'ছেলে ও মেয়ে উভয়ের জন্য পারফেক্ট সাইজ'
    ],
  },
];
