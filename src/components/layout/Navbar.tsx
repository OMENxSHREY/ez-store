"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, ShoppingBag, Search, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-2" : "bg-black py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="w-32 h-12 relative">
              <Image
                src="/images/logo.png"
                alt="Ez Store Logo"
                width={128}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block relative">
            <NavigationMenu className="relative">
              <NavigationMenuList className="flex gap-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`text-lg font-medium ${isScrolled ? 'text-black' : 'text-white'}`}
                  >
                    Men
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-1/2 -translate-x-1/2 w-[1400px] p-10 bg-white shadow-lg rounded-md">
                    <div className="grid grid-cols-6 gap-8">
                    <div className="col-span-3">
                    <h3 className="text-lg font-semibold mb-4 text-black">Shop All</h3>
                    <div className="aspect-[21/9] relative overflow-hidden rounded-md mb-4">
                    <Image
                            src="/images/nb610v1-3.jpg"
                            alt="Shop Sneakers"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <Link href="/products/men-sneakers" className="text-base font-medium hover:text-primary transition-colors text-black">
                          Shop SNEAKERS
                        </Link>
                      </div>
                      <div className="col-span-3">
                        <h3 className="text-lg font-semibold mb-4 text-black">Collections</h3>
                        <ul className="grid grid-cols-2 gap-4">
                          <li>
                            <Link href="/about-us" className="text-base hover:text-primary transition-colors text-black">
                           Ez Store
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/men-sneakers" className="text-base hover:text-primary transition-colors text-black">
                           New Arrivals
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                            
                             

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`text-lg font-medium ${isScrolled ? 'text-black' : 'text-white'}`}
                  >
                    Women
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-1/2 -translate-x-1/2 w-[1400px] p-10 bg-white shadow-lg rounded-md">
                    <div className="grid grid-cols-6 gap-8">
                      <div className="col-span-3">
                        <h3 className="text-lg font-semibold mb-4 text-black">Shop All</h3>
                        <div className="aspect-[21/9] relative overflow-hidden rounded-md mb-4">
                          <Image
                            src="/images/nbrc42womens-1.jpg"
                            alt="Shop Sneakers"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <Link href="/products/women-sneakers" className="text-base font-medium hover:text-primary transition-colors text-black">
                          Shop SNEAKERS
                        </Link>
                      </div>
                      <div className="col-span-3">
                        <h3 className="text-lg font-semibold mb-4 text-black">Collections</h3>
                        <ul className="grid grid-cols-2 gap-4">
                          <li>
                            <Link href="/about-us" className="text-base hover:text-primary transition-colors text-black">
                              Ez Store
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/women-sneakers" className="text-base hover:text-primary transition-colors text-black">
                              New Arrivals
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Remove the duplicate Women menu item here */}

                <NavigationMenuItem>
                  <Link href="/drops" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`text-lg font-medium ${isScrolled ? 'text-black' : 'text-white'} hover:text-primary`}
                    >
                      Drops
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Remove the third Women section completely */}

                <NavigationMenuItem>
                  <Link href="/account/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`text-lg font-medium ${isScrolled ? 'text-black' : 'text-white'} hover:text-primary`}
                    >
                      Account
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`text-lg font-medium ${isScrolled ? 'text-black' : 'text-white'} hover:text-primary`}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 ${isScrolled ? 'text-black' : 'text-white'} hover:text-primary`}
            >
              <Search size={20} />
            </button>

            {/* Account */}
            <Link
              href="/account/dashboard"
              className={`p-2 ${isScrolled ? 'text-black' : 'text-white'} hover:text-primary`}
            >
              <User size={20} />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className={`p-2 ${isScrolled ? 'text-black' : 'text-white'} hover:text-primary`}
            >
              <ShoppingBag size={20} />
            </Link>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button className={`p-2 lg:hidden ${isScrolled ? 'text-black' : 'text-white'}`}>
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <SheetTrigger asChild>
                      <button>
                        <X size={24} />
                      </button>
                    </SheetTrigger>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Men</h3>
                      <ul className="space-y-2 pl-4">
                        <li>
                          <Link href="/products/men-sneakers" className="text-sm hover:text-primary">
                            Shop SNEAKERS
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/comet-x" className="text-sm hover:text-primary">
                            Ez Store
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">Women</h3>
                      <ul className="space-y-2 pl-4">
                        <li>
                          <Link href="/products/women-sneakers" className="text-sm hover:text-primary">
                            Shop SNEAKERS
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/comet-x-women" className="text-sm hover:text-primary">
                            Ez Store
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <Link href="/drops" className="block text-sm font-medium hover:text-primary">
                        Drops
                      </Link>
                      <Link href="/about-us" className="block text-sm font-medium hover:text-primary">
                        About Us
                      </Link>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 space-y-2">
                    <Link href="/account/login" className="block text-sm hover:text-primary">
                      Login / Signup
                    </Link>
                    <Link href="/track-order" className="block text-sm hover:text-primary">
                      Track Your Order
                    </Link>
                    <Link href="/contact-us" className="block text-sm hover:text-primary">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Search</h2>
              <button onClick={() => setIsSearchOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border-b-2 border-black py-2 px-4 text-lg focus:outline-none"
                autoFocus
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2" size={20} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
