"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
// import IconCloud from "@/components/ui/icon-cloud";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import dynamic from "next/dynamic";

const IconCloud = dynamic(() => import("@/components/ui/icon-cloud"), {
  ssr: false,
});


export function AboutSection() {

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/akshitasure12",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/akshitasure/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:sureakshita23@gmail.com",
      label: "Email",
    },
  ];

  const slugs = [
    "python",
    "tensorflow",
    "pytorch",
    "scikitlearn",
    "pandas",
    "numpy",
    "jupyter",
    "c",
    "networkx",
    "cplusplus",
    "ocaml",
    "elixir",
    "javascript",
    "flask",
    "nodedotjs",
    "react",
    "phoenix",
    "typescript",
    "html5",
    "css3",
    "mysql",
    "express",
    "postgresql",
    "tailwindcss",
    "vercel",
    "postman",
    "docker",
    "git",
    "github",
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="love Problem Solving, Building, and Learning"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg">
            I&apos;m a full-stack developer who enjoys creating functional and user-friendly applications. I use modern web technologies to develop solutions that solve real problems.
            </p>
            <p className="text-lg text-muted-foreground">
            When I&apos;m not coding, I explore new technologies, stay updated with industry trends, and experiment with personal projects to apply what I&apos;ve learned.
            </p>
            <div className="flex gap-4 py-4 justify-center md:justify-start">
              
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center justify-center"
                >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5 hover:scale-110 transition-transform" aria-hidden="true" />
                    </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <IconCloud iconSlugs={slugs} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}