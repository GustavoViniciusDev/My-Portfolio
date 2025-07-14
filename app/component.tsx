"use client"

import { Button } from "@/components/ui/button"
import { Copy, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModeToggle } from "./theme-button"
import WorkSection from './components/works';
import { FaWhatsapp } from "react-icons/fa";

interface ExperienceItem {
  company: string
  position: string
  period: string
  responsibilities: string[]
}

export default function Component() {

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => toast.success(`Copied: ${text}`))
  };

  const handleWhatsappClick = () => {
    const message = "Olá! Tenho interesse na criação de um site.";
    const phoneNumber = "5541997959684";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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
    { name: "Bootstrap", icon: "/img/Bootstrap.png" },
    { name: "Docker", icon: "/img/Docker.png" },
    { name: "Linux", icon: "/img/Linux.png" },
    { name: "MongoDB", icon: "/img/Mongo.png" },
    { name: "Vite", icon: "/img/Vite.png" },
    { name: "VueJs", icon: "/img/Vuejs.png" },
    { name: "WooCommerce", icon: "/img/WooCommerce.png" },
    { name: "Wordpress", icon: "/img/wordpress.png" },
  ]
  const experiences: ExperienceItem[] = [
    {
      company: "Solis Educacional",
      position: "Desenvolvedor Fullstack",
      period: "Nov 2024 - Julho 2025",
      responsibilities: [
        "Desenvolvimento e manutenção de funcionalidades em sistema legado com Laravel e MySQL.",
        "Melhoria de performance com técnicas de cache, refatoração e controle de injeções SQL.",
        "Documentação técnica e aplicação de boas práticas de código em colaboração com o time.",
      ],
    },
    {
      company: "PowerLibs",
      position: "Desenvolvedor Fullstack",
      period: "Mai 2024 - Jun 2025",
      responsibilities: [
        "Atuação como referência técnica em decisões de arquitetura e escolha de tecnologias.",
        "Desenvolvimento de sistemas robustos com foco em escalabilidade e manutenção a longo prazo.",
        "Participação ativa no processo seletivo e onboarding de novos desenvolvedores.",
        "Colaboração em equipe ágil com foco em entrega contínua e revisão de código.",
      ],
    },
    {
      company: "Iceberg Security",
      position: "Desenvolvedor Fullstack",
      period: "Jan 2024 - Out 2024",
      responsibilities: [
        "Desenvolvimento de aplicações web seguras utilizando Laravel, React e Node.js.",
        "Integração de APIs RESTful para comunicação eficiente entre sistemas.",
        "Gerenciamento de ambientes Docker e infraestrutura em nuvem com AWS.",
      ],
    },
    {
      company: "Link Monitoramento",
      position: "Desenvolvedor Fullstack",
      period: "Nov 2022 - Jul 2023",
      responsibilities: [
        "Criação e manutenção de sistemas de monitoramento em tempo real com Laravel.js, React e Node.js.",
        "Otimização de desempenho no backend com PHP e MySQL.",
        "Colaboração em equipe ágil com versionamento via Git e GitHub.",
      ],
    },
    {
      company: "SENAIPR",
      position: "Instrutor e Desenvolvedor",
      period: "Mai 2022 - Fev 2024",
      responsibilities: [
        "Ministração de aulas práticas de PHP, Laravel, React e SQL para turmas técnicas.",
        "Orientação de projetos reais com foco em boas práticas de desenvolvimento.",
        "Criação de conteúdos didáticos e eventos de capacitação para novos desenvolvedores.",
      ],
    },
  ];



  return (
    <div className="min-h-screen bg-background px-4">
      <header className="container py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            &lt;GustavoViniciusDev /&gt;
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about-me" className="text-sm hover:text-primary">
                Sobre
              </Link>
              <Link href="#work" className="text-sm hover:text-primary">
                Trabalhos
              </Link>
              <Link href="#getintouch" className="text-sm hover:text-primary">
                Contato
              </Link>
            </div>
            <ModeToggle />

          </div>
        </nav>
      </header>
      <main className="container py-20">
        <div className="w-ful py-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">
                Olá, Eu sou o Gustavo{" "}
                <span role="img" aria-label="waving hand">
                  👋
                </span>
              </h1>
              <p className="text-lg text-foreground">
              Sou um desenvolvedor Full-Stack especializado na criação de experiências digitais de alta performance — rápidas, acessíveis, responsivas e visualmente bem trabalhadas. Com mais de 4 anos de experiência prática no desenvolvimento de aplicações web, continuo motivado como se estivesse começando agora. Meu foco é transformar ideias em produtos digitais de qualidade, cuidando de cada detalhe técnico e visual com paixão.
              </p>
            </div>
            <div className="space-y-4 text-lg text-foreground">
              <div className="flex items-center gap-2 text-foreground">
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
                Paraná, Brasil
              </div>
              <div className="flex items-center gap-2 text-emerald-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Disponível para novos projectos
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
              <Link href="https://www.linkedin.com/in/gustavoviniciusdev/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">Linkedin</span>
              </Link>
            </div>
          </div>
        </div>
        {/* About Me */}

        <div className="w-ful py-8">
          <div id="about-me" className="text-center mb-8">
            <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">Sobre mim</span>
          </div>

          <div className="grid lg:grid-cols-2 items-center gap-12 justify-center">
            <div className="flex justify-center">
              <div className="aspect-[3/4] md:aspect-square w-full max-w-md">
                <Image
                  alt="Profile photo"
                  className="rounded-2xl object-cover shadow-2xl border-solid border-2"
                  height={500}
                  src="/img/Minhafoto.jpg"
                  style={{
                    aspectRatio: "300/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
            </div>

            <div className="text-foreground">
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  Sou um desenvolvedor apaixonado por <strong>tecnologia, design e resultados</strong>. Trabalho com tecnologias como <strong>React.js, Next.js, Laravel, TypeScript</strong> e <strong>MySQL</strong>, desenvolvendo soluções modernas para desafios reais.
                </p>
                <p>
                  Desde 2021 venho aprimorando minhas habilidades como programador, atuando em empresas, startups e como freelancer. Já participei da criação de <strong>sistemas SaaS, plataformas educacionais, ERPs</strong> e soluções sob medida para controle interno.
                </p>
                <p>
                  Além do desenvolvimento em si, gosto de atuar em toda a jornada do produto — desde a concepção até a entrega — sempre com foco em melhoria contínua e impacto real para os usuários.
                </p>
                <p>
                  Atualmente, aplico meus conhecimentos em projetos com <strong>Laravel no backend</strong>, <strong>React/Next.js no frontend</strong> e uma stack moderna que inclui <strong>Tailwind CSS, Docker, AWS</strong> e integração com <strong>APIs RESTful</strong>.
                </p>
                <p>💡 Alguns fatos rápidos sobre mim:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>🧠 Formação técnica em Desenvolvimento de Sistemas e cursando Engenharia de Software</li>
                  <li>👨‍🏫 Fui professor de programação (PHP, Laravel, React, SQL) no SENAI</li>
                  <li>🌐 Atuei em projetos de diferentes portes, incluindo plataformas educacionais públicas</li>
                  <li>💼 Freelancer em tempo integral</li>
                  <li>📈 Aspirante a empreendedor digital</li>
                </ul>
                <p>
                  Estou disponível para colaborar em novos projetos como freelancer. Sinta-se à vontade para me chamar e dizer olá! 😉
                </p>
              </div>
            </div>


          </div>
        </div>
        {/* Skills */}
        <div className="w-ful py-8">
          <div id="about-me" className="text-center">
            <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">Habilidades</span>
          </div>
          <div className="text-center">
            <h2 className="mt-4 text-2xl font-medium mb-10">
              As competências, ferramentas e tecnologias em que sou realmente bom:
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
        <div className="w-full py-8">
          <div className="max-w-3xl mx-auto p-4 space-y-8">
            <div className="text-center space-y-2">
              <div id="about-me" className="text-center mb-8">
                <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">
                  Experiência
                </span>
              </div>
              <p className="text-lg text-foreground">
                Aqui um breve resumo das minhas experiências
              </p>
            </div>

            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <Card key={index} className="p-6">
                  <div className="space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        {experience.position} —{" "}
                        <span className="text-primary font-medium">{experience.company}</span>
                      </h3>
                      <span className="text-sm text-foreground">{experience.period}</span>
                    </div>
                    <ul className="list-disc ml-4 space-y-1 text-foreground">
                      {experience.responsibilities.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>


        {/* Work */}

        <WorkSection />
        
        {/* Testimonials */}
      </main>

      {/* Footer */}
      <footer className="bg-background">
        <div className="container py-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-2">
              <div id="getintouch" className="text-center mb-8">
                <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">Entrar em contato</span>
              </div>
              <p className="text-lg text-foreground">
              Precisa de um desenvolvedor confiável ou quer tirar alguma dúvida? Vamos conversar!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-medium">contato.gustavoln@gmail.com</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy("contato.gustavoln@gmail.com")}
                >
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiar email</span>
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
                  <span className="sr-only">Copiar Número</span>
                </Button>
                <Button 
                  variant="ghost"
                  size="icon"
                  onClick={handleWhatsappClick}
                >
                  <FaWhatsapp className="h-4 w-2" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground">
               Você também pode me encontrar nessas plataformas!
              </p>
              <div className="flex justify-center gap-4"> 
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
              © 2025 | Criado e codificado por Gustavo Vinicius
            </div>
          </div>
        </div>
      </footer>

      <ToastContainer />
    </div>
  )
}