"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    icon: "⚛️",
    title: "FRONTEND",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Framer Motion",
    ],
  },

  {
    icon: "⚙️",
    title: "BACKEND & APIs",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Java",
      "Spring Boot",
      "GraphQL",
      "REST APIs",
    ],
  },

  {
    icon: "🧠",
    title: "AI & ML",
    skills: [
      "OpenAI",
      "LangChain",
      "PyTorch",
      "TensorFlow",
      "RAG Systems",
      "Vector Search",
    ],
  },

  {
    icon: "☁️",
    title: "DATABASE & CLOUD",
    skills: [
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Docker",
      "AWS",
      "GitHub Actions",
      "Kubernetes",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
    >
      {/* Background Mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute left-1/2 bottom-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p
            className="
              mb-4
              text-sm
              sm:text-base
              font-semibold
              tracking-[0.25em]
              text-cyan-500
            "
          >
            SKILLS
          </p>

          <h2
            className="
              max-w-5xl
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-[1.1]
              tracking-tight
            "
          >
            Technologies behind
            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-violet-500
                bg-clip-text
                text-transparent
              "
            >
              modern AI products.
            </span>
          </h2>
        </motion.div>

        {/* GRID */}

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden

                rounded-3xl
                md:rounded-[32px]

                border
                border-white/10

                bg-white/60
                dark:bg-white/[0.04]

                p-6
                sm:p-8
                lg:p-10

                backdrop-blur-2xl

                shadow-[0_20px_60px_rgba(0,0,0,.08)]

                transition-all
                duration-300
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

                  bg-gradient-to-br
                  from-cyan-500/5
                  via-blue-500/5
                  to-violet-500/5
                "
              />

              {/* TOP */}

              <div className="relative mb-6 md:mb-8 flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12

                    sm:h-14
                    sm:w-14

                    md:h-16
                    md:w-16

                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br
                    from-cyan-500
                    to-blue-600

                    text-2xl
                    md:text-3xl

                    shadow-lg
                  "
                >
                  {group.icon}
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      sm:text-xl
                      md:text-2xl
                      font-bold
                    "
                  >
                    {group.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      md:text-base
                      text-black/50
                      dark:text-white/50
                    "
                  >
                    Professional stack & tools
                  </p>
                </div>
              </div>

              {/* SKILLS */}

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    key={skill}
                    className="
                      rounded-full

                      border
                      border-black/10
                      dark:border-white/10

                      bg-black/[0.03]
                      dark:bg-white/[0.04]

                      px-4
                      py-2.5

                      text-sm
                      sm:text-base
                      lg:text-lg

                      font-medium

                      transition-all
                      duration-300

                      hover:border-cyan-500/40
                      hover:bg-gradient-to-r
                      hover:from-cyan-500
                      hover:to-blue-600
                      hover:text-white
                      hover:shadow-lg
                    "
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}