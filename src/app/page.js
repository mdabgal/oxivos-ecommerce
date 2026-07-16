'use client';

import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";

import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Hero/>
    <FeaturedProducts/>
    <Features/>
    <Newsletter/>
    </div>
  );
}
