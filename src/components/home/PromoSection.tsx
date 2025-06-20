"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PromoSection = () => {
  return (
    <section className="space-y-0">
      {/* Ordinary is Boring */}
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/2099767344/310668198.jpeg"
            alt="Ordinary is Boring"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-end text-white">
          <div className="container-custom text-right max-w-lg mr-4 md:mr-16">
            <h2 className="text-lg mb-3">Because</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              ORDINARY IS BORING
            </h3>
            <div className="flex flex-col sm:flex-row justify-end gap-4">
              <Link href="/products/men-sneakers" className="btn-brand">
                Shop Men
              </Link>
              <Link href="/products/women-sneakers" className="btn-brand">
                Shop Women
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Limitless Passion */}
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/videos/limitless-passion.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white">
          <div className="container-custom text-left max-w-lg ml-4 md:ml-16">
            <h2 className="text-lg mb-3">Only</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              LIMITLESS PASSION
            </h3>
            <div className="flex flex-col sm:flex-row justify-start gap-4">
              <Link href="/products/men-sneakers" className="btn-brand">
                Shop Men
              </Link>
              <Link href="/products/women-sneakers" className="btn-brand">
                Shop Women
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
