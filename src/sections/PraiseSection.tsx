"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Daniel Kim",
    role: "AI Product Lead",
    company: "PatSnap",
    avatar: "/images/avatars/avatar-1.png",
    quote:
      "Sottojit consistently delivered scalable AI systems with impressive technical precision and strong product intuition.",
  },
  {
    name: "Sarah Chen",
    role: "Engineering Manager",
    company: "Carousell",
    avatar: "/images/avatars/avatar-2.png",
    quote:
      "One of the most reliable engineers I’ve worked with for large-scale marketplace infrastructure.",
  },
  {
    name: "Michael Tan",
    role: "CTO",
    company: "ViSenze",
    avatar: "/images/avatars/avatar-3.png",
    quote:
      "Strong expertise in AI pipelines, backend architecture, and production deployment workflows.",
  },
  {
    name: "Emily Wong",
    role: "Senior Product Manager",
    company: "PatSnap",
    avatar: "/images/avatars/avatar-4.png",
    quote:
      "Excellent communication, technical leadership, and ability to ship impactful AI features quickly.",
  },
  {
    name: "David Lim",
    role: "Infrastructure Engineer",
    company: "Carousell",
    avatar: "/images/avatars/avatar-5.png",
    quote:
      "Helped optimize high-traffic systems and significantly improved infrastructure reliability.",
  },
  {
    name: "Aiko Yamamoto",
    role: "Product Designer",
    company: "ViSenze",
    avatar: "/images/avatars/avatar-6.png",
    quote:
      "A thoughtful engineer with strong attention to scalability, usability, and clean system design.",
  },
  {
    name: "Ryan Lee",
    role: "Backend Engineer",
    company: "Red Dot Payment",
    avatar: "/images/avatars/avatar-7.png",
    quote:
      "Delivered secure fintech backend systems with excellent engineering discipline.",
  },
  {
    name: "Olivia Tan",
    role: "AI Research Lead",
    company: "PatSnap",
    avatar: "/images/avatars/avatar-8.png",
    quote:
      "Deep understanding of LLM systems and semantic search architecture for enterprise AI products.",
  },
  {
    name: "James Park",
    role: "Cloud Architect",
    company: "Carousell",
    avatar: "/images/avatars/avatar-9.png",
    quote:
      "Strong collaborator across infrastructure, backend, and product engineering teams.",
  },
  {
    name: "Sophia Lin",
    role: "Head of Engineering",
    company: "ViSenze",
    avatar: "/images/avatars/avatar-10.png",
    quote:
      "Consistently shipped production-ready AI services with excellent scalability and stability.",
  },
];

export default function PraiseSection() {
  return (
    <section
      id="praise"
      className="relative overflow-hidden py-14 md:py-20"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/20 to-violet-500/10 blur-3xl animate-float" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <p className="mb-3 md:mb-4 text-xs sm:text-sm md:text-base tracking-[0.3em] text-cyan-500 uppercase">
            PRAISE
          </p>

          <h2 className="max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight">
            What people say
            <br />
            about my work.
          </h2>

          <p className="mt-3 md:mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-black/70 dark:text-white/70">
            Collaborating across AI, SaaS, fintech, and enterprise systems with
            teams worldwide.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
                rotateX: index % 2 === 0 ? 5 : -5,
                rotateY: index % 2 === 0 ? -5 : 5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                rotateY: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              whileHover={{
                rotateX: 3,
                rotateY: -3,
                scale: 1.03,
                y: -6,
              }}
              className="
                relative
                group
                rounded-[28px]
                border
                border-black/10
                dark:border-white/10

                bg-white/60
                dark:bg-white/[0.04]

                p-4 sm:p-5 md:p-6

                backdrop-blur-xl

                shadow-[0_15px_40px_rgba(0,0,0,0.08)]

                transition-all
              "
            >
              {/* GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[28px]

                  opacity-0
                  transition-opacity
                  duration-500

                  group-hover:opacity-100

                  bg-gradient-to-br
                  from-cyan-500/5
                  via-blue-500/5
                  to-violet-500/5
                "
              />

              {/* QUOTE */}
              <p
                className="
                  relative
                  z-10

                  text-sm sm:text-base md:text-base lg:text-lg

                  leading-6 sm:leading-7 md:leading-8

                  text-black/80
                  dark:text-white/80

                  font-medium
                "
              >
                “{item.quote}”
              </p>

              {/* USER INFO */}
              <div className="relative z-10 mt-4 sm:mt-5 md:mt-6 flex items-center gap-3 sm:gap-4">
                <div
                  className="
                    overflow-hidden
                    rounded-full

                    border
                    border-black/10
                    dark:border-white/10

                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    md:w-16
                    md:h-16
                  "
                >
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-black/60 dark:text-white/60">
                    {item.role}
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-black/40 dark:text-white/40">
                    {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}