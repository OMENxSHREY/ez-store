import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: {
    main: string;
    hover: string;
  };
  isNew?: boolean;
  isBestseller?: boolean;
}

const products: Product[] = [
  {
    id: "w1",
    name: "New Balance Men's 327",
    slug: "x-lows-blush",
    price: 6999,
    images: {
      main: "/images/nb327-1.jpg",
      hover: "https://ext.same-assets.com/2099767344/3542929440.jpeg",
    },
    isNew: true,
  },
  {
    id: "w2",
    name: "New Balance 610v1",
    slug: "x-lows-lavender",
    price: 10999,
    images: {
      main: "/images/nb610v1-3.jpg",
      hover: "https://ext.same-assets.com/2099767344/3039065202.jpeg",
    },
    isBestseller: true,
  },
  {
    id: "w3",
    name: "New Balance RC42 X Silver",
    slug: "x-lows-pearl",
    price: 8999,
    images: {
      main: "/images/nbrc42womens-1.jpg",
      hover: "https://ext.same-assets.com/2099767344/3039065202.jpeg",
    },
  },
  {
    id: "w4",
    name: "New Balance BB550 X Red",
    slug: "x-lows-rose",
    price: 11099,
    images: {
      main: "/images/nbBB550womens-1.jpg",
      hover: "https://ext.same-assets.com/2099767344/3678575516.jpeg",
    },
  }
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card">
      <Link href={`/products/${product.slug}`}>
        <div className="product-card-image-container aspect-square relative mb-3">
          <Image
            src={product.images.main}
            alt={product.name}
            fill
            className="product-card-image object-cover"
          />
          <Image
            src={product.images.hover}
            alt={`${product.name} hover`}
            fill
            className="product-card-image object-cover opacity-0 group-hover:opacity-100 absolute inset-0 transition-opacity duration-500"
          />
          {product.isNew && (
            <div className="absolute top-2 right-2 bg-primary px-2 py-1 text-xs font-semibold">
              NEW LAUNCH!
            </div>
          )}
          {product.isBestseller && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold">
              BESTSELLER
            </div>
          )}
        </div>
      </Link>
      <div className="product-card-details">
        <h3 className="text-base font-medium">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="text-sm">₹ {product.price}MRP</p>
        <p className="text-xs text-gray-600">inclusive of taxes</p>
      </div>
      <button className="quick-add-btn flex items-center justify-center gap-1">
        <Plus size={16} /> QUICK ADD
      </button>
    </div>
  );
};

export default function WomenSneakers() {
  return (
    <div className="pt-32 pb-16">
      <div className="relative w-full" style={{ height: '469px' }}>
        <Image
          src="/images/women-banner.jpg"
          alt="Women's Sneakers Collection"
          width={1920}
          height={469}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333]">Women's Collection</h1>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Filter</h3>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium mb-3">Size (UK)</h4>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
                    <button
                      key={size}
                      className="border rounded p-2 text-sm hover:border-black"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-medium mb-3">Style</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="style-alter"
                    className="mr-2"
                  />
                  <label htmlFor="style-alter" className="text-sm">
                    Alter (5 products)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="style-comet-x"
                    className="mr-2"
                  />
                  <label htmlFor="style-comet-x" className="text-sm">
                    Ez store X (6 products)
                  </label>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-medium mb-3">Availability</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="in-stock"
                    className="mr-2"
                  />
                  <label htmlFor="in-stock" className="text-sm">
                    In stock (5 products)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="out-of-stock"
                    className="mr-2"
                  />
                  <label htmlFor="out-of-stock" className="text-sm">
                    Out of stock (0 products)
                  </label>
                </div>
              </div>
            </div>

            <button className="text-sm text-black underline">
              Remove all
            </button>
          </div>

          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm">
                <span className="font-medium">{products.length} products</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm">View</span>
                <button className="p-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}