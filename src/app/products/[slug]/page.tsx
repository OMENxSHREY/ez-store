import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Truck, CheckCircle, RotateCcw } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Sample product data
const productData = {
  name: "New Balance Men's 530",
  description: "The New Balance 530 brings back a running favorite with modern touches. This lifestyle sneaker features a breathable mesh upper with premium suede overlays, delivering both style and comfort. The ABZORB midsole cushioning combines with the padded collar to provide all-day comfort, while the classic silhouette offers timeless appeal for any casual outfit.",
  price: 8999,
  images: [
    "/images/nb530-1.jpg",
    "/images/nb530-2.jpg",
    "/images/nb530-3.jpg",
    "/images/nb530-4.jpg",
  ],
  features: [
    {
      title: "MADE FOR INDIAN FEET",
      subtitle: "WIDE AND ROOMY TOE BOX",
      description: "Our dedly construction has been tailored to fit broad Indian feet. It will hug your feet and yet let them breathe.",
      image: "https://ext.same-assets.com/2099767344/3039065202.jpeg",
    },
    {
      title: "SLIP, SLIDE, HOP, GROOVE, REPEAT",
      subtitle: "EASY TO SLIP ON, EASY TO SLIP OFF",
      description: "Once tied, these are easy to slip on. Just slide your feet in to go about your day. No hasty, lacey business, we promise.",
      image: "/images/nb530-1.jpg",
    },
    {
      title: "AND THEY'VE GOT BALLS TOO",
      subtitle: "STURDY, DURABLE, SECURE",
      description: "Yes, they have some balls to get you through the day and night too. Yes, they have the most durable materials. Yes, the outsole is tested for almost all conditions.",
      image: "https://ext.same-assets.com/2099767344/310668198.jpeg",
    },
    {
      title: "SWIPE LEFT, SWIPE RIGHT, VIOLA!",
      subtitle: "CAREFREE COMFORT FROM 9AM TO 5PM",
      description: "From your morning run to your after hours party, our 3 LAYER SOLE TECH, SPACEWALK, will keep you cozy, nimble, and free-spirited.",
      image: "https://media-hosting.imagekit.io/3bc32a6127d24f68/videoframe_0.png?Expires=1839752491&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xJ92UxBa6QJBPoUtKmAvwxBKNI06V4VkiApq1TrLuLZqoduvH3TjRlhqE~ezp0XHIKi0J-AUdB9gd93KX69bGIBUsqIBr13IQF6J8BrpgMClTne6a1bV33td8fiwdzyWH2JnykKp1dspYREjY7Z6GGzSTIlpXsbj2zqeVLKB1O6wk6yCJxs3myA~q734tssCB6h05JB0mC4415-70BXcDmQpUILe~jU2aGe6vDj3ORj0OQHz4O-orZRl7Y2Ol2eTKMYQ3Vfn7ohiJWG~rZr3sJNdkzFRYph8QfjoMCsgeKauC-phz2WNbxXAwVtgQD9lKweWC7GOcHnRyrPpUZtn~Q__",
    },
  ],
  specifications: {
    category: "Running Shoe",
    style: "X Mens",
    color: "Grey White",
    netQuantity: "1 Pair",
    retailPrice: "₹ 8,999",
    productCode: "nb530",
    dateOfMfg: "22/05/2022",
    countryOfOrigin: "India",
  },
  sizes: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  availableSizes: [4, 5, 6, 7, 8, 9, 10, 11, 12],
};

// Sample products for generateStaticParams
const productSlugs = [
  "new balance men's 530",
  "x-lows-tuscan",
  "x-lows-tiramisu",
  "x-lows-snow",
  "x-lows-hazelnut",
  "x-lows-greyscale",
  "x-lows-goblin",
  "x-lows-pumpkin",
  "x-lows-ghost",
  "x-lows-wasabi",
  "x-lows-flamingo",
  "x-lows-pistachio",
  "x-lows-blackcurrent",
];

