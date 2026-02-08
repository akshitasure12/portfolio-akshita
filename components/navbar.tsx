"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Moon,
  Sun,
  Menu,
  X,
  Home,
  User,
  GraduationCap,
  ChartNoAxesCombined,
  FileCode2,
  ContactRound,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useModeAnimation } from "@/hooks/useModeAnimation";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: ChartNoAxesCombined },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Projects", href: "#projects", icon: FileCode2 },
  { name: "Contact", href: "#contact", icon: ContactRound },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  const { ref: refDesktop, toggleSwitchTheme: toggleDesktopSwitchTheme } =
    useModeAnimation({
      duration: 750,
      globalClassName: "dark",
    });

  const { ref: refMobile, toggleSwitchTheme: toggleMobileSwitchTheme } =
    useModeAnimation({
      duration: 750,
      globalClassName: "dark",
    });

  const handleDesktopThemeToggle = async () => {
    await toggleDesktopSwitchTheme();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleMobileThemeToggle = async () => {
    await toggleMobileSwitchTheme();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = navItems.map((item) => item.name.toLowerCase());
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <nav className="w-full backdrop-blur-sm bg-background/80">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center h-16">

            {/* LOGO */}
            <a
              href="#home"
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#home")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {/* Light logo */}
              <img
                src="/logo-light.png"
                alt="Akshita Sure"
                className="h-20 md:h-20 block dark:hidden transition-transform hover:scale-105"
              />

              {/* Dark logo */}
              <img
                src="/logo-dark.png"
                alt="Akshita Sure"
                className="h-20 md:h-20 hidden dark:block transition-transform hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.slice(0, -1).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-md font-medium transition-colors hover:text-primary relative ${
                    activeSection === item.name.toLowerCase()
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {activeSection === item.name.toLowerCase() && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-primary"
                    />
                  )}
                  {item.name}
                </a>
              ))}

              <button
                ref={refDesktop}
                onClick={handleDesktopThemeToggle}
                className="p-2 rounded-full hover:bg-accent transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile Buttons */}
            <div className="md:hidden flex items-center">
              <button
                ref={refMobile}
                onClick={handleMobileThemeToggle}
                className="p-2 rounded-full hover:bg-accent transition-colors mr-2"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-10%" }}
              transition={{ duration: 0.4 }}
              className="md:hidden"
            >
              <div className="px-2 pt-6 pb-[56vh] space-y-4 bg-background/80">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: index * 0.08 }}
                  >
                    <a
                      href={item.href}
                      className={`block px-3 py-4 rounded-md text-base font-medium ${
                        activeSection === item.name.toLowerCase()
                          ? "text-primary bg-accent"
                          : "text-muted-foreground hover:text-primary hover:bg-accent"
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        document.querySelector(item.href)?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      <div className="flex gap-2 items-center">
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
