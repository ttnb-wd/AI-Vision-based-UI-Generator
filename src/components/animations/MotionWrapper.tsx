"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function MotionWrapper({
  children,
  className,
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}