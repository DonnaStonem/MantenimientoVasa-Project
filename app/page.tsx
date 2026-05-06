import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { AboutSection } from "@/components/landing/about-section";
import { ValueSection } from "@/components/landing/value-section";
import { OfferSection } from "@/components/landing/offer-section";
import { ProjectsCarousel } from "@/components/landing/projects-carousel";
import { ContactForm } from "@/components/landing/contact-form";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ValueSection />
        <OfferSection />
        <ProjectsCarousel />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
