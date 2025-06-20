import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#eae90e] text-black py-12">
      {/* Upper Footer with Slogan */}
      <div className="container-custom mb-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 py-6 bg-[#eae90e]">
          <div className="bg-[#ff6b8b] px-6 py-2">
            <span className="font-bold uppercase text-xl">Never Shy</span>
          </div>
          <div>
            <span className="font-bold uppercase text-xl">Never Sorry</span>
          </div>
        </div>
      </div>

      {/* Shipping Information */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-y border-black/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 relative">
              <Image
                src="https://ext.same-assets.com/2099767344/495783516.png"
                alt="Free shipping"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="font-semibold">Free shipping</h4>
              <p className="text-sm">Free shipping for all orders.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 relative">
              <Image
                src="https://ext.same-assets.com/2099767344/3774759777.png"
                alt="Cash on delivery"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="font-semibold">Cash on delivery</h4>
              <p className="text-sm">Cash on delivery at Zero Cost.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 relative">
              <Image
                src="https://ext.same-assets.com/2099767344/3010765535.png"
                alt="Easy return"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="font-semibold">Easy return</h4>
              <p className="text-sm">Free 7 day Return and Exchange.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-5 h-5 relative">
                <Image
                  src="https://ext.same-assets.com/2099767344/4132138766.png"
                  alt="Contact"
                  fill
                  className="object-contain"
                />
              </span>
              Get in Touch
            </h3>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="font-semibold">Whatsapp:</span>
                <a href="https://wa.me/919606081463?text=Hey,%20Let's%20chat%20about%20Comet." className="hover:text-primary">
                  +91 7895737111
                </a>
              </div>

              <div className="flex items-start gap-2">
                <span className="font-semibold">Support:</span>
                <a href="mailto:hello@wearcomet.com" className="hover:text-primary">
                  shreyraghuvanshi10@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2">
                <span className="font-semibold">Marketing & Partnership:</span>
                <a href="mailto:partnerships@wearcomet.com" className="hover:text-primary">
                https://www.instagram.com/shreylovesdrama/
                </a>
              </div>

              <div className="flex items-start gap-2">
                <span className="font-semibold">Careers:</span>
                <a href="https://forms.gle/VgiwDdo7xfU6AtAs6" className="hover:text-primary">
                  Apply Here
                </a>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ishan_sri/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shrey-raghuvanshi-6575a4348/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-5 h-5 relative">
                <Image
                  src="https://ext.same-assets.com/2099767344/956088102.png"
                  alt="About Us"
                  fill
                  className="object-contain"
                />
              </span>
              About Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/craftsmanship" className="hover:text-primary">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="/vault" className="hover:text-primary">
                  Vault
                </Link>
              </li>
              <li>
                <Link href="/garage" className="hover:text-primary">
                  Ez Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/return-and-exchange" className="hover:text-primary">
                  Return and Exchange Portal
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-primary">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/store-locator" className="hover:text-primary">
                  Review
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/care" className="hover:text-primary">
                  Care
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-8 pt-6 border-t border-black/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="w-5 h-5 relative">
                  <Image
                    src="https://ext.same-assets.com/2099767344/2052686404.png"
                    alt="Location"
                    fill
                    className="object-contain"
                  />
                </span>
                Reach Us
              </h3>
              <address className="not-italic">
              SRM IST Delhi-NCR Campus Delhi - Meerut Road, Modinagar, Uttar Pradesh 201204
              </address>
            </div>
            <div className="font-medium text-sm">
              © 2025, Head of the Table Pvt Ltd. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
