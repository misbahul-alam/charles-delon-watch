import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Plus,
  Minus,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Package,
  Award,
  Check,
} from "lucide-react";
import { WATCH_VARIANTS, type WatchVariant } from "../images";
import { supabase } from "../lib/superbase";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { toBanglaNumber } from "../utils/bengali";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

interface OrderSectionProps {
  initialVariantCode?: string;
}

export const OrderSection: React.FC<OrderSectionProps> = ({
  initialVariantCode,
}) => {
  const [selectedCode, setSelectedCode] = useState<string>(
    initialVariantCode || WATCH_VARIANTS[0].code
  );

  useEffect(() => {
    if (initialVariantCode) {
      setSelectedCode(initialVariantCode);
    }
  }, [initialVariantCode]);

  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState<"dhaka" | "outside">("dhaka");
  const [customerNote, setCustomerNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const selectedVariant: WatchVariant =
    WATCH_VARIANTS.find((v) => v.code === selectedCode) || WATCH_VARIANTS[0];

  const unitPrice = 890;
  const deliveryCharge = district === "dhaka" ? 70 : 130;
  const subtotal = unitPrice * quantity;
  const totalPrice = subtotal + deliveryCharge;

  const handleQuantityChange = (type: "inc" | "dec") => {
    if (type === "inc") {
      setQuantity((prev) => Math.min(prev + 1, 10));
    } else {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন।");
      return;
    }
    if (!phone.trim() || phone.trim().length < 11) {
      setErrorMessage("সঠিক ১১ ডিজিটের মোবাইল নম্বর প্রদান করুন (যেমন: 01712345678)।");
      return;
    }
    if (!address.trim() || address.trim().length < 5) {
      setErrorMessage("পূর্ণ ডেলিভারি ঠিকানা লিখুন (বাসা নং, রোড নং, থানা, জেলা)।");
      return;
    }

    setIsSubmitting(true);
    const variantDescription = `Code: ${selectedVariant.code} (${selectedVariant.nameBangla})`;
    const productName = `Charles Delon Waterproof Color-Changing Watch [${selectedVariant.code}]`;
    const fullAddress = customerNote.trim()
      ? `${address.trim()} (নোট: ${customerNote.trim()})`
      : address.trim();
    const generatedOrderNo = `CD-${Date.now().toString().slice(-6)}`;
    setOrderNumber(generatedOrderNo);

    try {
      const { error } = await supabase.from("orders").insert([
        {
          name: name.trim(),
          phone: phone.trim(),
          address: fullAddress,
          product: productName,
          color: variantDescription,
          quantity,
          price: unitPrice,
          shipping_amount: deliveryCharge,
          total_amount: totalPrice,
          status: "pending",
        },
      ]);

      if (error) {
        console.error("Supabase Order Insert Error:", error);
      }
    } catch (err: any) {
      console.error("Order submission error:", err);
    }

    // Trigger Meta Pixel Purchase Event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", {
        value: totalPrice,
        currency: "BDT",
        content_name: productName,
        content_type: "product",
        content_ids: [`cd-${selectedVariant.code}`],
        contents: [
          {
            id: `cd-${selectedVariant.code}`,
            quantity: quantity,
            item_price: unitPrice,
          },
        ],
      });
    }

    setIsSubmitting(false);
    setOrderSubmitted(true);
  };

  const handleResetForm = () => {
    setName("");
    setPhone("");
    setAddress("");
    setCustomerNote("");
    setQuantity(1);
    setOrderSubmitted(false);
  };

  return (
    <section
      id="order-section"
      className="py-16 sm:py-24 bg-[#fafbfc] border-b border-neutral-200 scroll-mt-12 text-neutral-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Luxury Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-10 border-b border-neutral-200">
          <div className="space-y-1.5">
            <div className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-semibold flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-neutral-900" />
              <span className="font-['Plus_Jakarta_Sans',sans-serif]">BOUTIQUE CONCIERGE</span>
              <span className="text-neutral-300">•</span>
              <span>অর্ডার ফর্ম</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              অর্ডার রিজার্ভেশন সম্পন্ন করুন
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-sm font-normal">
            কোনো অগ্রিম পেমেন্টের প্রয়োজন নেই। পার্সেল খুলে যাচাই করে মূল্য পরিশোধ করবেন।
          </p>
        </div>

        {orderSubmitted ? (
          /* Luxury Boutique Receipt Card */
          <div className="max-w-xl mx-auto bg-white border border-neutral-200 rounded-3xl p-8 sm:p-10 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-1.5">
              <div className="text-[11px] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-neutral-400 uppercase tracking-widest">
                OFFICIAL RESERVATION SLIP • #{orderNumber}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                আপনার অর্ডারটি সফলভাবে গৃহীত হয়েছে
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                আমাদের প্রতিনিধি অতি শীঘ্রই আপনার সাথে কল করে অর্ডারটি নিশ্চিত করবেন।
              </p>
            </div>

            <div className="bg-neutral-50/80 rounded-2xl p-6 border border-neutral-200 text-left space-y-4 text-xs">
              <div className="flex items-center gap-4 pb-4 border-b border-neutral-200">
                <img
                  src={selectedVariant.primaryImage}
                  alt={selectedVariant.nameBangla}
                  className="w-16 h-16 rounded-xl object-contain bg-white border border-neutral-200 p-1.5 shrink-0 shadow-2xs"
                />
                <div>
                  <div className="font-bold text-neutral-900 text-sm">
                    Charles Delon Watch [কোড {toBanglaNumber(selectedVariant.code)}]
                  </div>
                  <div className="text-neutral-500 font-medium mt-0.5">
                    {selectedVariant.nameBangla} • পরিমাণ: {toBanglaNumber(quantity)} টি
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-neutral-600 font-medium">
                <div className="flex justify-between">
                  <span className="text-neutral-400">গ্রাহকের নাম:</span>
                  <span className="font-bold text-neutral-900">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">মোবাইল নম্বর:</span>
                  <span className="font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">{phone}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-neutral-400 shrink-0">ডেলিভারি ঠিকানা:</span>
                  <span className="font-bold text-neutral-900 text-right max-w-60 wrap-break-word">{address}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-neutral-200 text-sm font-bold text-neutral-900">
                  <span>সর্বমোট প্রদেয় মূল্য:</span>
                  <span className="text-base font-bold text-neutral-900">৳{toBanglaNumber(totalPrice)}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/8801753481548?text=${encodeURIComponent(
                  `হ্যালো, আমি চার্লস ডেলন ওয়াচ (কোড: ${selectedVariant.code}) অর্ডার করেছি। অর্ডার নং: ${orderNumber}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>হোয়াটসঅ্যাপে আপডেট নিন</span>
              </a>
              <button
                onClick={handleResetForm}
                className="py-3 px-5 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                নতুন অর্ডার করুন
              </button>
            </div>
          </div>
        ) : (
          /* 2-Column Luxury Boutique Concierge Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Boutique Order Slip */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-sm space-y-6">
                
                {/* Authenticity Certificate Seal */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-[0.2em] text-neutral-400 font-bold">
                      100% ORIGINAL AUTHENTIC PRODUCT
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-900 px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200">
                    কোড: {toBanglaNumber(selectedVariant.code)}
                  </span>
                </div>

                {/* Selected Timepiece Preview */}
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-neutral-200 p-1.5 shrink-0 flex items-center justify-center shadow-2xs">
                    <img
                      src={selectedVariant.primaryImage}
                      alt={selectedVariant.nameBangla}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="text-sm font-bold text-neutral-900 truncate">
                      {selectedVariant.nameBangla}
                    </div>
                    <div className="text-xs text-neutral-500">
                      {selectedVariant.strapColorBangla}
                    </div>
                    <div className="text-[11px] font-['Plus_Jakarta_Sans',sans-serif] text-neutral-400 font-semibold uppercase tracking-wider">
                      {selectedVariant.colorNameEnglish} EDITION
                    </div>
                  </div>
                </div>

                {/* Boutique Color Switcher Tabs */}
                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">
                    মডেল ও কালার পরিবর্তন:
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {WATCH_VARIANTS.map((v) => {
                      const isSelected = selectedCode === v.code;
                      return (
                        <button
                          key={v.code}
                          type="button"
                          onClick={() => setSelectedCode(v.code)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                            isSelected
                              ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                              : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                          }`}
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-white/20"
                            style={{ backgroundColor: v.colorHex }}
                          />
                          <div className="text-[11px] font-bold truncate w-full">{v.nameBangla}</div>
                          <div className={`text-[10px] font-semibold ${isSelected ? 'text-neutral-300' : 'text-neutral-400'}`}>
                            {toBanglaNumber(v.code)}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quantity Changer */}
                <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                  <span className="text-xs font-bold text-neutral-700">
                    পরিমাণ:
                  </span>
                  <div className="flex items-center border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange("dec")}
                      className="w-8 h-8 flex items-center justify-center hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
                      aria-label="Decrease"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-neutral-900">
                      {toBanglaNumber(quantity)}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange("inc")}
                      className="w-8 h-8 flex items-center justify-center hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
                      aria-label="Increase"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Package Presentation Inclusions */}
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-xs text-neutral-700 space-y-1.5">
                  <div className="font-bold text-neutral-900 flex items-center gap-1.5 uppercase tracking-wide text-[11px]">
                    <Package className="w-3.5 h-3.5 text-neutral-900" />
                    <span>উপহার প্যাকেজে যা যা থাকবে:</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 pl-5 leading-relaxed">
                    ১টি অরিজিনাল Charles Delon ঘড়ি • ১টি প্রিমিয়াম ওয়াচ বক্স • সেফটি ডেলিভারি প্যাকেজিং
                  </div>
                </div>

                {/* Invoice Price Sheet */}
                <div className="space-y-2.5 pt-3 border-t border-neutral-100 text-xs font-medium">
                  <div className="flex justify-between text-neutral-500">
                    <span>পণ্যের মূল্য ({toBanglaNumber(quantity)}টি)</span>
                    <span className="font-bold text-neutral-900">৳{toBanglaNumber(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-500">
                    <span>ডেলিভারি চার্জ</span>
                    <span className="font-bold text-neutral-900">৳{toBanglaNumber(deliveryCharge)}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-neutral-200 text-sm font-bold text-neutral-900">
                    <span>সর্বমোট প্রদেয় বিল</span>
                    <span className="text-base font-bold text-neutral-900">৳{toBanglaNumber(totalPrice)}</span>
                  </div>
                </div>
              </div>

              {/* Cash On Delivery Assurance */}
              <div className="bg-neutral-50/70 rounded-2xl border border-neutral-200/80 p-4 text-xs text-neutral-600 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-neutral-900 shrink-0" />
                <span>ক্যাশ অন ডেলিভারি — পার্সেল রিসিভ করার সময় ডেলিভারিম্যানের সামনে সম্পূর্ণ চেক করে নেওয়ার সুযোগ রয়েছে।</span>
              </div>

            </div>

            {/* Right Column: Concierge Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="space-y-1 pb-4 border-b border-neutral-100">
                  <div className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-2">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif]">CLIENT INFORMATION</span>
                    <span className="text-neutral-300">•</span>
                    <span>কাস্টমার তথ্য</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                    ডেলিভারির জন্য আপনার তথ্য প্রদান করুন
                  </h3>
                </div>

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-neutral-800 mb-1.5">
                      আপনার পূর্ণ নাম <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="যেমন: মোঃ কামরুল ইসলাম"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900/10 text-sm transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-800 mb-1.5">
                      মোবাইল নম্বর (১১ ডিজিট) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="যেমন: 017XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900/10 font-['Plus_Jakarta_Sans',sans-serif] text-sm transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-800 mb-1.5">
                      পূর্ণ ডেলিভারি ঠিকানা <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={2}
                      placeholder="বাসা নং, রোড নং, এলাকা, থানা ও জেলা লিখুন..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900/10 text-sm transition-all resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-800 mb-1.5">
                      ডেলিভারি এলাকা নির্বাচন করুন:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setDistrict("dhaka")}
                        className={`py-3 px-3 sm:px-4 rounded-xl border text-center transition-all cursor-pointer font-bold text-xs flex items-center justify-center gap-1.5 ${
                          district === "dhaka"
                            ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                            : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        {district === "dhaka" && <Check className="w-3.5 h-3.5 shrink-0" />}
                        <span className="truncate">ঢাকার ভিতরে (৳{toBanglaNumber(70)})</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setDistrict("outside")}
                        className={`py-3 px-3 sm:px-4 rounded-xl border text-center transition-all cursor-pointer font-bold text-xs flex items-center justify-center gap-1.5 ${
                          district === "outside"
                            ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                            : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        {district === "outside" && <Check className="w-3.5 h-3.5 shrink-0" />}
                        <span className="truncate">ঢাকার বাইরে (৳{toBanglaNumber(130)})</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-800 mb-1.5">
                      অতিরিক্ত কোনো নির্দেশনা (ঐচ্ছিক)
                    </label>
                    <input
                      type="text"
                      value={customerNote}
                      onChange={(e) => setCustomerNote(e.target.value)}
                      placeholder="যেমন: অফিসের ঠিকানায় বিকেল ৫টার পর ডেলিভারি দিন"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:outline-hidden focus:border-neutral-900 text-xs transition-all"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm tracking-wide transition-all duration-150 flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 disabled:opacity-70 shadow-md"
                  >
                    {isSubmitting ? (
                      <span>অর্ডার সংরক্ষিত হচ্ছে...</span>
                    ) : (
                      <>
                        <span>অর্ডার নিশ্চিত করুন — ৳{toBanglaNumber(totalPrice)}</span>
                        <ArrowRight className="w-4 h-4 text-neutral-400" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
