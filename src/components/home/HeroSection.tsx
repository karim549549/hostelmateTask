"use client";
import {motion } from 'framer-motion';
import Image from 'next/image';
import IlisImage  from '@/../public/Illustration.png'

const container = "container max-w-8xl mx-auto px-[100px]";
export default function HeroSection() {
  return (
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
  );
}