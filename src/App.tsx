import { useState, lazy, Suspense } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { HeroSection } from "./components/HeroSection";
import { ProductBenefits } from "./components/ProductBenefits";
import { ProductGallery } from "./components/ProductGallery";
import { OrderSection } from "./components/OrderSection";
import { MobileStickyCTA } from "./components/MobileStickyCTA";
import { WhatsAppButton } from "./components/WhatsAppButton";

// Code splitting / Lazy loading admin routes to optimize landing page initial load
const AdminLogin = lazy(() =>
  import("./components/AdminLogin").then((module) => ({
    default: module.AdminLogin,
  }))
);

const AdminDashboard = lazy(() =>
  import("./components/AdminDashboard").then((module) => ({
    default: module.AdminDashboard,
  }))
);

function LandingPage() {
  const [selectedVariantCode, setSelectedVariantCode] = useState<string>("12816");

  const scrollToOrder = (variantCode?: string) => {
    if (variantCode) {
      setSelectedVariantCode(variantCode);
    }
    const el = document.getElementById("order-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-['Hind_Siliguri',sans-serif] relative selection:bg-amber-500 selection:text-slate-950 transition-colors duration-200">
      {/* 1. Hero Section */}
      <HeroSection onOrderClick={scrollToOrder} />

      {/* 2. Features & Package Section */}
      <ProductBenefits />

      {/* 3. Product Gallery Section */}
      <ProductGallery onSelectVariantOrder={scrollToOrder} />

      {/* 4. Order Form Section */}
      <OrderSection initialVariantCode={selectedVariantCode} />

      {/* Sticky Mobile CTA & Floating WhatsApp Button */}
      <MobileStickyCTA onOrderClick={() => scrollToOrder()} />
      <WhatsAppButton />
    </div>
  );
}

const LoadingFallback = () => (
  <div className="min-h-screen bg-slate-950 text-slate-300 flex items-center justify-center font-['Hind_Siliguri',sans-serif]">
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
      <span className="text-sm font-semibold">লোড হচ্ছে...</span>
    </div>
  </div>
);

export default function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    sessionStorage.getItem("admin_authenticated") === "true"
  );

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated");
    setIsAuthenticated(false);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleBackToSite = () => {
    navigate("/");
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <AdminDashboard
                onLogout={handleLogout}
                onBackToSite={handleBackToSite}
              />
            ) : (
              <AdminLogin
                onLoginSuccess={handleLoginSuccess}
                onBackToSite={handleBackToSite}
              />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Analytics />
    </Suspense>
  );
}