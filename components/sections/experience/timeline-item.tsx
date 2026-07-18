"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

export function TimelineItem() {

  const experiences = [
    {
      title: "Google Summer of Code Contributor",
      company: "NumFOCUS",
      date: "May 2025 - August 2025",
      employmentType: "Internship",
      locationType: "Remote",
      description:
        ["Developed and enhanced `nx-parallel`, a parallel computing backend for the Network Library in Python by adding embarassingly parallel algorithms ",
        "Maintainer @nx-parallel",],
      skills: ["Joblib", "Python", "NetworkX", "Parallel Computing"],
    },
    {
      title: "Systems Intern",
      company: "D.E. Shaw India Private Limited",
      date: "May 2026 - August 2026",
      employmentType: "Internship",
      locationType: "Onsite",
      description:[
        "Designed and developed real-time LLM-powered transcription, with live Q&A ability, through a headless bot architecture for Webex meetings.",
        "Engineered low-latency audio ingestion pipelines using WebRTC and the Web Audio API to stream meeting audio for real-time speech recognition.",
        "Leveraged Redis for transient state management and deployed scalable Kubernetes infrastructure supporting 50+ Webex concurrent meetings.",
      ],
      skills: ["React", "FastAPI", "Redis Streams", "Microsoft SQL Server", "Kubernetes"],
    },
  ];
  
  const data = experiences.map((experience) => ({
    title: experience.title,
    content: (
      <div className="space-y-2">
        <span className="text-sm text-foreground font-medium">
          {experience.date}
        </span>

        <h3 className="text-lg text-blue-500 dark:text-blue-400 font-medium">
          {experience.company}
        </h3>

        <span className="text-sm text-foreground font-medium">
          {experience.employmentType} • {experience.locationType}
        </span>

        <div className="flex flex-col gap-2">
          {Array.isArray(experience.description) ? (
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {experience.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">{experience.description}</p>
          )}

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="text-sm text-foreground bg-foreground/10 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="relative pb-12 last:pb-0"
    >
      <Timeline data={data} />
    </motion.div>
  );
}