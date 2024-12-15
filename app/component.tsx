"use client"

import { Button } from "@/components/ui/button"
import { Copy, Github, Instagram, Linkedin } from "lucide-react"
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
  logo: string
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
  ]
  const experiences: ExperienceItem[] = [
    {
      company: "Solis",
      logo: "/img/logo-solis.png",
      position: "Desenvolvedor Back-end",
      period: "Dez 2024 - Atualmente",
      responsibilities :[
        "Desenvolver, manter e documentar o Solis, um ecossistema inovador projetado para aprimorar a educação pública em escolas brasileiras.",
        "Auxiliar na tomada de decisões, identificando as melhores práticas e métodos para o desenvolvimento eficiente de novas funcionalidades.",
      ],
    },
    {
      company: "Iceberg Security",
      logo: "/img/icebergsecurity.png",
      position: "Desenvolvedor Fullstack",
      period: "Jan 2024 - Out 2024",
      responsibilities: [        
      "Desenvolver e manter sistemas internos e SaaS utilizando PHP, Laravel, React e Node.js.",
      "APIs REST e RESTful integradas para melhorar o fluxo de dados em diferentes plataformas.",
      "Gestão de ambientes de desenvolvimento com Docker e AWS.",
      ],
    },
    {
      company: "Link Monitoramento",
      logo: "/img/linkmonitoramento.jpg",
      position: "Desenvolvedor Fullstack",
      period: "Nov 2022 - Jul 2023",
      responsibilities: [
      "Participou no desenvolvimento de sistemas de monitorização em tempo real utilizando Laravel.js, MySQL, React e Node.js.",
      "Implementou melhorias de backend com PHP e Laravel para otimizar o desempenho do sistema.",
      "Colaborou com equipas de desenvolvimento e gestão de projectos usando Git e GitHub.",
      ],
    },
    {
      company: "Senai",
      logo: "/img/senai-logo.png",
      position: "Instrutor e Desenvolvedor",
      period: "Mai 2022 - Fev 2024",
      responsibilities: [
        "Ministrou cursos de desenvolvimento de sistemas focados em PHP, Laravel, React e bases de dados SQL.",
        "Orientou os alunos em projectos práticos, ajudando-os a aplicar conceitos de programação e as melhores práticas da indústria.",
        "Desenvolveu materiais didácticos e organizou eventos de formação técnica.",
      ],
    },
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
      <main className="container px-4 py-20">
        <div className="w-ful px-4 py-8 md:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Olá, Eu sou o Gustavo{" "}
                <span role="img" aria-label="waving hand">
                  👋
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
              Sou um programador full-stack com foco na criação (e ocasionalmente no design) de experiências digitais excepcionais que sejam rápidas, acessíveis, visualmente apelativas e responsivas. Embora já crie aplicações web há mais de 3 anos, continuo a gostar de o fazer como se fosse algo novo.
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
              <Link
                href="https://instagram.com/guto.peagape"
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
            <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">Sobre mim</span>
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
                Sou um programador apaixonado por desenvolvimento full-stack, com foco em React.js e Laravel. Gosto de transformar ideias em produtos digitais, cuidando tanto dos detalhes técnicos quanto da aparência visual. Para mim, é essencial criar experiências que sejam intuitivas e de alta qualidade, com um design bem feito e um código limpo e eficiente.
                </p>
                <p>
                Comecei minha jornada como programador web em 2021 e, desde então, tenho crescido constantemente, enfrentando novos desafios e me atualizando com as tecnologias mais recentes. Hoje, desenvolvo aplicações web modernas usando ferramentas como Next.js, TypeScript, Laravel, Tailwind CSS, MySql, entre outras.
                </p>
                <p>
                Gosto de acompanhar todas as etapas de um produto, desde a ideia inicial até o desenvolvimento final, sempre com uma mentalidade focada em evolução e melhoria.
                </p>
                <p>
                Quando não estou mergulhado no desenvolvimento, você pode me encontrar no LinkedIn e no Instagram. No LinkedIn, compartilho ideias sobre tecnologia e divido meu caminho na área. Se preferir, pode acompanhar meus projetos também no GitHub.
                </p>

                <p>Por fim, algumas informações rápidas sobre mim:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Formação Técnica em Desenvolvimento de Sistemas</li>
                  <li>Aprendiz ávido</li>
                  <li>Freelancer em tempo integral</li>
                  <li>Aspirante a empreendedor</li>
                </ul>
                <p>
                Por último, estou disponível para trabalhar como freelancer, por isso, sinta-se à vontade para me contactar e dizer olá! 😉
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="w-ful px-4 py-8 md:px-6 lg:px-8">
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
        <div className="w-ful px-4 py-8 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto p-4 space-y-8">
            <div className="text-center space-y-2">
              <div id="about-me" className="text-center mb-8">
                <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">Experiência</span>
              </div>
              <p className="text-lg text-muted-foreground">
                Aqui um breve resumo das minhas experiências
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

        <WorkSection />
        
        {/* Testimonials */}
      </main>

      {/* Footer */}
      <footer className="w-ful bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-2">
              <div id="getintouch" className="text-center mb-8">
                <span className="px-4 py-2 rounded-full bg-slate-800 text-sm text-white inline-block">Entrar em contato</span>
              </div>
              <p className="text-lg text-muted-foreground">
              Se precisar de um programador, tiver alguma dúvida ou apenas quiser conversar, estou à disposição!
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
              © 2024 | Criado e codificado por Gustavo Vinicius
            </div>
          </div>
        </div>
      </footer>

      <ToastContainer />
    </div>
  )
}