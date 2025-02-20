"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Presentation } from "lucide-react";
import { Rambla } from "next/font/google";

const rambla = Rambla({
    subsets: ["latin"],
    weight: ["400", "700"],
})
const PresentationCard = ({
  imageUrl,
  title,
  tagline,
  description,
  ctaText,
  ctaLink,
}) => {
  return (
    <Card className="mx-auto max-w-5xl p-4 rounded-md bg-black/80 border border-white/20 hover:border-white/40 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
      <CardContent className="relative z-10">
        {/* Grid Layout: Text (Left) - Image (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Side: Text Content */}
          <div className="flex flex-col space-y-6 text-left">
            {/* Title */}
            <h2 className={`text-5xl text-white ${rambla.className}`}>
              {title}
            </h2>

            {/* Tagline */}
            <p className="text-xl text-gray-300">{tagline}</p>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed">
              {description}
            </p>

            {/* CTA Button */}
            <a
              href={ctaLink}
              className="mt-4 px-6 py-3 text-lg font-semibold text-white border border-white/20 rounded-lg hover:border-white/40 transition-all duration-300 w-1/2"
            >
              {ctaText}
            </a>
          </div>

          {/* Right Side: Image */}
          <div className="relative flex justify-center">
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={300}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PresentationCard;
