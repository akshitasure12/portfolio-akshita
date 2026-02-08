"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroBackground from "../hero-background";
import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";
// import { WeatherCard } from "@/components/weather/weather-card";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      {/* <WeatherCard /> */}

      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left">
            <h1 className="text-2xl md:text-5xl font-bold mb-1 text-blue-500 hover">
              Akshita Sure
            </h1>
            <h1 className="text-sm md:text-md font-normal md:font-medium mb-6">Enthusiastic Software Developer</h1>
            <p className="text-md md:text-lg text-muted-foreground mb-8">
              {/* Your code, your legacy! */}
              Engineering software that bridges ideas, people, and technology.
            </p>
            <div className="flex gap-4 sm:flex-row flex-col">
              <Button
                size="lg"
                className="group"
                asChild
              >
                <a
                  href="/resume.pdf"
                  download="Akshita_Sure_Resume.pdf"
                  className="flex items-center"
                >
                  View Resume
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                className="group bg-transparent text-default-foreground border-default-foreground/20 border-2 hover:bg-default-foreground/10"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact Me
                <User className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 ring-1 ring-blue-500/10 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full pointer-events-none" />
              <Image
                src="/images/me.jpg"
                alt="Akshita Sure"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-muted-foreground cursor-pointer"
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Scroll down
        </motion.div>
      </div>
    </section>
  );
}
