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
    nameBangla: 'ব্লু এডিশন (Blue)',
    titleEnglish: 'Charles Delon Waterproof Color-Changing Dial Watch – Unisex Blue Silicone Strap',
    strapColorBangla: 'ব্লু সিলিকন স্ট্র্যাপ',
    colorNameEnglish: 'Blue',
    colorHex: '#2563eb',
    primaryImage: imgBlueFront,
    heroImage: imgBlueHero,
    featureImage: imgBlueFeature,
    galleryImages: [imgBlueHero, imgBlueFront, imgBlueFeature],
    features: [
      'আকর্ষণীয় কালার-চেঞ্জিং গোলাকার ডায়াল',
      'দৈনন্দিন ওয়াটারপ্রুফ সুবিধা (হাত ধোয়া, অজু, বৃষ্টি)',
      'প্রিমিয়াম নরম সিলিকন/রাবার স্ট্র্যাপ',
      'স্পষ্ট এনালগ ১ থেকে ১২ মার্কিং',
      'ইউনিক ইউনিসেক্স ডিজাইন (ছেলে ও মেয়ে উভয়ের জন্য)',
    ],
  },
  {
    code: '12713',
    nameBangla: 'ব্ল্যাক এডিশন (Black)',
    titleEnglish: 'Charles Delon Waterproof Color-Changing Dial Watch – Unisex Black Silicone Strap',
    strapColorBangla: 'ব্ল্যাক সিলিকন স্ট্র্যাপ',
    colorNameEnglish: 'Black',
    colorHex: '#18181b',
    primaryImage: imgBlackFront,
    heroImage: imgBlackHero,
    featureImage: imgBlackFeature,
    galleryImages: [imgBlackHero, imgBlackFront, imgBlackFeature],
    features: [
      'আকর্ষণীয় কালার-চেঞ্জিং গোলাকার ডায়াল',
      'দৈনন্দিন ওয়াটারপ্রুফ সুবিধা (হাত ধোয়া, অজু, বৃষ্টি)',
      'প্রিমিয়াম নরম সিলিকন/রাবার স্ট্র্যাপ',
      'স্পষ্ট এনালগ ১ থেকে ১২ মার্কিং',
      'ইউনিক ইউনিসেক্স ডিজাইন (ছেলে ও মেয়ে উভয়ের জন্য)',
    ],
  },
  {
    code: '13296',
    nameBangla: 'অ্যাশ এডিশন (Ash)',
    titleEnglish: 'Charles Delon Waterproof Color-Changing Dial Watch – Unisex Ash Silicone Strap',
    strapColorBangla: 'অ্যাশ সিলিকন স্ট্র্যাপ',
    colorNameEnglish: 'Ash',
    colorHex: '#64748b',
    primaryImage: imgGreyFront,
    heroImage: imgGreyHero,
    featureImage: imgGreyHero,
    galleryImages: [imgGreyHero, imgGreyFront],
    features: [
      'আকর্ষণীয় কালার-চেঞ্জিং গোলাকার ডায়াল',
      'দৈনন্দিন ওয়াটারপ্রুফ সুবিধা (হাত ধোয়া, অজু, বৃষ্টি)',
      'প্রিমিয়াম নরম সিলিকন/রাবার স্ট্র্যাপ',
      'স্পষ্ট এনালগ ১ থেকে ১২ মার্কিং',
      'ইউনিক ইউনিসেক্স ডিজাইন (ছেলে ও মেয়ে উভয়ের জন্য)',
    ],
  },
];
