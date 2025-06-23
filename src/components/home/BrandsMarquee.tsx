import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function BrandsMarquee({ brands }: { brands: { src: any; alt: string }[] }) {
  return (
    <Marquee gradient={false} speed={40}  className="w-full">
      <div className="flex items-center gap-8 justify-between w-full">
        {brands.map((brand, idx) => (
          <Image
            key={brand.alt + idx}
            src={brand.src}
            alt={brand.alt}
            className="h-[48px] w-[128px] object-contain mx-8"
            priority={idx === 0}
          />
        ))}
      </div>
    </Marquee>
  );
} 