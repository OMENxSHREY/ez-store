import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="pt-32 pb-16">
      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">OUR PHILOSOPHY</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">CRAFTSMANSHIP</h2>
            <p className="text-lg mb-6">
              Comet is a homegrown, lifestyle sneaker brand. From the sole to the final shoe, stellar
              craftsmanship is at the forefront of our philosophy. Every Comet that leaves our universe to
              reach yours, epitomizes the thought, attention to detail and continuous effort that we put into
              it.
            </p>
            <p className="text-lg italic mb-6">
              We think of ourselves as experimental chefs, who pick out exceptional ingredients and let
              them shine through captivating concepts, all while upholding the highest quality and thus
              achieving the perfect balance.
            </p>
            <p className="text-lg">
              And, we don&apos;t mind the work. Because at the end of the day, we just want to leave a mark as bright as a comet streaking across the night sky.
            </p>
            <div className="mt-10">
              <Link href="/craftsmanship" className="btn-brand">
                KNOW MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ethos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://ext.same-assets.com/2099767344/1340820203.jpeg"
                  alt="Comet Ethos"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">OUR ETHOS</h2>
              <h3 className="text-3xl font-bold mb-6">NEVER SHY, NEVER SORRY</h3>
              <p className="mb-4">
                We marvel at Space - its stars, planets, and the mighty sun radiate magnificence. Yet, in space, it is routine that rules. Planets orbit predictably and stars twinkle in silence, casting a monotonous aura over the cosmos. Amidst this repetitiveness, emerges an object as an unpredictable disruptor, blazing down its own path through the darkness - a COMET.
              </p>
              <p className="mb-4">
                Unstoppable and awe-inspiring, it transforms the night sky into a spectacle of wonder. Its existence is a reminder that breaking away from the ordinary can sometimes be extraordinary. It is a giant finger to the universe&apos;s rules of conformity and obedience.
              </p>
              <p className="font-bold">
                It is Never Shy, Never Sorry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-3">OUR TEAM</h2>
              <h3 className="text-3xl font-bold mb-6">NOTE FROM THE FOUNDERS</h3>
              <p className="mb-4">
                We have done the rounds in the corporate world. Valuable experiences indeed, but they never really got us going. Both of us got sucked in by the excitement of returning to India from Chicago and Boston to start something new, something we were super passionate about: <strong>sneakers.</strong>
              </p>
              <p className="mb-4">
                Many told us not to. Many still do. And many will continue to. But we both know sneakers bring a different energy out of us - a fire that we only dreamed of during our early days. For us, Comet is a brand born solely out of our passion.
              </p>
              <p className="mb-4">
                We aim to push the envelope on design, on storytelling and on craftsmanship. Join us, support us, egg us on as we create the sneaker brand that India has long waited for!
              </p>
              <p className="font-bold">
                - Utkarshd & Dishant
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://ext.same-assets.com/2099767344/3039065202.jpeg"
                  alt="Comet Founders"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Banner */}
      <section className="bg-[#eae90e] py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-[#ff6b8b] px-6 py-2">
              <span className="font-bold uppercase text-xl">Good Shoes</span>
            </div>
            <div>
              <span className="font-bold uppercase text-xl">Will Take You To Good Places</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
