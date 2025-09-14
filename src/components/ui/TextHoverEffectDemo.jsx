import React from "react";
import { TextHoverEffect } from "./text-hover-effect";

export function TextHoverEffectDemo() {
  return (
    <div className="h-[50rem] w-[60rem] flex items-center justify-center">
      <TextHoverEffect text="Welcome" duration={1.2} />
    </div>
  );
}
