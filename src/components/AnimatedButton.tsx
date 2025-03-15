"use client";

import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group px-8 py-3 rounded-full overflow-hidden ${className}`}
      onClick={onClick}
    >
      {/* Gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#72d3f5] via-[#a5f7ff] to-[#72d3f5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Base background */}
      <div className="absolute inset-0 bg-[#022632] group-hover:bg-opacity-90 transition-all duration-300" />

      {/* Glowing border effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-[#72d3f5] to-[#a5f7ff] rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Button content */}
      <div className="relative flex items-center gap-2">
        <span className="text-white font-semibold">{children}</span>

        {/* Animated arrow */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={{ x: -5 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </motion.svg>
      </div>

      {/* Particle effects */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-[#72d3f5] rounded-full"
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: [0, (index - 1) * 30],
            y: [0, (Math.random() - 0.5) * 20],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.button>
  );
};

export default AnimatedButton;
