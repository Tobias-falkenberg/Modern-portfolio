"use client";

import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setSuccess("Message sent successfully!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setSuccess("Failed to send message.");
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-zinc-900"
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 blur-3xl -z-10 animate-float" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:gap-10">
        {/* LEFT */}
        <div className="lg:w-1/2 space-y-6 sm:space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug md:leading-tight dark:text-white">
            Let’s build products that
            <br />
            scale intelligently.
          </h2>

          <p className="text-base sm:text-lg text-black/70 dark:text-white/70">
            I enjoy collaborating with teams building impactful products,
            especially in AI, infrastructure, and scalable SaaS systems.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:sottojitr58@gmail.com"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg"
            >
              Send Email
            </a>

            <a
              href="https://www.linkedin.com/in/sottojit-roy"
              target="_blank"
              className="rounded-full border border-black/10 dark:border-white/10 px-6 py-3 text-sm font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="rounded-[32px] border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 p-8 backdrop-blur-2xl shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-3 text-black/70 dark:text-white/70">
              <p>
                <strong>Email:</strong> mdwashimahmed221@gmail.com
              </p>

              <p>
                <strong>Location:</strong> Remote
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-4"
            >
              <input
                type="text"
                required
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Your Name"
                className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-3"
              />

              <input
                type="email"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Your Email"
                className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-3"
              />

              <textarea
                required
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                placeholder="Message"
                className="w-full h-32 resize-none rounded-lg border border-black/10 dark:border-white/10 bg-white/90 dark:bg-white/10 px-4 py-3"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white font-semibold"
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {success && (
                <p className="text-sm text-cyan-500">
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}