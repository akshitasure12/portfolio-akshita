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
      description: "Developed and enhanced `nx-parallel`, a parallel computing backend for the Network Library in Python by adding embarassingly parallel algorithms ",
      skills: ["Joblib", "Python", "NetworkX","Parallel Computing"],
    },
  ];
  
  const data = [
    {
      title: experiences[0].title,
      content: (
        <div className="space-y-2">
          <span className="text-sm text-foreground font-medium">{experiences[0].date}</span>
          <h3 className="text-lg text-blue-500 dark:text-blue-400 font-medium ">{experiences[0].company}</h3>
          <span className="text-sm text-foreground font-medium">{experiences[0].employmentType}{' • '}{experiences[0].locationType}</span>
          
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground">{experiences[0].description}</p>
            <div className="flex flex-wrap gap-2">
              {experiences[0].skills.map((skill) => (
                <span key={skill} className="text-sm text-foreground bg-foreground/10 px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

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