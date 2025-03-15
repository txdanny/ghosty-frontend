"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import ConnectButton from "@/components/ConnectButton";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Team", href: "#team" },
    { title: "Roadmap", href: "#roadmap" },
    { title: "T&C", href: "#terms" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`py-2 lg:py-3 px-6 lg:px-12 transition-all duration-200 ${
          scrolled
            ? "bg-black/20 backdrop-blur-sm md:w-[700px] w-full md:rounded-b-full rounded-b-none md:border border-b border-[#72d2f52c] "
            : "bg-black/20 backdrop-blur-sm md:mt-5 md:w-[700px] w-full md:rounded-full rounded-b-none md:border border-b border-[#72d2f52c]"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="relative w-12 h-12">
            {/* Main Logo Image */}
            <motion.div
              className="relative z-10 w-12 h-12 rounded-full overflow-hidden"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/">
                <Image
                  src="/image/logo.png"
                  alt="Logo"
                  width={100} // specify the width you want
                  height={100} // specify the height you want
                  className="object-cover"
                />
              </Link>
            </motion.div>

            {/* Rotating Ring */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-[calc(100%+8px)] h-[calc(100%+8px)] border-2 border-dashed border-[#72d3f5] rounded-full"
              style={{ translateX: "-50%", translateY: "-50%" }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Glowing Ring */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-full h-full rounded-full"
              style={{ translateX: "-50%", translateY: "-50%" }}
              animate={{
                boxShadow: [
                  "0 0 10px #72d3f5",
                  "0 0 20px #72d3f5",
                  "0 0 10px #72d3f5",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.div key={item.title} whileTap={{ scale: 0.95 }}>
                <Link
                  href={item.href}
                  className="text-white hover:text-[#72d3f5] transition-colors relative group"
                >
                  {item.title}
                  <motion.span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#72d3f5] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <div className="space-y-2">
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                  }
                  className="block w-6 h-0.5 bg-white"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-0.5 bg-white"
                />
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                  }
                  className="block w-6 h-0.5 bg-white"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 2000 }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="py-2 text-center"
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-[#72d3f5] transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default Header;
