"use client";
import Image from "next/image";
import  StartIcon  from '@/../public/Icon.png'
import  StarIcon2  from '@/../public/logo2.png'
import  LignkedIn from '@/../public/linkedin.png'
import  Facebook from '@/../public/facebook.png'
import x  from '@/../public/x.png'
import Link from "next/link";
import { Menu } from "lucide-react";
import IlisImage  from '@/../public/Illustration.png'
import  ctaImg  from '@/../public/ctaiamge.png'
import ServicesCard from '@/components/home/ServicesCard';
import { brands, servicesCards } from '@/constants/home';
import FooterNavLinks from '@/components/home/FooterNavLinks';
import Logo from '@/components/home/Logo';
import { motion } from 'framer-motion';
import BrandsMarquee from '@/components/home/BrandsMarquee';
import { useEffect, useState } from "react";

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
            <div className="flex items-center gap-[20px]">
              <FooterNavLinks className="mb-0" color="black" underline={false} />
              <button className="border-1 rounded-xl px-4 py-2 cursor-pointer hover:bg-dark-blue hover:text-white transition-colors focus:outline focus:outline-2 focus:outline-dark-blue" aria-label="Request a quote">Request a quote</button>
            </div>
            <button className="md:hidden" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>
      <main className="mt-[60px] flex flex-col gap-[70px] bg-white" id="main-content">
        {/* Hero Section */}
        <motion.section
          aria-labelledby="hero-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.18 }}
        >
          <div className={`${container} flex flex-col md:flex-row  items-center justify-between text-black`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, type: 'spring', bounce: 0.18, delay: 0 }}
              className="flex-1 max-w-xl"
            >
              <h1 id="hero-heading" className="text-[60px] font-bold max-w-[531px] ">Navigating the digital landscape for success</h1>
              <p className="text-[20px] max-w-[400px] mb-8 text-black leading-[28px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              <button className="text-black py-[20px] px-[35px] rounded-xl bg-black text-white focus:outline focus:outline-2 focus:outline-dark-blue" aria-label="Book a consultation">Book a consultation</button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, type: 'spring', bounce: 0.18, delay: 0.18 }}
              className="flex-1 flex items-center justify-center"
            >
              <Image 
                src={IlisImage}
                alt="Illustration of digital marketing success"
                className="w-auto h-[515px] "
                priority
              />
            </motion.div>
          </div>
        </motion.section>
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
        <motion.section
          aria-labelledby="cta-heading"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.18 }}
          className={`${container} flex items-center justify-center`}
        >
          <div className="w-full max-w-[1320px] bg-[#f3f3f3] rounded-[48px] flex flex-col md:flex-row items-center justify-between px-[60px] py-[56px] gap-8 relative overflow-visible">
            <div className="flex-1 min-w-[320px] z-10">
              <h2 id="cta-heading" className="text-[32px] md:text-[36px] font-bold mb-6">Let's make things happen</h2>
              <p className="text-[20px] mb-8 text-black leading-[28px] max-w-[480px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
              <button className="bg-[#191a23] text-white rounded-[16px] px-[36px] py-[18px] text-[20px] font-medium hover:bg-[#b9ff66] hover:text-black transition-colors focus:outline focus:outline-2 focus:outline-primary-green" aria-label="Get your free proposal">Get your free proposal</button>
            </div>
            <div className="flex-1 flex items-center justify-center min-w-[320px] relative">
              <Image
                src={ctaImg}
                alt="Creative CTA Illustration"
                className="w-[420px] h-[420px] object-contain absolute -bottom-50 right-0"
                style={{ zIndex: 5 }}
                priority
              />
            </div>
          </div>
        </motion.section>
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

      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.18, delay: 0.15 }}
        className={`flex items-center justify-center mt-16 w-full ${container}`}
        role="contentinfo"
      >
        <div className="w-full bg-black rounded-t-[45px] flex flex-col gap-[60px] px-[60px] py-[55px]">
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2 text-white">
              <Logo variant="light" />
            </div>

            <nav aria-label="Footer navigation">
              <FooterNavLinks color="white" underline={true} />
            </nav>
            <ul className="flex items-center gap-4" aria-label="Social media links">
              <li>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Image src={LignkedIn} alt="LinkedIn" className="w-[24px] h-[24px]" />
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Image src={Facebook} alt="Facebook" className="w-[24px] h-[24px]" />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Image src={x} alt="Twitter" className="w-[24px] h-[24px]" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-black text-[24px] w-fit font-bold bg-[#b9ff66] mb-4 px-[7px] rounded-[7px] text-black ">Contact us :</h3>
              <span className="text-white">Email: info@positivus.com</span>
              <span className="text-white">Phone: 555-567-8901</span>
              <span className="text-white">Address: 1234 Main St <br />Moonstone City, Stardust State 12345</span>
            </div>
            <form className="px-[40px] py-[58px] rounded-[14px] bg-[#292a32] flex items-center justify-center gap-[20px]" aria-label="Subscribe to newsletter" onSubmit={e => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Email" className="bg-transparent border-1 rounded-[14px] px-[35px] py-[22px] text-white" required aria-required="true" />
              <button type="submit" className="bg-[#b9ff66] text-black rounded-[14px] px-[35px] py-[22px] focus:outline focus:outline-2 focus:outline-primary-green" aria-label="Subscribe to news">Subscribe to news</button>
            </form>
          </div>
          <div className="flex items-center gap-3 border-t-[1px] border-white/20 pt-[40px]">
            <span className="text-white">© 2023 Positivus. All Rights Reserved.</span>
            <div className="flex gap-[20px] text-white">
              <Link href='/' className="underline">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}