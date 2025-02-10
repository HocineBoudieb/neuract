"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CommentCard = ({ username, date, comment }) => {
  return (
    <Card
      className="
        mx-auto p-6 rounded-xl shadow-xl
        bg-gradient-to-r from-black via-gray-900 to-black
        text-white border border-gray-800 relative overflow-hidden
        mr-8
        w-80 h-40         /* Mobile: less width (20rem) and more height (16rem) */
        sm:w-full sm:h-24 /* Screens ≥640px: wider and height auto */
      "
    >
      <div className="absolute inset-0 bg-opacity-30 bg-black rounded-xl" />
      <CardContent className="relative z-10 flex flex-col items-start text-start">
        {/* Username and Date */}
        <p className="text-sm font-medium text-white mb-2">
          {username} - {date}
        </p>

        {/* Comment */}
        <p className="text-sm text-gray-400 whitespace-pre-wrap">
          {comment}
        </p>
      </CardContent>
    </Card>
  );
};

export default CommentCard;

