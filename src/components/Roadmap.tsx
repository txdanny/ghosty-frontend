"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Roadmap() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".roadmap-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const milestones = [
    {
      quarter: "Q1 2024",
      title: "Platform Launch",
      description:
        "Initial release of the NFT marketplace with core features including minting, buying, and selling NFTs.",
      icon: "🚀",
    },
    {
      quarter: "Q2 2024",
      title: "Community Features",
      description:
        "Introduction of social features, artist tools, and enhanced community engagement capabilities.",
      icon: "👥",
    },
    {
      quarter: "Q3 2024",
      title: "Mobile App Release",
      description:
        "Launch of our mobile application for iOS and Android platforms.",
      icon: "📱",
    },
    {
      quarter: "Q4 2024",
      title: "Marketplace Expansion",
      description:
        "Integration of multiple chains and introduction of advanced trading features.",
      icon: "🌐",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-[#05171a]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Roadmap
          </h2>
          <motion.div
            className="h-1 w-16 md:w-24 bg-gradient-to-r from-[#72d3f5] to-[#a5f7ff] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.3 }}
          />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#72d3f5]/20">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#72d3f5]"
              style={{ scaleY, transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-8 md:space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Desktop Time Indicator - Hidden on Mobile */}
                <div className="hidden md:block absolute top-8 left-[calc(50%_-_160px)] text-[#72d3f5] font-bold opacity-20 text-8xl -z-10">
                  {milestone.quarter}
                </div>

                <motion.div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-4 md:gap-8`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex items-center md:block ml-4 md:ml-0">
                    <motion.div
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#72d3f5] to-[#a5f7ff] p-[2px]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-full h-full rounded-full bg-[#05171a] flex items-center justify-center">
                        <motion.div
                          className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#72d3f5]"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Connecting Line */}
                    <motion.div
                      className={`hidden md:block absolute top-1/2 h-[2px] bg-gradient-to-r ${
                        index % 2 === 0
                          ? "left-full from-[#72d3f5] to-transparent"
                          : "right-full from-transparent to-[#72d3f5]"
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "3rem" }}
                      transition={{ delay: 0.3 }}
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`flex-1 ml-8 md:ml-0 md:w-[calc(50%-3rem)] roadmap-card`}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: index % 2 === 0 ? -50 : 50,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut",
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="relative group h-full"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Card Background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#72d3f5] to-[#a5f7ff] p-[1px] opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-full w-full bg-[#05171a] rounded-2xl" />
                      </div>

                      {/* Card Content */}
                      <div className="relative p-6 md:p-8">
                        {/* Mobile Quarter Badge */}
                        <div className="md:hidden mb-4">
                          <motion.div
                            className="bg-[#72d3f5]/20 text-[#72d3f5] font-bold px-4 py-2 rounded-full inline-block"
                            whileHover={{ scale: 1.05 }}
                          >
                            {milestone.quarter}
                          </motion.div>
                        </div>

                        <motion.div
                          className="text-2xl md:text-3xl mb-4"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {milestone.icon}
                        </motion.div>

                        <h3 className="text-xl md:text-2xl font-bold text-[#72d3f5] mb-3">
                          {milestone.title}
                        </h3>

                        <p className="text-[#72d3f5]/70 text-sm md:text-base">
                          {milestone.description}
                        </p>

                        {/* Hover Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                          style={{
                            background:
                              "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(114, 211, 245, 0.1) 0%, transparent 80%)",
                          }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
