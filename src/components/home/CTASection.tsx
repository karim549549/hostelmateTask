"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ctaImg from '@/../public/ctaiamge.png';

const container = "container max-w-8xl mx-auto px-[100px]";


export default function CTASection() {
  return (
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
            <h2 id="cta-heading" className="text-[32px] md:text-[36px] font-bold mb-6">Let&apos;s make things happen</h2>
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
  );
}