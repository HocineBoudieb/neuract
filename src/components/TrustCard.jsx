"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TrustCard = ({ brand, name, title }) => {
  return (
    <Card className=" mx-auto p-6 rounded-xl shadow-xl bg-gradient-to-r from-black via-gray-900 to-black text-white border border-gray-800 relative overflow-hidden mr-8">
      <div className="absolute inset-0 bg-opacity-30 bg-black rounded-xl" />
      <CardContent className="relative z-10 flex flex-col items-center text-center">
        {/* Brand Section */}
        <span className="px-4 py-1 text-sm font-medium bg-gray-700 rounded-full text-white mb-3">{brand}</span>
        
        {/* Name */}
        <h2 className="text-2xl font-semibold text-white">{name}</h2>
        
        {/* Title */}
        <p className="text-gray-400 text-sm mt-1">{title}</p>
      </CardContent>
    </Card>
  );
};

export default TrustCard;
