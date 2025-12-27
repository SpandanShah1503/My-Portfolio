"use client";

import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function HoverButton({ text = "Click Me" }) {
  return (
    <HoverBorderGradient
      as="button"
      containerClassName="rounded-full"
      className="bg-black text-white dark:bg-white dark:text-black flex items-center gap-2 px-6 py-3 text-sm font-medium"
    >
      {text}
    </HoverBorderGradient>
  );
}
