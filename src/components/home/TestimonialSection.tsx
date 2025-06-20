"use client";

import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Shrey.",
    text: "Such unique colourways Ez Store brings out, I couldn't stop at one and am looking for more now. Not to forget the comfort and cushioning it provides is unmatched!",
    rating: 5,
  },
  {
    id: "2",
    name: "Sid.",
    text: "I really liked the colours on these shoes, they seemed easy to style. Plus I got a lot of compliments on these! It is a worthy buy",
    rating: 5,
  },
  {
    id: "3",
    name: "Ishan.",
    text: "The shoes exceeded my expectations after i saw them in hand. I saw them on Instagram and it exceeded my expectations as a product.",
    rating: 5,
  },
  {
    id: "4",
    name: "Krish.",
    text: "I love how it fits and has a unique appeal, definitely not gonna feel shy or sorry while buying them again.",
    rating: 5,
  },
  {
    id: "5",
    name: "Thanos.",
    text: "Great combination of style and comfort. Trumps a lot of the other brands I've worn. Excited to keep adding Comets to my wardrobe.",
    rating: 5,
  },
  {
    id: "6",
    name: "Shikharr C.",
    text: "Love the way they look and fit. I got my first pair of comets a few months back and loved them so much that I ended up buying another as well as gifted my wife a pair as well.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold uppercase">What're They Saying?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="border shadow-sm rounded-lg p-6"
            >
              <div className="flex items-center mb-3">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={`star-${testimonial.id}-${i}`} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">These are just beautiful!</h3>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex items-center justify-between">
                <p className="font-medium">{testimonial.name}</p>
                <div className="w-6 h-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-[#eae90e] py-10">
        <div className="container-custom flex flex-col md:flex-row items-center justify-center">
          <div className="bg-[#ff6b8b] px-6 py-2 md:mr-4 mb-4 md:mb-0">
            <span className="font-bold uppercase text-xl">Good Shoes</span>
          </div>
          <div>
            <span className="font-bold uppercase text-xl">Will Take You To Good Places</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
