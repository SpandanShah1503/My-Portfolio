"use client";

import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconHome,
  IconTerminal2,
  IconNewSection,
  IconExchange,
  IconBrandX,
  IconBrandGithub,
} from "@tabler/icons-react";

export function FloatingDockNav() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconWithGlow>
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        </IconWithGlow>
      ),
      href: "#home",
    },
    {
      title: "Products",
      icon: (
        <IconWithGlow>
          <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        </IconWithGlow>
      ),
      href: "#products",
    },
    {
      title: "Components",
      icon: (
        <IconWithGlow>
          <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        </IconWithGlow>
      ),
      href: "#components",
    },
    {
      title: "Changelog",
      icon: (
        <IconWithGlow>
          <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        </IconWithGlow>
      ),
      href: "#changelog",
    },
    {
      title: "Twitter",
      icon: (
        <IconWithGlow>
          <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        </IconWithGlow>
      ),
      href: "https://x.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconWithGlow>
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        </IconWithGlow>
      ),
      href: "https://github.com",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock items={links} />
    </div>
  );
}

function IconWithGlow({ children }) {
  return (
    <div className="group/btn relative h-full w-full">
      {children}
      <BottomGradient />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
export default FloatingDockNav;