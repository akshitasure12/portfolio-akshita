"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "./contact-form";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/akshitasure12",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/akshitasure/",
    label: "LinkedIn",
  },
  {
    icon: SiMedium,
    href: "https://medium.com/@akshitasure",
    label: "Medium",
  },
  {
    icon: FaEnvelope,
    href: "mailto:sureakshita23@gmail.com",
    label: "Email",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Contact" subtitle="Let's work together" />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Get in Touch</h3>

            <p className="text-muted-foreground">
              I&apos;m always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to drop me a message!
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 rounded-full bg-accent text-muted-foreground hover:text-white hover:bg-accent/80 transition-all"
                >
                  <link.icon className="h-5 w-5 hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}