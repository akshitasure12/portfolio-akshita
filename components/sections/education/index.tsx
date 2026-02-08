"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { EducationCard } from "./education-card";
import { GraduationCap, CalendarClock } from "lucide-react";

const education = [
  {
    degree: "B.Tech in CSE ( Computer Science and Engineering )",
    institution: "Indian Institute of Information Technology, Gwalior - Madhya Pradesh",
    year: "2023 - 2027",
    duration: "4 years",
    courses: ["Operating Systems", "Computer Networks", "Machine Learning", "Software Engineering", "Object Oriented Programming", "Data Structures and Algorithms", "Database Management System"],
    gpa: "8.87",
    icon: <GraduationCap />,
    dateIcon: <CalendarClock />,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="Academic background and qualifications"
        />

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {education.map((item, index) => (
              <EducationCard
                key={item.degree}
                {...item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}