"use client";
import Image from "next/image";
import StartIcon from '@/../public/Icon.png';
import StarIcon2 from '@/../public/logo2.png';
import { motion } from "framer-motion";

export default function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div
        whileInView={{ rotate: [0, 360 * 5] }}
        transition={{ duration: 5, ease: [0.42, 0, 1, 1] }}
      >
        <Image
          src={variant === "light" ? StarIcon2 : StartIcon}
          alt="Positivus Logo"
          className="w-[36px] h-[36px]"
        />
      </motion.div>
      <span className={`text-2xl font-bold ${variant === "light" ? "text-white" : "text-black"}`}>Positivus</span>
    </div>
  );
} 