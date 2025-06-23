"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServicesCardProps {
  title1: string;
  title2: string;
  title1Bg: string;
  title2Bg: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  buttonTextColor: string;
  buttonBg: string;
  arrowImg: StaticImageData;
  cardImg: StaticImageData;
  alt: string;
  index?: number;
}

function getButtonHoverBg(bgColor: string, buttonTextColor: string) {
  if (bgColor.includes('#191a23') || buttonTextColor.includes('white')) {
    return 'bg-[#b9ff66]'; // dark card, green hover
  }
  if (bgColor.includes('#b9ff66')) {
    return 'bg-white'; // green card, white hover
  }
  return 'bg-[#191a23]'; // light card, dark hover
}

export default function ServicesCard({
  title1,
  title2,
  title1Bg,
  title2Bg,
  textColor,
  bgColor,
  borderColor,
  buttonTextColor,
  buttonBg,
  arrowImg,
  cardImg,
  alt,
  index = 0,
}: ServicesCardProps) {
  const hoverBg = getButtonHoverBg(bgColor, buttonTextColor);
  // Card 1 and 4: alt is 'card1' or 'card4'
  const hoverTextWhite = alt === 'card1' || alt === 'card4';
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, type: 'spring', bounce: 0.18, delay: index * 0.13 }}
      className={`rounded-[45px] min-h-[310px] p-[50px] flex justify-between ${bgColor} ${borderColor}`}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col ">
          <h3 className={`text-[30px] font-bold ${title1Bg} ${textColor}`}>{title1}</h3>
          <span className={`text-[30px] font-bold w-fit ${title2Bg} ${textColor}`}>{title2}</span>
        </div>
        <Link
          href="#"
          className={`relative group flex items-center gap-2 text-[18px] font-bold px-4 py-2 rounded-[12px] overflow-hidden transition-colors duration-300 ${buttonTextColor}`}
        >
          <span
            className={`absolute left-0 top-0 h-full w-0 group-hover:w-full ${hoverBg} transition-all duration-300 z-0 before:content-['']`}
            aria-hidden
          ></span>
          <span className={`relative z-10 flex items-center gap-2 ${hoverTextWhite ? 'group-hover:text-white transition-colors duration-300' : ''}`}>
            <Image
              src={arrowImg}
              alt=""
              className="w-[41px] h-[41px] object-contain transition-transform duration-300 group-hover:rotate-27"
            />
            <span className="relative z-10">Learn more</span>
          </span>
        </Link>
      </div>
      <div>
        <Image src={cardImg} alt={alt} className="w-[210px] h-auto object-contain" />
      </div>
    </motion.div>
  );
}
