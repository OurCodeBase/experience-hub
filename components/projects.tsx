"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

type Project = {
  title: string,
  description: string,
  image: string,
  tags: string[],
  demoUrl: string,
  githubUrl?: string,
  features: string[],
}

const projects: Project[] = [
  {
    title: "Chrome Takeout Analyzer",
    description:
      "Take a research or analysis of your chrome usage, visualize history through graphs.",
    image: "/chrome-takeout-analyzer.jpeg",
    tags: ["TypeScript", "React.js", "Preact.js", "Tailwind CSS", "GitHub Actions"],
    demoUrl: "https://chrome-takeout-analyzer.netlify.app/",
    githubUrl: "https://github.com/OurCodeBase/chrome-takeout-analyzer",
    features: [
      "Visualize your browsing activity over time with interactive graphs.",
      "Easily exclude sensitive browsing data",
      "Domain frequency analysis to identify most visited websites",
      "Futuristic hacker-themed user interface",
      "100% client-side data processing and open-source trust.",
    ],
  },
  {
    title: "Gana4u - HQ 320KBPS MP3 Music",
    description:
      "A modern and dynamic high quality 320kbps mp3 downloader.",
    image: "/gana4u.online.jpg",
    tags: ["Express.js", "Preact.js", "JWT", "MySQL", "PostgreSQL", "MariaDB", "Google API"],
    demoUrl: "https://gana4u.online/",
    features: [
      "Access premium quality music for free.",
      "Explore or search poplular music albums with dynamic search capablities.",
    ]
  },
  {
    title: "code-editor",
    description:
      "A terminal based full-fleged ide extended by neovim.",
    image: "/code-editor.jpeg",
    tags: ["Lua", "Neovim", "Git", "GitHub", "Documentation"],
    demoUrl: "https://github.com/OurCodeBase/code-editor",
    githubUrl: "https://github.com/OurCodeBase/code-editor",
    features: [
      "⚡ A lightning-fast and highly efficient ide, offering a seamless coding experience without compromising on performance.️",
      "🎉 Supports auto-completions on over 80+ modern languages and almost all popular frameworks.",
      "⚔ Cross platform supported so you can code on any platform.",
      "🌩️ Highly portable offering a full-fledged ide even on your android.",
    ],
  },
  {
    title: "bash-sdk",
    description:
      "A bash library to create standalone scripts.",
    image: "/bash-sdk.jpeg",
    tags: ["Bash Scripting", "Linux", "GitLab", "VitePress", "GitLab CI/CD"],
    demoUrl: "https://ourcodebase.gitlab.io/bashsdk-docs/",
    githubUrl: "https://github.com/OurCodeBase/bash-sdk",
    features: [
      "OOPS like code 💎",
      "Module based code 🗂️",
      "Similar functions to python 🐍",
      "Standalone script creation 📔",
    ]
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
