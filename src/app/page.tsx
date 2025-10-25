import HeroSection from "@/components/sections/hero-section";
import SelectedWorkHeader from "@/components/sections/selected-work-header";
import HerralinkProjectCard from "@/components/sections/herralink-project-card";
import BeamProjectCard from "@/components/sections/beam-project-card";
import VisioProjectCard from "@/components/sections/visio-project-card";
import CtaSection from "@/components/sections/cta-section";
import Footer from "@/components/sections/footer";
import DesktopNav from "@/components/navigation/desktop-nav";
import MobileNav from "@/components/navigation/mobile-nav";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <DesktopNav />
      <MobileNav />
      
      <main className="lg:ml-60">
        <div className="mx-auto max-w-[1200px]">
          <HeroSection />
          
          <section id="selected-work" className="scroll-mt-20">
            <SelectedWorkHeader />
            
            <div className="space-y-20 px-4 pb-20">
              <HerralinkProjectCard />
              <BeamProjectCard />
              <VisioProjectCard />
            </div>
          </section>
          
          <CtaSection />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}