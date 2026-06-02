"use client";

import Image from "next/image";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    value: "8+",
    label: "Years Experience",
  },
  {
    value: "4",
    label: "Global Companies",
  },
  {
    value: "1M+",
    label: "Users Impacted",
  },
  {
    value: "35%",
    label: "Search Relevance Gain",
  },
];

const projects = [
{
id: "01",
title: "PatSnap",

role: "AI SaaS Application Developer",

category: "AI & Patent Intelligence • 2024-2026",

challenge:
  "Enterprise users needed faster access to relevant innovation and patent intelligence across massive datasets.",

solution:
  "Built LLM-powered semantic search, recommendation systems, vector retrieval infrastructure, and AI-assisted knowledge discovery workflows.",

impact: [
  "35% improvement in search relevance",
  "30% lower semantic query latency",
  "28% higher recommendation accuracy",
],

image: "/images/work/work-1.png",

stack: [
  "Python",
  "FastAPI",
  "OpenAI",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
],

github: "",
demo: "",
caseStudy: "/case-studies/patsnap",


},

{
id: "02",


title: "Carousell",

role: "SaaS Web Developer – Scalability",

category: "Marketplace Platform • 2021-2024",

challenge:
  "Marketplace growth required scalable search, recommendation, and transaction systems supporting millions of users.",

solution:
  "Built ranking systems, experimentation infrastructure, search optimization pipelines, and backend scalability improvements.",

impact: [
  "1M+ active users supported",
  "30% higher listing CTR",
  "35% faster response times",
],

image: "/images/work/work-2.png",

stack: [
  "React",
  "Node.js",
  "Redis",
  "PostgreSQL",
  "AWS",
],

github: "",
demo: "",
caseStudy: "/case-studies/carousell",


},

{
id: "03",


title: "ViSenze",

role: "AI Project Engineer",

category: "Computer Vision • 2020-2021",

challenge:
  "Enterprise clients needed scalable visual search integration across ecommerce platforms.",

solution:
  "Built API integrations, image classification pipelines, and optimized inference systems for visual product discovery.",

impact: [
  "45% faster client integration",
  "25% higher recommendation relevance",
  "40% faster inference performance",
],

image: "/images/work/work-3.png",

stack: [
  "Python",
  "TensorFlow",
  "PyTorch",
  "REST APIs",
  "Docker",
],

github: "",
demo: "",
caseStudy: "/case-studies/visenze",


},

{
id: "04",


title: "Red Dot Payment",

role: "Full-Stack Developer",

category: "Fintech Infrastructure • 2018-2020",

challenge:
  "Payment systems required secure transaction processing, billing workflows, and stable deployment pipelines.",

solution:
  "Developed payment gateway integrations, merchant onboarding systems, and backend services for financial operations.",

impact: [
  "Stable high-volume transaction processing",
  "Improved deployment reliability",
  "Secure fintech-grade infrastructure",
],

image: "/images/work/work-4.png",

stack: [
  "Java",
  "Spring Boot",
  "Node.js",
  "AWS",
  "Docker",
  "MySQL",
],

github: "",
demo: "",
caseStudy: "/case-studies/red-dot-payment",

}
];


export default function WorkSection() {
  return (
    <section id="work" className="relative overflow-hidden py-20 md:py-28">
      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-20 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <p className="mb-4 text-sm md:text-base tracking-[0.3em] text-cyan-500 uppercase">
            Professional Experience
          </p>

          <h2 className="max-w-5xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Building AI platforms, scalable systems,
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              and enterprise products used by millions. 
            </span>
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20 md:space-y-24">
          {projects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid items-center gap-12 md:gap-20 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE */}
                <motion.div
                  whileHover={{ rotateX: 3, rotateY: 3, y: -6 }}
                  className="group relative"
                >
                  <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />
                  <Card className="overflow-hidden rounded-[32px] border border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.15)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={800}
                      className="w-full transition-all duration-700 group-hover:scale-105"
                    />
                  </Card>
                </motion.div>

                {/* CONTENT */}
                <div className="space-y-6 md:space-y-8">
                  <div className="text-6xl md:text-7xl font-bold text-black/10 dark:text-white/10">
                    {project.id}
                  </div>

                  <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-500">
                    {project.category}
                  </div>

                  <h3 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-500 mb-2">
                      Role
                    </p>
                    <p className="font-semibold text-lg">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-500 mb-2">
                      Challenge
                    </p>
                    <p className="text-black/70 dark:text-white/70">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-500 mb-2">
                      Solution
                    </p>
                    <p className="text-black/70 dark:text-white/70">
                      {project.solution}
                    </p>
                  </div>
                </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <motion.div
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/10

                        bg-white/50
                        dark:bg-white/[0.04]

                        px-4
                        md:px-5

                        py-2

                        text-sm
                        md:text-base
                        lg:text-lg

                        font-medium

                        backdrop-blur-xl

                        transition-all
                      "
                    >
                      {item}
                    </motion.div>
                  ))}
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {project.impact.map((item) => (
                      <Card
                        key={item}
                        className="
                          rounded-2xl
                          border border-white/10
                          bg-white/50
                          dark:bg-white/[0.03]
                          backdrop-blur-xl
                          p-4 md:p-5
                        "
                      >
                        <CardContent className="p-0">
                          <p className="text-xs uppercase tracking-[0.25em] text-cyan-500">
                            Impact
                          </p>

                          <p className="mt-2 text-sm md:text-base lg:text-lg font-medium text-black/80 dark:text-white/80">
                            {item}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg"
                    >
                      View Project
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
} 