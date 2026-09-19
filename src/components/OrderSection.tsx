import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Truck,
  Sparkles,
  User,
  Phone,
  MapPin,
  PackageCheck,
  CheckCircle2,
  AlertCircle,
  Plus,
  Minus,
  Gift,
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

  const unitPrice = 990;
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
      setErrorMessage("দয়া করে আপনার পূর্ণ নাম লিখুন।");
      return;
    }
    if (!phone.trim() || phone.trim().length < 11) {
      setErrorMessage(
        "দয়া করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)।"
      );
      return;
    }
    if (!address.trim()) {
      setErrorMessage("দয়া করে আপনার পূর্ণ ডেলিভারি ঠিকানা লিখুন।");
      return;
    }

    setIsSubmitting(true);
    const variantDescription = `Code: ${selectedVariant.code} (${selectedVariant.nameBangla})`;
    const productName = `CASIO ILLUMINATOR LEATHER STRAP [${selectedVariant.code}]`;
    const fullAddress = customerNote.trim()
      ? `${address.trim()} (নোট: ${customerNote.trim()})`
      : address.trim();
    const generatedOrderNo = `ORD-${Date.now().toString().slice(-6)}`;
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
      console.error("Order submission catch error:", err);
    }

    // Trigger Meta Pixel Purchase Event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", {
        value: totalPrice,
        currency: "BDT",
        content_name: productName,
        content_type: "product",
        content_ids: [`casio-${selectedVariant.code}`],
        contents: [
          {
            id: `casio-${selectedVariant.code}`,
            quantity,
            item_price: unitPrice,
          },
        ],
        num_items: quantity,
      });
    }

    setIsSubmitting(false);
    setOrderSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setAddress("");
    setCustomerNote("");
    setOrderSubmitted(false);
  };

  return (
    <section
      id="order-section"
      className="py-12 sm:py-16 relative bg-slate-100/80 dark:bg-gradient-to-b dark:from-[#070b12] dark:via-slate-950 dark:to-[#070b12] scroll-mt-12 text-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[500px] radial-glow-amber opacity-35 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>অর্ডার করুন সহজেই</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
            অর্ডার করতে নিচের ফর্মটি পূরণ করুন 📦
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-base">
            ক্যাশ অন ডেলিভারি — পণ্য হাতে পেয়ে চেক করে মূল্য পরিশোধ করার ১০০% নিশ্চয়তা!
          </p>

          {/* Offer & Free Gift Highlights */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs font-bold">
            <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/40 text-amber-900 dark:text-amber-300 flex items-center gap-1">
              <Gift className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>প্যাকেজে ১টি বক্স + ২টি ব্যাটারি ফ্রি!</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>অফার মূল্য ৳৯৯০</span>
            </span>
          </div>
        </div>

        {orderSubmitted ? (
          /* Order Confirmation View */
          <div className="max-w-xl mx-auto bg-white dark:bg-slate-900/95 border border-emerald-400 dark:border-emerald-500/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl backdrop-blur-xl text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/20 inline-block">
                অর্ডার নম্বর: {toBanglaNumber(orderNumber)}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                অভিনন্দন! আপনার অর্ডারটি সফল হয়েছে 🎉
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে কল করে অর্ডারটি কনফার্ম করবেন।
              </p>
            </div>

            {/* Order Details Receipt */}
            <div className="bg-slate-50 dark:bg-slate-950/80 rounded-xl p-4 border border-slate-200 dark:border-slate-800 text-left space-y-2.5">
              <div className="flex items-center gap-3 pb-2.5 border-b border-slate-200 dark:border-slate-800">
                <img
                  src={selectedVariant.primaryImage}
                  alt={selectedVariant.nameBangla}
                  className="w-12 h-12 rounded-lg object-contain bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1 shrink-0"
                />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    CASIO ILLUMINATOR [কোড {toBanglaNumber(selectedVariant.code)}]
                  </div>
                  <div className="text-xs text-amber-700 dark:text-amber-400 font-semibold">
                    {selectedVariant.nameBangla} • {toBanglaNumber(quantity)} টি
                  </div>
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">নাম:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">ফোন:</span>
                  <span className="font-semibold text-slate-900 dark:text-white font-mono">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">ঠিকানা:</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right max-w-[200px] truncate">{address}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-sm font-bold">
                  <span className="text-slate-900 dark:text-white">সর্বমোট মূল্য:</span>
                  <span className="text-amber-600 dark:text-amber-400 font-mono text-base">৳{toBanglaNumber(totalPrice)}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
              <a
                href={`https://wa.me/8801753481548?text=${encodeURIComponent(
                  `হ্যালো, আমি ক্যাসিও ইলুমিনেটর ওয়াচ (কোড: ${selectedVariant.code}) অর্ডার করেছি। অর্ডার নং: ${orderNumber}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>হোয়াটসঅ্যাপে দ্রুত কনফার্ম করুন</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs cursor-pointer min-h-[44px]"
              >
                আরেকটি অর্ডার করুন
              </button>
            </div>
          </div>
        ) : (
          /* Form Card */
          <div className="w-full mx-auto bg-white dark:bg-slate-900/90 p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-amber-500/25 shadow-lg backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Step 1: Select Watch Variant (2x2 Grid on mobile, 4-cols on desktop) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs">
                      ১
                    </span>
                    <span>ঘড়ির মডেল সিলেক্ট করুন:</span>
                  </h3>
                  <span className="text-xs text-amber-600 dark:text-amber-400 font-mono font-bold">
                    কোড: {toBanglaNumber(selectedVariant.code)}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                  {WATCH_VARIANTS.map((variant) => {
                    const isSelected = selectedCode === variant.code;
                    return (
                      <div
                        key={variant.code}
                        onClick={() => setSelectedCode(variant.code)}
                        className={`cursor-pointer rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 border transition-all duration-200 relative flex flex-col justify-between active:scale-98 ${
                          isSelected
                            ? "bg-amber-50/90 dark:bg-amber-500/15 border-amber-500 dark:border-amber-400 ring-1 sm:ring-2 ring-amber-400 shadow-xs"
                            : "bg-slate-50 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                      >
                        <div className="space-y-1.5">
                          <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-1">
                            <img
                              src={variant.primaryImage}
                              alt={variant.nameBangla}
                              className="w-full h-full object-contain"
                            />
                            <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-white/90 dark:bg-slate-950/90 text-amber-800 dark:text-amber-300 text-[9px] sm:text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700">
                              {toBanglaNumber(variant.code)}
                            </div>
                            {isSelected && (
                              <div className="absolute top-1 right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-500 dark:bg-amber-400 flex items-center justify-center text-slate-950">
                                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                              </div>
                            )}
                          </div>

                          <div>
                            <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white truncate">
                              {variant.nameBangla}
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                              {variant.strapColorBangla}
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 pt-1.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                          <span className="text-xs font-black text-amber-600 dark:text-amber-400 font-mono">
                            ৳৯৯০
                          </span>
                          <span className="text-[9px] text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-500/10 px-1 py-0.5 rounded">
                            ইন-স্টক
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Customer Delivery Details & Pricing */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-4 border-t border-slate-200 dark:border-slate-800">
                {/* Inputs */}
                <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs">
                      ২
                    </span>
                    <span>আপনার ডেলিভারি ঠিকানা দিন:</span>
                  </h3>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-100 dark:bg-rose-500/20 border border-rose-300 dark:border-rose-500/40 text-rose-800 dark:text-rose-200 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-in fade-in">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name (text-base prevents iOS Safari zoom) */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>আপনার নাম *</span>
                    </label>
                    <input
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="যেমন: মোঃ সাকিব রহমান"
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-base sm:text-sm outline-none transition-all min-h-[44px]"
                    />
                  </div>

                  {/* Phone (inputMode tel for numeric keyboard on mobile) */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>মোবাইল নম্বর (১১ ডিজিট) *</span>
                    </label>
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="যেমন: 017XXXXXXXX"
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-base sm:text-sm outline-none transition-all font-mono min-h-[44px]"
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>সম্পূর্ণ ডেলিভারি ঠিকানা *</span>
                    </label>
                    <textarea
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="বাসা নং, রোড নং, এলাকা, থানা ও জেলা..."
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-amber-500 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-base sm:text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Delivery Area Picker */}
                  <div className="space-y-1.5 pt-0.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>ডেলিভারি এলাকা:</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => setDistrict("dhaka")}
                        className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer min-h-[48px] active:scale-98 ${
                          district === "dhaka"
                            ? "bg-amber-100/90 dark:bg-amber-500/20 border-amber-500 dark:border-amber-400 text-slate-900 dark:text-white ring-1 ring-amber-400 shadow-xs"
                            : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        <div className="text-xs font-bold leading-tight">
                          ঢাকা সিটির ভিতরে
                        </div>
                        <div className="text-[11px] text-amber-700 dark:text-amber-400 font-bold mt-0.5">
                          চার্জ: ৳৭০
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDistrict("outside")}
                        className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer min-h-[48px] active:scale-98 ${
                          district === "outside"
                            ? "bg-amber-100/90 dark:bg-amber-500/20 border-amber-500 dark:border-amber-400 text-slate-900 dark:text-white ring-1 ring-amber-400 shadow-xs"
                            : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        <div className="text-xs font-bold leading-tight">
                          ঢাকার বাইরে (সারাদেশ)
                        </div>
                        <div className="text-[11px] text-amber-700 dark:text-amber-400 font-bold mt-0.5">
                          চার্জ: ৳১৩০
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Quantity & Price Calculation */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6 bg-slate-50 dark:bg-slate-950/80 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="space-y-3.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <span>অর্ডার সামারি</span>
                      <span className="text-amber-700 dark:text-amber-400 text-xs font-bold">
                        ক্যাশ অন ডেলিভারি
                      </span>
                    </h4>

                    {/* Quantity Touch Counter */}
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        পরিমাণ:
                      </span>
                      <div className="flex items-center gap-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-1">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange("dec")}
                          className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors cursor-pointer active:scale-90"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-mono font-bold text-slate-900 dark:text-white">
                          {toBanglaNumber(quantity)}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleQuantityChange("inc")}
                          className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors cursor-pointer active:scale-90"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Selected Watch Snippet */}
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                      <img
                        src={selectedVariant.primaryImage}
                        alt={selectedVariant.nameBangla}
                        className="w-10 h-10 rounded-lg object-contain bg-slate-100 dark:bg-slate-950 p-0.5 shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          কোড {toBanglaNumber(selectedVariant.code)} ({selectedVariant.nameBangla})
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          ৳৯৯০ × {toBanglaNumber(quantity)} = ৳{toBanglaNumber(subtotal)}
                        </div>
                      </div>
                    </div>

                    {/* Free Inclusions Notice */}
                    <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-900 dark:text-amber-300 text-xs space-y-0.5">
                      <div className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300 text-[11px]">
                        <Gift className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                        <span>প্যাকেজে অন্তর্ভুক্ত:</span>
                      </div>
                      <div className="text-[10px] text-slate-700 dark:text-slate-300 pl-4">
                        • {toBanglaNumber(quantity)} টি ঘড়ি + {toBanglaNumber(quantity)} টি বক্স + {toBanglaNumber(quantity * 2)} টি ব্যাটারি ফ্রি
                      </div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="space-y-1.5 pt-1 text-xs">
                      <div className="flex justify-between text-slate-500 dark:text-slate-400">
                        <span>ঘড়ির মূল্য:</span>
                        <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                          ৳{toBanglaNumber(subtotal)}
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-500 dark:text-slate-400">
                        <span>ডেলিভারি চার্জ:</span>
                        <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                          ৳{toBanglaNumber(deliveryCharge)}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between items-baseline text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        <span>সর্বমোট বিল:</span>
                        <span className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 font-mono">
                          ৳{toBanglaNumber(totalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Big Touch-friendly Submit Button */}
                  <div className="space-y-2 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-amber-500/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[50px]"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2 text-slate-950">
                          <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>অর্ডার হচ্ছে...</span>
                        </div>
                      ) : (
                        <>
                          <PackageCheck className="w-5 h-5" />
                          <span>অর্ডার কনফার্ম করুন (৳{toBanglaNumber(totalPrice)})</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>পণ্য হাতে পেয়ে চেক করে টাকা দিন</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
