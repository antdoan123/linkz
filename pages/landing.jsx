import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, Play, ChefHat, Monitor, Martini, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Contact from "./contact";

const projectLinks = [
  {
    name: "E-Commerce Platform",
    description: "Full-stack React & Node.js",
    url: "#",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Task Management App",
    description: "Next.js with real-time updates",
    url: "#",
    tech: ["Next.js", "Socket.io", "PostgreSQL"],
  },
  {
    name: "Weather Dashboard",
    description: "Vue.js with API integration",
    url: "#",
    tech: ["Vue.js", "API", "Chart.js"],
  },
];

const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/antdoan/",
    color: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600",
  },
  {
    name: "TikTok",
    icon: Play,
    url: "https://www.tiktok.com/@itsantdoan",
    color: "hover:bg-black",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/antdoan/",
    color: "hover:bg-blue-600",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:antdoan1999@gmail.com",
    color: "hover:bg-neutral-700",
  },
];

const services = [
  {
    title: "Website Design",
    description: "Custom websites and web apps built clean and fast.",
    icon: Monitor,
    gradient: "from-blue-500 to-indigo-600",
    link: "/website",
  },
  {
    title: "Mangon Dining",
    description: "Vietnamese-fusion catering and private chef experiences.",
    icon: ChefHat,
    gradient: "from-orange-400 to-rose-500",
    link: "/menu",
  },
  {
    title: "Mobile Bartending",
    description: "Professional cocktail service for events via Drunkies.",
    icon: Martini,
    gradient: "from-pink-400 to-fuchsia-600",
    link: "https://www.drunkies.co/",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* HERO */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="shrink-0">
            <Avatar className="w-36 h-36 md:w-44 md:h-44 border-4 border-black shadow-lg overflow-hidden rounded-full">
              <AvatarImage
                src="/antpp.JPG"
                alt="Anthony Doan"
                className="w-full h-full object-cover object-[center_30%]"
              />
              <AvatarFallback className="text-2xl bg-black text-white">AD</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center md:text-left">
            <p className="uppercase tracking-[0.25em] text-xs text-gray-400 mb-3">
              Web Developer · Creative · Entrepreneur
            </p>
            <h1 className="text-5xl md:text-6xl font-serif mb-5 leading-tight">
              Anthony Doan
            </h1>
            <p className="text-base text-gray-500 leading-relaxed max-w-lg">
              Computer engineering grad turned creative — building clean websites, growing brands,
              and sharing my journey through lifestyle, fitness, and fashion.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              <Link href="/contact">
                <Button className="bg-black text-white hover:bg-neutral-800 px-8 py-3 text-sm uppercase tracking-widest rounded-none transition-all duration-200 hover:scale-[1.02]">
                  Work With Me
                </Button>
              </Link>
              <Link href="/website">
                <Button variant="outline" className="border-black px-8 py-3 text-sm uppercase tracking-widest rounded-none hover:bg-black hover:text-white transition-all duration-200 hover:scale-[1.02]">
                  View Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section className="bg-neutral-50 py-16 md:py-20 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-2xl md:text-3xl font-serif mb-2 text-center">Follow My Journey</h2>
          <p className="text-sm text-gray-400 text-center mb-10 tracking-wide">Stay connected across platforms</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socials.map(({ name, icon: Icon, url, color }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group flex flex-col items-center gap-3 py-8 border border-gray-200 bg-white
                  transition-all duration-300 hover:text-white hover:border-transparent
                  hover:-translate-y-1 hover:shadow-lg ${color}
                `}
              >
                <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs uppercase tracking-widest font-medium">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-2xl md:text-3xl font-serif mb-2 text-center">My Services</h2>
          <p className="text-sm text-gray-400 text-center mb-12 tracking-wide">What I bring to the table</p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(({ title, description, icon: Icon, gradient, link }) => (
              <Link href={link} key={title} className="block group">
                <Card className="border border-gray-100 rounded-none overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
                  <div className={`h-2 bg-gradient-to-r ${gradient}`} />
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-base mb-2">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                      View <ExternalLink className="w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-neutral-50 py-16 md:py-24 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-2xl md:text-3xl font-serif mb-2 text-center">Featured Projects</h2>
          <p className="text-sm text-gray-400 text-center mb-12 tracking-wide">A few things I&apos;ve built</p>
          <div className="grid md:grid-cols-3 gap-6">
            {projectLinks.map((project, index) => (
              <Link key={index} href={project.url} className="block group">
                <Card className="h-full border border-gray-200 rounded-none transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10 hover:border-black">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-base">{project.name}</h3>
                      <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors shrink-0 mt-0.5" />
                    </div>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs rounded-none bg-gray-100 text-gray-500 hover:bg-black hover:text-white transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <Contact />

    </div>
  );
}