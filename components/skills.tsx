"use client"

import { motion } from "framer-motion"
import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiMariadb, SiMysql, SiPreact, SiTypescript, SiPostgresql, SiExpress, SiNestjs, SiEjs, SiPython, SiNeovim, SiGithubactions, SiDebian, SiFedora, SiLangchain } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill, RiFirebaseLine, RiSupabaseLine, RiGeminiFill, RiClaudeFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { PiCodesandboxLogoLight } from 'react-icons/pi'

const skillCategories = [
  {
    title: "Coding Language",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-sky-400" /> },
      { name: "Python", icon: <SiPython className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-violet-400" /> },
    ]
  },
  {
    title: "Front End",
    skills: [
      { name: "Embedded.js", icon: <SiEjs className="text-rose-500" /> },
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "Preact.js", icon: <SiPreact className="text-violet-500" /> },
      { name: "Next.js", icon: <RiNextjsFill className="text-black dark:text-white" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
    ],
  },
  {
    title: "Back End",
    skills: [
      { name: "Express.js", icon: <SiExpress className="text-black dark:text-white" /> },
      { name: "Nest.js", icon: <SiNestjs className="text-pink-500" /> },
      { name: "Firebase", icon: <RiFirebaseLine className="text-yellow-500" /> },
      { name: "Supabase", icon: <RiSupabaseLine className="text-emerald-500" /> },
      { name: "MCP", icon: <PiCodesandboxLogoLight className="text-black dark:text-white" /> },
      { name: "LangChain", icon: <SiLangchain className="text-emerald-500" /> },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MariaDB", icon: <SiMariadb className="text-indigo-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-cyan-500" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-sky-600" /> },
      { name: "Debian", icon: <SiDebian className="text-rose-600" /> },
      { name: "Fedora", icon: <SiFedora className="text-sky-600" /> },
      { name: "Neovim", icon: <SiNeovim className="text-green-500" /> },
      { name: "VSCode", icon: <VscVscode className="text-sky-500" /> },
      { name: "Vercel", icon: <IoLogoVercel className="text-black dark:text-white" /> },
      { name: "Gemini CLI", icon: <RiGeminiFill className="text-blue-600" /> },
      { name: "Claude Code", icon: <RiClaudeFill className="text-orange-600" /> },
    ],
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Skills
        </motion.h2>
        <motion.p 
          className="text-muted-foreground mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Technologies and tools I've worked with throughout my projects and experience
        </motion.p>

        <motion.div 
          className="grid gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
            >
              <motion.h3 
                className="text-xl font-semibold mb-4"
                whileHover={{ 
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex flex-col items-center gap-2 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                  >
                    <motion.div 
                      className={`
                        w-14 h-14 rounded-full bg-muted flex items-center justify-center text-xl
                        group-hover:bg-muted/50 transition-colors duration-300
                        border border-transparent group-hover:border-primary/20
                      `}
                      whileHover={{
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.span 
                      className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
