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
    title: "Freelance Full Stack Developer",
    company: "Remote",
    period: "Jan 2025 - Present",
    responsibilities: [
      "Building easy to maintain, modern (dynamic), responsive and reliable business solutions.",
      "Established strong relationships with clients through clear communication and high-quality work on time and within budget."
    ],
    skills: ["React.js", "BaaS", "Github Actions", "CI/CD", "Embedded.js", "Nest.js", "PWA", "React Native", "NoSQL"]
  },
  {
    title:  "Microsoft Learn Ambassadors Workshop",
    company: "Microsoft",
    period: "Jun 2024 - Jul 2024",
    responsibilities: [
      "Working on web applications and deployements on Azure.",
      "Building RESTful APIs in python and deploy it to Azure.",
    ],
    skills: ["React", "Azure", "Python", "RESTful API", "CI/CD"],
  },
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
