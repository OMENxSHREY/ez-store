'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  images: {
    main: string;
    hover: string;
  };
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square relative overflow-hidden rounded-lg">
          <Image
            src={product.images.main}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="text-gray-600">₹{product.price}</p>
        </div>
        <button className="quick-add-btn flex items-center justify-center gap-1">
          <Plus size={16} /> QUICK ADD
        </button>
      </div>
    </div>
  );
};

export default ProductCard;