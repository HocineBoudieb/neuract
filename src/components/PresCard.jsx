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
    <Card className="mx-auto max-w-5xl rounded-xl shadow-2xl bg-black relative overflow-hidden border border-transparent">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-80 rounded-xl" />

      <CardContent className="relative z-10 p-8">
        {/* Grid Layout: Text (Left) - Image (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Side: Text Content */}
          <div className="flex flex-col space-y-6 text-left">
            {/* Title */}
            <h2 className={`text-5xl text-white ${rambla.className} `}>
              {title}
            </h2>

            {/* Tagline */}
            <p className="text-xl text-gray-300">{tagline} </p>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed">
              {description}
            </p>

            {/* CTA Button */}
            <a
              href={ctaLink}
              className="mt-4 px-6 py-3 text-lg font-semibold text-white border border-gray-700 rounded-lg bg-gradient-to-r from-gray-900 to-black transition-all duration-300 hover:border-gray-500 hover:shadow-lg w-1/2"
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
