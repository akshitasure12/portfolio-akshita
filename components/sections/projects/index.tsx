"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "./project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Previously on Netflix",
    type: "Personal",
    description: "A web platform that analyzes Netflix viewing history to generate personalized insights and recommendations",
    image: "/images/projects/project1.webp",
    tags: ["Python", "Flask", "JavaScript"],
    githubUrl: "https://github.com/akshitasure12/previously-on-netflix",
  },
  {
    title: "Blackhole Simulator",
    type: "Personal",
    description: "Interactive 3D simulator of photon paths and accretion-disk appearance around a Schwarzschild and Kerr black hole.",
    image: "/images/projects/project2.webp",
    tags: ["Rust", "OpenGL"],
    githubUrl: "https://github.com/akshitasure12/blackhole",
  },
  {
    title: "Kiosk",
    type: "Personal",
    description: "Built a RAG-based multilingual AI kiosk running on Raspberry Pi 4 using quantized TinyLlama 1.1B.",
    image: "/images/projects/project3.webp",
    tags: ["Python", "FastAPI", "TinyLlama", "pgvector"],
    githubUrl: "https://github.com/akshitasure12/RAG-based-koisk",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 bg-accent/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Some of my recent work"
        />

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={`${project.title}-${index}`} className="md:basis-1/2 lg:basis-1/3">
                <ProjectCard
                  {...project}
                  index={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}