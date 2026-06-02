"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function HomeSection() {
  const experienceItems = ["PatSnap", "Carousell", "ViSenze", "AWS", "OpenAI"];
  const metrics = [
    {
      value: "8+",
      label: "Years Experience",
    },
    {
      value: "6",
      label: "Global Organizations",
    },
    {
      value: "1M+",
      label: "Users Reached",
    },
    {
      value: "20+",
      label: "Production Systems",
    },
  ];
  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [28, -28]),
    {
      stiffness: 180,
      damping: 16,
      mass: 0.5,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-28, 28]),
    {
      stiffness: 180,
      damping: 16,
      mass: 0.5,
    }
  );

  const translateZ = useSpring(
    useTransform(mouseX, [-300, 300], [-40, 40]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const glowX = useSpring(mouseX);
  const glowY = useSpring(mouseY);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = heroRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-28 md:pt-32 pb-20 sm:pb-16 md:pb-24">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] animate-float" />
        <div className="absolute right-0 top-32 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[100px] animate-float" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px] animate-float" />
      </div>

      <Container>
        <div className="grid items-center gap-12 sm:gap-16 lg:gap-20 lg:grid-cols-2">
          {/* LEFT: Text and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              space-y-3
              md:space-y-6

              text-center
              lg:text-left

              w-full
              max-w-2xl
              mx-auto
              lg:mx-0
            "
          >
           <Badge
            variant="secondary"
            className="
              hidden md:flex

              mx-auto
              lg:mx-0

              w-fit
              max-w-[95vw]

              px-4
              sm:px-5
              md:px-6

              py-1.5
              sm:py-2
              md:py-2.5
              lg:py-3

              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl

              font-semibold

              whitespace-normal
              break-words
            "
          >
            ✦ Available for Senior AI Engineering Roles
          </Badge>

            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-[1.1]
                tracking-tight
              "
            >
              Building AI platforms, scalable systems,
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                and enterprise software used by millions.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-black/70 dark:text-white/70">
              Senior Full-Stack AI Engineer with 8+ years of experience
               delivering AI-powered SaaS platforms, marketplace systems,
                cloud infrastructure, and intelligent products across PatSnap, Carousell, ViSenze, and Red Dot Payment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#experience">View Experience</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </Link>
              </Button>
            </div>

            {/* Experience Across Badges */}
            <div className="mt-10 sm:mt-12">
              <p className="mb-3 sm:mb-4 text-base sm:text-lg md:text-xl uppercase tracking-[0.3em] text-black/40 dark:text-white/40">
                Built Products At
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {experienceItems.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="rounded-full px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base md:text-lg"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Hero Visual */}
          <motion.div
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="
              relative
              flex
              items-center
              justify-center
              min-h-[500px]
              lg:min-h-[650px]
              perspective-[2000px]
            "
          >
            {/* Massive Ambient Glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                w-[500px]
                h-[500px]
                lg:w-[700px]
                lg:h-[700px]
                rounded-full
                bg-gradient-to-r
                from-cyan-500/20
                via-blue-500/20
                to-violet-500/20
                blur-[140px]
              "
            />

            {/* Orbit Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[360px]
                h-[360px]
                lg:w-[560px]
                lg:h-[560px]
                rounded-full
                border
                border-cyan-400/20
              "
            />

            {/* Orbit Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[300px]
                h-[300px]
                lg:w-[470px]
                lg:h-[470px]
                rounded-full
                border
                border-violet-400/20
              "
            />

            {/* Orbit Ring 3 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[420px]
                h-[420px]
                lg:w-[650px]
                lg:h-[650px]
                rounded-full
                border
                border-blue-400/10
              "
            />

           <motion.div
            style={{
              rotateX,
              rotateY,
               z: translateZ,
              transformStyle: "preserve-3d",
            }}
            animate={{
              y: [-15, 15, -15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20"
          >
            <Image
              src="/images/holographic-tech-sphere.png"
              alt="Holographic Tech Sphere"
              width={2048}
              height={2048}
              priority
              className="
                w-[280px]
                sm:w-[360px]
                md:w-[450px]
                lg:w-[560px]
                xl:w-[620px]
                h-auto
                drop-shadow-[0_0_80px_rgba(59,130,246,.55)]
                pointer-events-none
                select-none
              "
            />
          </motion.div>

            {/* Particles */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-16
                left-12
                w-3
                h-3
                rounded-full
                bg-cyan-400
                blur-sm
              "
            />

            <motion.div
              animate={{
                y: [10, -10, 10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-28
                right-20
                w-2
                h-2
                rounded-full
                bg-violet-400
                blur-sm
              "
            />

            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-20
                left-16
                w-2
                h-2
                rounded-full
                bg-blue-400
                blur-sm
              "
            />

            <motion.div
              animate={{
                y: [8, -8, 8],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-16
                right-20
                w-3
                h-3
                rounded-full
                bg-cyan-400
                blur-sm
              "
            />
          </motion.div>
        </div>

        {/* Footer / Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 sm:mt-16 md:mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/50 dark:bg-white/[0.03] backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,.08)] py-6 sm:py-8 md:py-10"
        >
          <motion.div
            style={{
              x: glowX,
              y: glowY,
            }}
            className="
              absolute
              w-[700px]
              h-[700px]
              rounded-full
              bg-gradient-to-r
              from-cyan-500/20
              via-blue-500/20
              to-violet-500/20
              blur-[140px]
            "
          />
          <div className="grid md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
            {metrics.map((item, idx) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group"
              >
                <Card
                  className="
                    relative h-full
                    border border-black/5 dark:border-white/5
                    bg-white/50 dark:bg-white/[0.02]
                    backdrop-blur-xl
                    p-6 sm:p-8
                    text-center
                    transition-all duration-300
                    hover:shadow-[0_20px_60px_rgba(0,0,0,.08)]
                    dark:hover:shadow-[0_20px_60px_rgba(255,255,255,.03)]
                  "
                >
                  {idx !== 3 && (
                    <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1 bg-gradient-to-b from-transparent via-black/10 to-transparent dark:via-white/10 md:block" />
                  )}
                  <h3 className="
                    text-5xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-6xl
                    font-bold
                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-500
                    to-violet-500
                    bg-clip-text
                    text-transparent
                  ">
                    {item.value}
                  </h3>
                  <p
                    className="
                      mt-3

                      text-sm
                      sm:text-base
                      md:text-base

                      uppercase
                      tracking-[0.15em]

                      text-black/50
                      dark:text-white/50
                    "
                  >
                    {item.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}