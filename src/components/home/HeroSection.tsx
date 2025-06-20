"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Main Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="https://ext.same-assets.com/2099767344/1399591897.jpeg"
          alt="Ez store Sneakers Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Earthy. Woody. Timeless.
          </h1>
          <h2 className="text-2xl md:text-3xl mb-10">X Ez store</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/products/men-sneakers" className="btn-brand">
              Shop Men
            </Link>
            <Link href="/products/women-sneakers" className="btn-brand">
              Shop Women
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
