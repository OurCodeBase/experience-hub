"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

type Experience = {
  title: string,
  company: string,
  period: string,
  responsibilities: string[],
  skills: string[]
}

const experiences: Experience[] = [
  {
    title: "Full Stack Developer Intern",
    company: "Sicuaura Global Pvt. Ltd.",
    period: "Dec 2025 - Mar 2026",
    responsibilities: [
      "Contributed to ERP and e-commerce platforms across 4 repositories, delivering 7k+ lines of production code and eliminating 1.5k+ lines of redundant code for better maintainability and code quality.",
      "Built responsive UI features with React and Tailwind CSS, improving efficiency using memoization techniques such as React.memo, useMemo, useCallback, and debouncing.",
      "Implemented RESTful APIs using structured Express architecture, including role-based authentication and authorization for secure user access and business logic management.",
      "Reduced API latency and database load using Redis caching, and containerized services including PostgreSQL, Redis, pgAdmin, and MongoDB with Docker for reproducible development and deployment environments."
    ],
    skills: ["Docker", "Redis", "PostgreSQL", "Prisma ORM", "Express.js", "React.js", "Redux", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Remote",
    period: "Jan 2025 - Sep 2025",
    responsibilities: [
      "Developed full-stack web applications for small businesses using React, Express.js, and Firebase.",
      "Delivered responsive dashboards, authentication systems, and REST APIs for client projects."
    ],
    skills: ["Express.js", "React.js", "BaaS", "NoSQL", "Firebase", "TypeScript", "Tailwind CSS"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
