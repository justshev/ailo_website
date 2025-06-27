"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

interface AnimatedOnScrollProps {
  children: React.ReactNode;
}

export default function AnimatedOnScroll({ children }: AnimatedOnScrollProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // animasi hanya sekali
    threshold: 0.2, // 20% elemen terlihat
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
