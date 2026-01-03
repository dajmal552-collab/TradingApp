'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[75dvh] overflow-hidden">
      <Image
        src="/bg.png" 
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-9xl mx-auto px-6 lg:px-8">
          <div className="max-w-7xl">
            <h1 className="text-8xl font-medium text-white leading-tight">
  Contact Us
</h1>

<p className="mt-6 text-3xl font-semibold text-gray-200">
  Get in contact with Moneta Markets
</p>

          </div>
        </div>
      </div>
    </section>
  );
}
