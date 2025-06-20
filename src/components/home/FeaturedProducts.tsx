"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";

// Product type definition
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

// Sample product data
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "New Balance men's 530",
    slug: "x-lows-tuscan",
    price: 8999,
    images: {
      main: "/images/nb530-5.jpg",
      hover: "https://ext.same-assets.com/2099767344/3542929440.jpeg",
    },
  },
  {
    id: "2",
    name: "New Balance Men's 327",
    slug: "x-lows-tiramisu",
    price: 6999,
    images: {
      main: "/images/nb327-1.jpg",
      hover: "https://ext.same-assets.com/2099767344/3039065202.jpeg",
    },
    isNew: true,
  },
  {
    id: "3",
    name: "New Balance 610v1",
    slug: "x-lows-snow",
    price: 10999,
    images: {
      main: "/images/nb610v1-3.jpg",
      hover: "https://ext.same-assets.com/2099767344/3039065202.jpeg",
    },
    isBestseller: true,
  },
  {
    id: "4",
    name: "New Balance RC42",
    slug: "x-lows-hazelnut",
    price: 8999,
    images: {
      main: "/images/nbrc42-1.webp",
      hover: "https://ext.same-assets.com/2099767344/3678575516.jpeg",
    },
  },
  {
    id: "5",
    name: "New Balance 574",
    slug: "x-lows-hazelnut",
    price: 9999,
    images: {
      main: "/images/nb574-1.jpg",
      hover: "https://ext.same-assets.com/2099767344/3678575516.jpeg",
    },
  },
  {
    id: "6",
    name: "New Balance BB550",
    slug: "x-lows-greyscale",
    price: 11099,
    images: {
      main: "/images/nbBB550-1.jpg",
      hover: "https://ext.same-assets.com/2099767344/3039065202.jpeg",
    },
  },
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

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/products/men-sneakers" className="btn-brand">
            Shop Men
          </Link>
          <Link href="/products/women-sneakers" className="btn-brand">
            Shop Women
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
