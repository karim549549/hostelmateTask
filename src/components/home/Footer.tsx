"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import FooterNavLinks from "./FooterNavLinks";
import LignkedIn from '@/../public/linkedin.png'
import Facebook from '@/../public/facebook.png'
import x from '@/../public/x.png'

const container = "container max-w-8xl mx-auto px-[100px]";
export default function Footer() {
  return (
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

      <div className="flex flex-col md:flex-row items-center justify-between">
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
  );
}