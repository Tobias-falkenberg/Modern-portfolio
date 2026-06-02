"use client";

import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const cards = [
  {
    title: "Focus Areas",
    items: [
      "AI SaaS Systems",
      "LLM Applications",
      "Enterprise Infrastructure",
    ],
  },
  {
    title: "Core Stack",
    items: [
      "React / Next.js",
      "Python / FastAPI",
      "Docker / AWS",
    ],
  },
  {
    title: "Impact",
    items: [
      "8+ Years Experience",
      "1M+ Active Users",
      "40% Optimization",
    ],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden

        py-16
        sm:py-20
        md:py-24
      "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-20 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <Container>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <span
            className="
              text-sm
              sm:text-base
              font-semibold
              uppercase
              tracking-[0.35em]
              text-cyan-500
            "
          >
            ABOUT
          </span>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="
                max-w-4xl

                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl

                font-bold
                leading-[1.05]
                tracking-tight
              "
            >
              Building scalable

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
                AI products
              </span>

              and enterprise systems.
            </h2>

            <p
              className="
                mt-6
                max-w-2xl

                text-base
                sm:text-lg
                md:text-xl

                leading-7
                sm:leading-8

                text-black/80
                dark:text-white/80
              "
            >
              I specialize in building scalable AI SaaS platforms,
              intelligent infrastructure, and modern digital products
              focused on performance, reliability, and practical
              business impact.
            </p>

            <p
              className="
                mt-5
                max-w-2xl

                text-base
                sm:text-lg
                md:text-xl

                leading-7
                sm:leading-8

                text-black/70
                dark:text-white/70
              "
            >
              During the last 8+ years, I have collaborated with
              global teams across AI, fintech, enterprise SaaS,
              and marketplace ecosystems, delivering systems used
              by millions of users worldwide.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <motion.a
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="/resume.pdf"
                target="_blank"
                className="
                  inline-flex
                  items-center

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600

                  px-7
                  py-3.5

                  text-base
                  font-semibold

                  text-white

                  shadow-[0_15px_30px_rgba(6,182,212,.25)]
                "
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-5">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -6,
                }}
              >
                <Card
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-[32px]

                    border
                    border-black/10
                    dark:border-white/10

                    bg-white/70
                    dark:bg-white/[0.04]

                    p-6
                    sm:p-8

                    backdrop-blur-2xl

                    shadow-[0_15px_40px_rgba(0,0,0,.06)]

                    transition-all
                    duration-300

                    hover:shadow-[0_20px_60px_rgba(0,0,0,.08)]
                    dark:hover:shadow-[0_20px_60px_rgba(255,255,255,.03)]
                  "
                >
                  {/* Glow */}
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

                  <h3
                    className="
                      relative

                      text-sm
                      font-semibold

                      uppercase
                      tracking-[0.25em]

                      text-cyan-500
                    "
                  >
                    {card.title}
                  </h3>

                  <div className="relative mt-5 space-y-4">
                    {card.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-4"
                      >
                        <div
                          className="
                            h-3
                            w-3

                            rounded-full

                            bg-gradient-to-r
                            from-cyan-500
                            to-blue-500
                          "
                        />

                        <span
                          className="
                            text-base
                            sm:text-lg

                            font-semibold

                            text-black/85
                            dark:text-white/85
                          "
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}