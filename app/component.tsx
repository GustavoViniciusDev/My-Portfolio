"use client"

import { Button } from "@/components/ui/button"
import { Copy, Github, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModeToggle } from "./theme-button"

interface ExperienceItem {
  company: string
  logo: string
  position: string
  period: string
  responsibilities: string[]
}

interface Testimonial {
  quote: string
  author: string
  role: string
}


export default function Component() {

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => toast.success(`Copied: ${text}`)) 
  };

  const skills = [
    { name: "Javascript", icon: "/img/js.png" },
    { name: "Typescript", icon: "/img/typescript.png" },
    { name: "React", icon: "/img/react.png" },
    { name: "Next.js", icon: "/img/Nextjs.png" },
    { name: "Node.js", icon: "/img/nodejs.png" },
    { name: "Laravel", icon: "/img/laravel.png" },
    { name: "PHP", icon: "/img/php.png" },
    { name: "PostgreSQL", icon: "/img/PostgreSQL.png" },
    { name: "MySql", icon: "/img/MySql.png" },
    { name: "Tailwindcss", icon: "/img/TailwindCSS.png" },
    { name: "Figma", icon: "/img/Figma.png" },
    { name: "Git", icon: "/img/Git.png" },
  ]
  const experiences: ExperienceItem[] = [
    {
      company: "Iceberg Security",
      logo: "/img/icebergsecurity.png",
      position: "Fullstack Developer",
      period: "Jan 2024 - Out 2024",
      responsibilities: [
        "Developed and maintained internal systems and SaaS using PHP, Laravel, React, and Node.js.",
        "Integrated REST and RESTful APIs to improve data flow across different platforms.",
        "Managed development environments with Docker and AWS.",
      ],
    },
    {
      company: "Link Monitoramento",
      logo: "/img/linkmonitoramento.jpg",
      position: "Fullstack Developer",
      period: "Nov 2022 - July 2023",
      responsibilities: [
        "Participated in the development of real-time monitoring systems using Laravel.js, MySQL, React, and Node.js.",
        "Implemented backend improvements with PHP and Laravel to optimize system performance.",
        "Collaborated with development and project management teams using Git and GitHub.",
      ],
    },
    {
      company: "Senai",
      logo: "/img/senai-logo.png",
      position: "Instructor and Developer",
      period: "May 2022 - Feb 2024",
      responsibilities: [
        "Taught system development courses focused on PHP, Laravel, React, and SQL databases.",
        "Guided students in practical projects, helping them apply programming concepts and industry best practices.",
        "Developed educational materials and organized technical training events.",
      ],
    },
  ]


  const testimonials: Testimonial[] = [
    {
      quote: "A great developer with good qualifications and very committed to the job.",
      author: "André T.",
      role: "CTO - Iceberg Security"
    },
    {
      quote: "Great guy, highly recommended for any COMPLEX back-end development job! His skills are top-notch and he will be an amazing addition to any team.",
      author: "Felipe Bomfim",
      role: "Sr. Full Stack - Link Monitoramento"
    },
    {
      quote: "Gustavo was extremely easy and pleasant to work with and truly cares about the success of the project. Ele has a high level of knowledge and was able to work on my application using Laravel without any problems.",
      author: "Cristiane Brito",
      role: "Freelancer"
    }
  ]

  return (
    <div className="min-h-screen bg-background px-10">
      <header className="container px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            &lt;GustavoViniciusDev /&gt;
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about-me" className="text-sm hover:text-primary">
                About
              </Link>
              <Link href="#work" className="text-sm hover:text-primary">
                Work
              </Link>
              <Link href="#testimonials" className="text-sm hover:text-primary">
                Testimonials
              </Link>
              <Link href="#getintouch" className="text-sm hover:text-primary">
                Contact
              </Link>
            </div>
            <ModeToggle />
           
          </div>
        </nav>
      </header>
      <main className="container px-4 py-20">
        <div className="w-ful px-4 py-8 md:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Hi, I&apos;m Gustavo{" "}
                <span role="img" aria-label="waving hand">
                  👋
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                I&apos;m a full-stack developer with a focus on creating (and occasionally designing) exceptional digital experiences
                that are fast, accessible, visually appealing and responsive. Although I&apos;ve been creating web applications for over
                3 years, I still enjoy it as if it were something new.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg
                  className=" w-4 h-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Paraná, Brazil
              </div>
              <div className="flex items-center gap-2 text-emerald-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for new projects
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://github.com/GustavoViniciuaDev"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/in/gustavoviniciusdev/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">Linkedin</span>
              </Link>
            </div>
          </div>
        </div>
        {/* About Me */}

        <div className="w-ful px-4 py-8 md:px-6 lg:px-8">
          <div id="about-me" className="text-center mb-8">
            <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">About me</span>
          </div>

          <div className="grid lg:grid-cols-2 items-center gap-12 justify-center">
            <div className="flex justify-center">
              <div className="aspect-[3/4] md:aspect-square w-full max-w-md">
                <Image
                  alt="Profile photo"
                  className="rounded-2xl object-cover shadow-2xl border-solid border-2"
                  height={500}
                  src="/img/Minhafoto.jpeg"
                  style={{
                    aspectRatio: "300/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
            </div>

            <div className="text-muted-foreground">
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  I&apos;m a passionate developer specializing in full-stack development (React.js & Laravel). I&apos;m highly enthusiastic about bringing both the technical and visual aspects of digital products to life. User experience, flawless design, and writing clean, readable, high-performance code are essential to me.
                </p>
                <p>
                  My journey as a web developer began in 2021, and since then, I have continuously evolved, embracing new challenges and learning the latest technologies. Now, I&apos;m building cutting-edge web applications using modern tools like Next.js, TypeScript, Laravel, Tailwind CSS, Supabase, and more.
                </p>
                <p>
                  With a progressive mindset, I enjoy working on all stages of a product, from concept to final development.
                </p>
                <p>
                  When I&apos;m not in full development mode, you can find me on LinkedIn and Instagram. On LinkedIn, I share ideas about technology and build my journey publicly. Alternatively, you can follow my work on GitHub.
                </p>

                <p>Finally, some quick bits about me:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Systems Development Technician</li>
                  <li>Avid learner</li>
                  <li>Full-time freelancer</li>
                  <li>Aspiring indie hacker</li>
                </ul>
                <p>
                  One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! 😉
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="w-ful px-4 py-8 md:px-6 lg:px-8">
          <div id="about-me" className="text-center">
            <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">Skills</span>
          </div>
          <div className="text-center">
            <h2 className="mt-4 text-2xl font-medium mb-10">
              The skills, tools and technologies I am really good at:
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {skills.map((skill) => (
              <Card
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 relative mb-2">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-center font-medium">
                  {skill.name}
                </span>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="w-ful px-4 py-8 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto p-4 space-y-8">
            <div className="text-center space-y-2">
              <div id="about-me" className="text-center mb-8">
                <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">Experience</span>
              </div>
              <p className="text-lg text-muted-foreground">
                Here is a quick summary of my most recent experiences:
              </p>
            </div>

            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        className="h-10 w-auto"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="flex-grow space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {experience.position}
                          </h3>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {experience.period}
                        </div>
                      </div>
                      <ul className="list-disc ml-4 space-y-1">
                        {experience.responsibilities.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Work */}

        <div className="w-ful px-4 py-8 md:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="text-center space-y-2">
              <div id="work" className="text-center mb-8">
                <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">Work</span>
              </div>
              <p className="text-lg text-muted-foreground">
                Some of the noteworthy projects I have built:
              </p>
            </div>
            <div className="grid gap-8">
              <Card className="overflow-hidden border-none bg-gradient-to-t from-gray-100 to-white p-0.5 dark:from-gray-900 dark:to-gray-800">
                <CardContent className="grid gap-4 p-6 md:grid-cols-2 md:gap-8">
                  <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Image
                      src="/img/sweetpricer.png"
                      alt="Fiskil project screenshot"
                      width={800}
                      height={400}
                      className="aspect-[1.6] h-auto w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">SweetPricer</h3>
                    <p className="text-muted-foreground">
                      SweetPricer is a micro-SaaS solution designed to help small and medium-sized businesses set prices accurately and keep efficient control of their products.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">MySql</Badge>
                      <Badge variant="secondary">Tailwindcss</Badge>
                      <Badge variant="secondary">Figma</Badge>
                      <Badge variant="secondary">Stripe</Badge>
                      <Badge variant="secondary">Git</Badge>
                    </div>
                    <a
                      href="https://www.sweetpricer.com.br/"
                      className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Project</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="w-ful px-4 py-8 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="text-center space-y-2">
              <div id="testimonials" className="text-center mb-8">
                <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">Testimonials</span>
              </div>
              <p className="text-lg text-muted-foreground">
                Nice things people have said about me:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 bg-card">
                  <CardContent className="p-6 space-y-4">
                    <Avatar className="h-12 w-12 bg-muted">
                      <AvatarFallback>
                        <User className="h-6 w-6" />
                      </AvatarFallback>
                    </Avatar>
                    <blockquote className="text-sm leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <footer className="space-y-1">
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </footer>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-ful bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-2">
              <div id="getintouch" className="text-center mb-8">
                <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">Get in touch</span>
              </div>
              <p className="text-lg text-muted-foreground">
                What&apos;s next? Feel free to reach out to me if you&apos;re looking for a developer, have a query, or simply want to connect.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-medium">gustavo.vinicius.caes@gmail.com</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy("gustavo.vinicius.caes@gmail.com")}
                >
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy email</span>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-medium">+41 9 9795-9684</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy("+41 9 9795-9684")}
                >
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy phone number</span>
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground">
                You may also find me on these platforms!
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.instagram.com/guto.peagape/" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/gustavoviniciusdev/" aria-label="Linkedin">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/GustavoViniciuaDev" aria-label="Github">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2024 | Designed and coded with{" "}
              <span className="text-red-500">❤</span> by Gustavo Vinicius
            </div>
          </div>
        </div>
      </footer>

      <ToastContainer />
    </div>
  )
}