import Image, { StaticImageData } from "next/image";

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
}: ServicesCardProps) {
  return (
    <div
      className={`rounded-[45px] min-h-[310px] p-[50px] flex justify-between ${bgColor} ${borderColor}`}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col ">
          <h3 className={`text-[30px] font-bold ${title1Bg} ${textColor}`}>{title1}</h3>
          <span className={`text-[30px] font-bold w-fit ${title2Bg} ${textColor}`}>{title2}</span>
        </div>
        <button className={`text-[18px] font-bold flex items-center gap-[10px] ${buttonTextColor}`}>
          <Image src={arrowImg} alt="" className="w-[41px] h-[41px] object-contain" />
          <span>Learn more</span>
        </button>
      </div>
      <div>
        <Image src={cardImg} alt={alt} className="w-[210px] h-auto object-contain" />
      </div>
    </div>
  );
}
