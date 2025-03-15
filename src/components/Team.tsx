"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function Team() {
  const team = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/team/john.jpg",
    },
    {
      name: "Jane Smith",
      role: "Creative Director",
      image: "/team/jane.jpg",
    },
    {
      name: "Mike Johnson",
      role: "Lead Developer",
      image: "/team/mike.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".group");
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

  return (
    <section
      className="py-20 px-4 bg-[#05171a] relative overflow-hidden"
      id="team"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the team
          </h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-[#72d3f5] to-[#a5f7ff] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4"
          variants={containerVariants}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              {/* Main card container with glass effect */}
              <motion.div className="relative bg-black/5 backdrop-blur-lg rounded-2xl sm:rounded-[2rem] rounded-tl-lg p-6 sm:p-8 text-center overflow-hidden border-2 border-[#72d2f513]">
                {/* Profile image container */}
                <motion.div
                  className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 sm:mb-6"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Profile image */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#72d3f5]/30 to-[#a5f7ff]/30 backdrop-blur-sm">
                    <div className="w-full h-full bg-[#72d3f5]/20 transform hover:scale-110 transition-transform duration-500" />
                    <Image
                      src={"/image/logo.png"}
                      layout="fill"
                      alt="Avatar"
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content with hover effects */}
                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-[#a5f7ff] text-base sm:text-lg"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {member.role}
                </motion.p>

                {/* Hover spotlight effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(114, 211, 245, 0.15) 0%, transparent 50%)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
