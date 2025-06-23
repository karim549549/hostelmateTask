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
const container = "container max-w-8xl mx-auto px-[100px]";

export default function Home() {
  return (
    <div className="bg-white text-black font-space-grotesk  bg-white ">
      <header className="mt-[60px]">
        <nav>
          <div className={`${container} flex items-center justify-between text-black`}>
            <div className="flex items-center gap-2">
              <Image src={StartIcon} alt="StartIcon" className="w-[36px] h-[36px]" />
              <span className="text-2xl font-bold">Positivus</span>
            </div>
            <ul className="md:flex items-center hidden gap-[40px]">
              <li>
                <Link href='/'>
                  About us
                </Link>
              </li>
              <li>
                <Link href='/'>
                  Services
                </Link>
              </li>
              <li>
                <Link href='/'>
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href='/'>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href='/'>
                Blog
                </Link>
              </li>
              <li typeof="button" className="border-1 rounded-xl px-4 py-2">
                Request a quote
              </li>
            </ul>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>
      <main className="mt-[60px] flex flex-col gap-[70px] bg-white">
        {/* Hero Section */}
        <section>
          <div className={`${container} flex flex-col md:flex-row  items-center justify-between text-black`}>
            <div className="flex-1 max-w-xl">
              <h1 className="text-[60px] font-bold max-w-[531px] ">Navigating the digital landscape for success</h1>
              <p className="text-[20px] max-w-[400px] mb-8 text-black leading-[28px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              <button className="text-black py-[20px] px-[35px] rounded-xl bg-black text-white">Book a consultation</button>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Image 
              src={IlisImage}
              alt="IlisImage"
              className="w-auto h-[515px] "
              />
            </div>
          </div>
        </section>
        {/* Brands */}
        <section aria-label="Brands">
          <div className={`${container} flex items-center gap-8 justify-between `}>
            {brands.map((brand, idx) => (
              <Image
                key={brand.alt}
                src={brand.src}
                alt={brand.alt}
                className="h-[48px] w-[128px] object-contain"
                priority={idx === 0}
              />
            ))}
          </div>
        </section>
        
        <div className="flex items-center gap-6 mb-8">
          <div className={`${container} flex items-center gap-[40px]`}>
            <h2 className="bg-[#b9ff66] text-black font-semibold px-[7px] text-[40px] rounded-[7px]">Services</h2>
            <p className="ttext-black text-[18px] max-w-[580px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
          </div>
        </div>
        
        {/* Services Section */}
        <section className="px-8 md:px-20 py-16 bg-white">
          <div className={`${container} grid grid-cols-1 md:grid-cols-2 gap-[40px]`}>
            {servicesCards.map((card, idx) => (
              <ServicesCard key={idx} {...card} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${container} flex items-center justify-center`}>
          <div className="w-full max-w-[1320px] bg-[#f3f3f3] rounded-[48px] flex flex-col md:flex-row items-center justify-between px-[60px] py-[56px] gap-8 relative overflow-visible">
            <div className="flex-1 min-w-[320px] z-10">
              <h2 className="text-[32px] md:text-[36px] font-bold mb-6">Let's make things happen</h2>
              <p className="text-[20px] mb-8 text-black leading-[28px] max-w-[480px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
              <button className="bg-[#191a23] text-white rounded-[16px] px-[36px] py-[18px] text-[20px] font-medium hover:bg-[#b9ff66] hover:text-black transition-colors">Get your free proposal</button>
            </div>
            <div className="flex-1 flex items-center justify-center min-w-[320px] relative">
              <Image
                src={ctaImg}
                alt="CTA Illustration"
                className="w-[420px] h-[420px] object-contain absolute -bottom-50 right-0"
                style={{ zIndex: 5 }}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className={`flex items-center justify-center mt-16 w-full ${container}  `}>
        <div className="w-full bg-black rounded-t-[45px] flex flex-col gap-[60px] px-[60px] py-[55px]">
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2 text-white">
              <Image src={StarIcon2} alt="StarIcon2" className="w-[36px] h-[36px]" />
              <span className="text-[24px] font-bold">Positivus</span>
            </div>

            <ul className="flex gap-[20px] text-white">
              <li>
                <Link href='/' className="underline">About us</Link>
              </li>
              <li>
                <Link href='/' className="underline">Services</Link>
              </li>
              <li>
                <Link href='/' className="underline">Use Cases</Link>
              </li>
              <li>
                <Link href='/' className="underline">Pricing</Link>
              </li>
              <li>
                <Link href='/' className="underline">Blog</Link>
              </li>
            </ul>
            <ul className="flex items-center gap-4">
              <li>
                <Image src={LignkedIn} alt="LignkedIn" className="w-[24px] h-[24px]" />
              </li>
              <li>
                <Image src={Facebook} alt="Facebook" className="w-[24px] h-[24px]" />
              </li>
              <li>
                <Image src={x} alt="x" className="w-[24px] h-[24px]" />
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
            <div className="px-[40px] py-[58px] rounded-[14px] bg-[#292a32] flex items-center justify-center gap-[20px]">
              <input type="email" placeholder="Email" className=" bg-transparent border-1 rounded-[14px] px-[35px] py-[22px] text-white" />
              <button className="bg-[#b9ff66] text-black rounded-[14px] px-[35px] py-[22px]">Subscribe to news</button>
            </div>
          </div>
          <div className="flex items-center gap-3 border-t-[1px] border-white/20 pt-[40px]">
            <span className="text-white">© 2023 Positivus. All Rights Reserved.</span>
            <div className="flex gap-[20px] text-white">
              <Link href='/' className="underline">Privacy Policy</Link>
            </div>
          </div>
        </div>

      </footer>
      
    </div>
  );
}