"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const VaultSection = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/ez_store_vault1.png"
          alt="Vault - Drops Library"
          fill
          className="object-cover brightness-75"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white">
        <div className="container-custom text-left max-w-lg ml-4 md:ml-16">
          <p className="text-lg mb-2">The Vault</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            DROPS LIBRARY
          </h2>
          <Link href="/vault" className="bg-[#eae90e] text-black font-medium px-8 py-3 hover:bg-[#c5c50e] transition-colors uppercase tracking-wide inline-block">
            ENTER NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VaultSection;
