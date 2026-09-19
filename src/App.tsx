import { useState, lazy, Suspense } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { HeroSection } from "./components/HeroSection";
import { ProductBenefits } from "./components/ProductBenefits";
import { VariantComparisonSection } from "./components/VariantComparisonSection";
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
  const [selectedVariantCode, setSelectedVariantCode] = useState<string>("13297");

  const scrollToOrder = (variantCode?: string) => {
    if (variantCode) {
      setSelectedVariantCode(variantCode);
    }
    const el = document.getElementById("order-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-neutral-900 font-bengali relative selection:bg-neutral-900 selection:text-white antialiased">
      {/* 1. Asymmetric Studio Hero Section */}
      <HeroSection onOrderClick={scrollToOrder} />

      {/* 2. The Story Behind the Dial & Technical Precision */}
      <ProductBenefits />

      {/* 3. Three Editions Swiss Comparison */}
      <VariantComparisonSection onSelectVariant={scrollToOrder} />

      {/* 4. Studio Checkout Section */}
      <OrderSection initialVariantCode={selectedVariantCode} />

      {/* Sticky Mobile CTA & Floating WhatsApp Button */}
      <MobileStickyCTA onOrderClick={() => scrollToOrder()} />
      <WhatsAppButton />
    </div>
  );
}

const LoadingFallback = () => (
  <div className="min-h-screen bg-white text-neutral-600 flex items-center justify-center font-bengali">
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] font-bold tracking-widest uppercase">LOADING...</span>
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