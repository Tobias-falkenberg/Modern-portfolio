"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "PatSnap",
    role: "AI SaaS App Developer",
    location: "Singapore (Remote)",
    period: "2024 — Present",
    description:
      "Built scalable AI SaaS infrastructure, semantic search systems, and enterprise-grade LLM workflows for innovation intelligence platforms.",
    achievements: [
      "Improved semantic search relevance by 35%",
      "Reduced query latency by 30%",
      "Built scalable AI retrieval infrastructure",
    ],
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
  },

  {
    company: "Carousell",
    role: "SaaS Web Developer",
    location: "Singapore (Remote)",
    period: "2021 — 2024",
    description:
      "Developed scalable marketplace systems supporting recommendation engines, ranking systems, and high-volume user traffic.",
    achievements: [
      "Supported 1M+ monthly active users",
      "Improved CTR by 30%",
      "Reduced API latency by 35%",
    ],
    stack: [
      "React",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "AWS",
    ],
  },

  {
    company: "ViSenze",
    role: "AI Project Engineer",
    location: "Singapore (Remote)",
    period: "2020 — 2021",
    description:
      "Worked on AI visual search infrastructure, image classification systems, and enterprise API integrations.",
    achievements: [
      "Improved recommendation relevance by 25%",
      "Reduced inference latency by 40%",
      "Optimized enterprise AI APIs",
    ],
    stack: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Docker",
      "FastAPI",
    ],
  },

  {
    company: "Red Dot Payment",
    role: "Full Stack Developer",
    location: "Singapore",
    period: "2018 — 2020",
    description:
      "Built backend-heavy fintech infrastructure supporting secure payment systems and scalable transaction processing.",
    achievements: [
      "Improved deployment reliability",
      "Built secure payment APIs",
      "Optimized transaction processing systems",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Node.js",
      "AWS",
      "Docker",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-16"
        >
          <p className="mb-4 text-sm md:text-base uppercase tracking-[0.3em] text-cyan-500">
            Experience
          </p>

          <h2 className="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Building products across
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              AI, SaaS & Fintech.
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="
              absolute
              left-[12px]
              top-0
              hidden
              h-full
              w-[2px]
              bg-gradient-to-b
              from-cyan-500/60
              via-blue-500/40
              to-violet-500/60
              md:block
            "
          />

          <div className="space-y-10 md:space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  relative
                  grid
                  gap-6
                  md:grid-cols-[40px_1fr]
                "
              >
                {/* Timeline Dot */}
                <div className="relative hidden md:block">
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      top-6
                      h-6
                      w-6
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                      shadow-[0_0_25px_rgba(6,182,212,.6)]
                    "
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-black/10
                    dark:border-white/10
                    bg-white/50
                    dark:bg-white/[0.03]
                    p-6
                    sm:p-7
                    md:p-8
                    backdrop-blur-2xl
                    shadow-[0_20px_60px_rgba(0,0,0,.08)]
                  "
                >
                  {/* Hover Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      bg-gradient-to-r
                      from-cyan-500/5
                      via-blue-500/5
                      to-violet-500/5
                    "
                  />

                  {/* Top */}
                  <div className="relative flex flex-col gap-5 md:flex-row md:justify-between">
                    <div className="flex items-start gap-4">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          sm:h-14
                          sm:w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-r
                          from-cyan-500
                          to-blue-600
                          text-base
                          sm:text-lg
                          font-bold
                          text-white
                          shadow-xl
                        "
                      >
                        {item.company[0]}
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                          {item.company}
                        </h3>

                        <p className="mt-2 text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70">
                          {item.role}
                        </p>

                        <p className="mt-1 text-sm md:text-base text-black/45 dark:text-white/45">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    <div
                      className="
                        h-fit
                        rounded-full
                        border
                        border-cyan-500/20
                        bg-cyan-500/5
                        px-4
                        py-2
                        text-sm
                        md:text-base
                        font-medium
                        text-cyan-500
                      "
                    >
                      {item.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      relative
                      mt-6
                      md:mt-8
                      max-w-4xl
                      text-base
                      sm:text-lg
                      md:text-xl
                      leading-7
                      md:leading-8
                      text-black/70
                      dark:text-white/70
                    "
                  >
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="relative mt-6 md:mt-8 space-y-3">
                    {item.achievements.map((achievement) => (
                      <motion.div
                        whileHover={{ x: 5 }}
                        key={achievement}
                        className="flex items-center gap-4"
                      >
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />

                        <span className="text-sm sm:text-base md:text-lg text-black/75 dark:text-white/75">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="relative mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3">
                    {item.stack.map((tech) => (
                      <motion.div
                        whileHover={{
                          y: -3,
                          scale: 1.03,
                        }}
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/40
                          dark:bg-white/[0.04]
                          px-4
                          py-2
                          text-sm
                          md:text-base
                          font-medium
                          backdrop-blur-xl
                        "
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}