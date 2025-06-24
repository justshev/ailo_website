"use client";
import Image from "next/image";

const logos = [
  "/logos/google.png",
  "/logos/github.png",
  "/logos/telu.png",
  "/logos/python.png",
];

export default function PartnerSlider() {
  const repeated = [...logos, ...logos, ...logos]; // ulang 3x

  return (
    <div className="relative overflow-hidden w-full h-30 slider">
      {/* Fade kiri */}

      {/* Track */}
      <div className="flex gap-12 animate-marquee whitespace-nowrap track">
        {repeated.map((logo, i) => (
          <Image
            key={i}
            src={logo}
            alt={`logo-${i}`}
            width={50}
            height={50}
            className="object-contain h-auto"
          />
        ))}
      </div>
    </div>
  );
}
