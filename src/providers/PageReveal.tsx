"use client";

import { motion } from "framer-motion";

export default function PageReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
      }}
    >
      {children}
    </motion.div>
  );
}