// This function generates all the static paths at build time
export function generateStaticParams() {
  return productSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-32 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <div className="w-full">
              <div className="aspect-square relative mb-4">
                <Image
                  src={productData.images[0]}
                  alt={`${productData.name} - Image 1`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {productData.images.slice(0, 4).map((image, index) => (
                  <div key={`image-thumb-${index}`} className="aspect-square relative rounded-md overflow-hidden">
                    <Image
                      src={image}
                      alt={`${productData.name} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{productData.name}</h1>
              <p className="text-xl mt-2">₹ {productData.price}MRP</p>
              <p className="text-sm text-gray-600">inclusive of taxes</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Color: Green Corduroy</h3>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-green-700 border-2 border-black" />
                <div className="w-8 h-8 rounded-full bg-red-700" />
                <div className="w-8 h-8 rounded-full bg-blue-700" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Size (UK): Select a size</h3>
                <button className="text-sm underline">Size Chart</button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {productData.sizes.map((size) => (
                  <button
                    key={size}
                    className={`p-3 border rounded-md transition-all ${
                      !productData.availableSizes.includes(size)
                        ? "opacity-50 cursor-not-allowed"
                        : "border-gray-300 hover:border-black"
                    }`}
                    disabled={!productData.availableSizes.includes(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-sm mt-2">Only 10 Left</p>
              <p className="text-sm mt-1">For females, we recommend going one size smaller. E.g. If you are a UK 6, consider UK 5.</p>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors">
                ADD TO CART
              </button>
              <div className="flex gap-4">
                <button className="flex-1 btn-brand">
                  BUY NOW
                </button>
                <button className="flex-1 btn-brand-outline">
                  NOTIFY ME
                </button>
              </div>
              <p className="text-sm text-center">APPLY Giftcard to avail ₹999 off on your order</p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center gap-3 mb-3">
                <Truck size={20} />
                <div>
                  <h4 className="font-medium">Delivery Details</h4>
                  <p className="text-sm">Delivery between Monday - Thusday</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle size={20} />
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm">Free Shipping for all orders</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw size={20} />
                <div>
                  <h4 className="font-medium">Easy Return</h4>
                  <p className="text-sm">Free 7 day Return and Exchange</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="mb-4">
                <h3 className="text-base font-medium mb-2">How to take care of my sneakers?</h3>
                <p className="text-sm">
                  To keep your sneakers looking fresh, we recommend cleaning them with a soft brush and mild soap.
                  Avoid machine washing or exposing them to direct sunlight for extended periods.
                  For more detailed care instructions, please check our Care page.
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">What are product specifications?</h3>
                <div className="text-sm space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <p className="font-medium">Category:</p>
                    <p>{productData.specifications.category}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <p className="font-medium">Style Name:</p>
                    <p>{productData.specifications.style}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <p className="font-medium">Product Color:</p>
                    <p>{productData.specifications.color}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <p className="font-medium">Net quantity:</p>
                    <p>{productData.specifications.netQuantity}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <p className="font-medium">Maximum Retail Price:</p>
                    <p>{productData.specifications.retailPrice}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="mt-16 space-y-16">
          {productData.features.map((feature, index) => (
            <div
              key={`feature-${feature.title}`}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                <h3 className="text-sm font-medium uppercase mb-2">{feature.title}</h3>
                <h4 className="text-2xl font-bold uppercase mb-4">{feature.subtitle}</h4>
                <p className="text-gray-700">{feature.description}</p>
              </div>
              <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-16 py-16 bg-gray-100 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">OUR PHILOSOPHY</h2>
            <h3 className="text-xl font-bold mb-6">EXPERIMENTAL CHEFS</h3>
            <p className="mb-4">
              We pick out the most exceptional, high-quality ingredients and let them shine through our captivating concepts. Every Comet that leaves our universe to reach yours, epitomizes the thought, attention to detail and continuous effort that we pour into it.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 py-16 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">AS APPRECIATED BY OUR CUSTOMERS </h2>
          </div>

          {/* Yellow Banner */}
          <div className="bg-[#eae90e] py-10 mt-10">
            <div className="container-custom flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="bg-[#ff6b8b] px-6 py-2">
                <span className="font-bold uppercase text-xl">Never Shy</span>
              </div>
              <div>
                <span className="font-bold uppercase text-xl">Never Sorry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
