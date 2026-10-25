import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CostCalculator } from './components/CostCalculator';
import { ComboSection } from './components/ComboSection';
import { RoadmapSection } from './components/RoadmapSection';
import { CommitmentsSection } from './components/CommitmentsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { FluidMeshBackground } from './components/FluidMeshBackground';
import { LogoIntro } from './components/LogoIntro';

export default function App() {
  const [selectedServiceOrPackage, setSelectedServiceOrPackage] = useState<string>('');
  const [showIntro, setShowIntro] = useState<boolean>(true);

  // Mouse move dynamic lighting listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleOpenConsultation = (serviceOrPackageName?: string) => {
    if (serviceOrPackageName) {
      setSelectedServiceOrPackage(serviceOrPackageName);
    }

    const scrollToContact = () => {
      const contactElement = document.getElementById('lien-he');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if ('startViewTransition' in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(scrollToContact);
    } else {
      scrollToContact();
    }
  };

  const handleApplyEstimate = (summary: string) => {
    setSelectedServiceOrPackage(summary);

    const scrollToContact = () => {
      const contactElement = document.getElementById('lien-he');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if ('startViewTransition' in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(scrollToContact);
    } else {
      scrollToContact();
    }
  };

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowIntro(true);
  };

  return (
    <div className="relative min-h-screen bg-[#010414] text-[#eef4ff] overflow-x-hidden selection:bg-[#38bdf8] selection:text-[#010926]">
      {/* Animated Fluid Mesh Gradient Background (Silky Velvet Blue Matching Reference) */}
      <FluidMeshBackground />

      {/* Cinematic Logo Intro Animation on Entry */}
      <LogoIntro
        isOpen={showIntro}
        onClose={() => setShowIntro(false)}
        onIntroComplete={() => {}}
      />

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Content with Parallax and Layered Presence */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Seamless Capabilities Marquee */}
        <Marquee />

        {/* Section 01: Giới thiệu */}
        <AboutSection />

        {/* Section 02: Dịch vụ lẻ */}
        <ServicesSection
          onOpenConsultation={handleOpenConsultation}
          onSelectServiceForEstimate={() => {
            const estimator = document.getElementById('du-toan');
            if (estimator) {
              estimator.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        />

        {/* Interactive Cost Calculator */}
        <CostCalculator onApplyEstimate={handleApplyEstimate} />

        {/* Section 03: Gói Combo */}
        <ComboSection onSelectCombo={handleOpenConsultation} />

        {/* Section 04: Roadmap 4 giai đoạn */}
        <RoadmapSection onStartProject={handleOpenConsultation} />

        {/* Section 05: Cam kết chất lượng */}
        <CommitmentsSection />

        {/* Case Studies & Real Results */}
        <PortfolioSection onOpenConsultation={handleOpenConsultation} />

        {/* Section 06: Hỏi đáp FAQ */}
        <FaqSection />

        {/* Section 07: Đăng ký tư vấn & Liên hệ */}
        <ContactSection initialServiceOrPackage={selectedServiceOrPackage} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Hub (Call, Zalo, Quick Estimator) */}
      <FloatingActions onOpenConsultation={handleOpenConsultation} />
    </div>
  );
}
