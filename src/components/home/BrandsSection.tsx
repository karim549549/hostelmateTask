"use client";
import BrandsMarquee from './BrandsMarquee';
import { brands } from '@/constants/home';

export default function BrandsSection() {
  return (
    <section aria-label="Our Clients" className="w-full">
      <BrandsMarquee brands={brands} />
    </section>
  );
} 