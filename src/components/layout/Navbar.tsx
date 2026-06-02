"use client";

import { useState } from "react";
import Link from "next/link";

import Container from "../shared/Container";
import ThemeToggle from "../shared/ThemeToggle";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

const navItems = [
  "About",
  "Work",
  "Experience",
  "Skills",
  "Praise",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  return (
    <header className="fixed top-3 md:top-4 left-0 right-0 z-50">
      <Container>
        <div
          className="
            rounded-2xl md:rounded-3xl
            border
            border-black/10
            dark:border-white/10
            bg-white/75
            dark:bg-black/55
            backdrop-blur-2xl
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          "
        >
          <nav
            className="
              flex
              items-center
              justify-between
              h-14
              md:h-16
              px-3
              md:px-6
            "
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavigation(e, "home")}
              className="
                flex
                items-center
                justify-center
                h-9
                w-9
                md:h-10
                md:w-10
                rounded-xl
                bg-gradient-to-br
                from-cyan-500
                via-blue-500
                to-violet-500
                text-xs md:text-base
                font-bold
                text-white
                shadow-lg
                cursor-pointer
              "
            >
              MW
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                    relative
                    text-base md:text-lg lg:text-xl
                    font-medium
                    text-black/70 dark:text-white/70
                    transition-all
                    duration-300
                    hover:text-black dark:hover:text-white
                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-current
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Mobile Menu */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="md:hidden h-10 w-10 rounded-xl"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="
                    w-[280px] sm:w-[320px]
                    border-l
                    bg-background/95
                    backdrop-blur-2xl
                  "
                >
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Mobile navigation links
                  </SheetDescription>

                  <div className="mt-8">
                    <a
                      href="#home"
                      onClick={(e) => handleNavigation(e, "home")}
                      className="
                        flex items-center justify-center
                        h-14 w-14 rounded-2xl
                        bg-gradient-to-br
                        from-cyan-500
                        via-blue-500
                        to-violet-500
                        text-lg
                        font-bold
                        text-white
                        cursor-pointer
                      "
                    >
                      MW
                    </a>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-3">
                      {navItems.map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          onClick={(e) => handleNavigation(e, item.toLowerCase())}
                          className="
                            rounded-2xl
                            border
                            px-5 py-4
                            text-base
                            font-medium
                            bg-background/50
                            hover:bg-accent hover:translate-x-1
                            transition-all
                          "
                        >
                          {item}
                        </a>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}