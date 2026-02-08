"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";

export function GithubCalendar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-center">
        <div className="h-40 w-full max-w-4xl rounded-lg bg-slate-200/50 dark:bg-slate-800/50 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-2xl md:text-2xl font-bold mb-8">
        Contribution <span className="text-blue-500">Calendar</span>
      </h2>

      <div className="w-full flex justify-center">
        <GitHubCalendar
          username="akshitasure12"
          blockSize={15}
          blockMargin={5}
          fontSize={14}
          colorScheme={theme === "dark" ? "dark" : "light"}
          theme={{
            light: ["#f1fbff", "#dbeafe", "#93c5fd", "#3b82f6", "#1e3a8a"],
            dark: ["#021028", "#08316a", "#1e40af", "#3b82f6", "#93c5fd"],
          }}
        />
      </div>
    </div>
  );
}
