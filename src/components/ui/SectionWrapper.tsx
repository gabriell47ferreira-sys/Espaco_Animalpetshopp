"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "cream" | "warm" | "green" | "dark";
  noPadding?: boolean;
}

const bgClasses: Record<string, string> = {
  white: "bg-white",
  cream: "bg-[#fff7ed]",
  warm:  "bg-[#fff7ed]",
  green: "bg-[#0c1017]",
  dark:  "bg-[#111827]",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

// ease precisa ser tupla [number,number,number,number] para o tipo Easing do Framer Motion
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export default function SectionWrapper({
  children,
  className,
  id,
  bg = "cream",
  noPadding = false,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        bgClasses[bg],
        !noPadding ? "section-padding" : undefined,
        className
      )}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </section>
  );
}
