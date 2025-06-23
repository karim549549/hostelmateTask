"use client";
import { Menu } from "lucide-react";
import ServicesCard from '@/components/home/ServicesCard';
import { brands, servicesCards } from '@/constants/home';
import FooterNavLinks from '@/components/home/FooterNavLinks';
import Logo from '@/components/home/Logo';
import { motion } from 'framer-motion';
import BrandsMarquee from '@/components/home/BrandsMarquee';
import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

const container = "container max-w-8xl mx-auto px-[100px]";

export default function Home() {
  // Scroll-to-top button state
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-white text-black font-space-grotesk  bg-white ">
      <header className="mt-[60px]" role="banner">
        <nav aria-label="Main navigation">
          <div className={`${container} flex items-center justify-between text-black`}>
            <div className="flex items-center gap-2">
              <Logo variant="dark" />
            </div>
            <div className="md:flex hidden  items-center gap-[20px]">
              <FooterNavLinks className="mb-0" color="black" underline={false} />
              <button className="border-1 rounded-xl px-4 py-2 cursor-pointer transition-colors focus:outline focus:outline-2 focus:outline-dark-blue" aria-label="Request a quote">Request a quote</button>
            </div>
            <button className="md:hidden" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>
      <main className="mt-[60px] flex flex-col gap-[70px] bg-white" id="main-content">
        {/* Hero Section */}
        <HeroSection/>
        {/* Brands */}
        <section aria-label="Our Clients" className="w-full">
          <BrandsMarquee brands={brands} />
        </section>
        
        <section aria-labelledby="services-heading" className="w-full">
          <div className="flex items-center gap-6 mb-8">
            <div className={`${container} flex items-center gap-[40px]`}>
              <h2 id="services-heading" className="bg-[#b9ff66] text-black font-semibold px-[7px] text-[40px] rounded-[7px]">Services</h2>
              <p className="text-black text-[18px] max-w-[580px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="px-8 md:px-20 py-16 bg-white">
            <div className={`${container} grid grid-cols-1 md:grid-cols-2 gap-[40px]`}>
              {servicesCards.map((card, idx) => (
                <article key={idx} aria-labelledby={`service-card-title-${idx}`} className="focus-within:ring-2 focus-within:ring-primary-green rounded-[45px]">
                  <ServicesCard {...card} index={idx} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection/>
        {/* Scroll to Top Button */}
        <motion.button
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 bg-[#b9ff66] text-black rounded-full p-4 shadow-lg border-2 border-black focus:outline focus:outline-2 focus:outline-primary-green transition-transform hover:scale-110"
          initial={{ opacity: 0, y: 40 }}
          animate={showScroll ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          onClick={scrollToTop}
          style={{ pointerEvents: showScroll ? 'auto' : 'none' }}
        >
          <span className="sr-only">Scroll to top</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up" aria-hidden="true"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
        </motion.button>
      </main>

      <Footer/>
    </div>
  );
}