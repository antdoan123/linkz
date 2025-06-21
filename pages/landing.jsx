import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, Play, Briefcase, Monitor, ShoppingBag, Martini, ExternalLink, Code, MessageCircle } from "lucide-react";
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* HERO SECTION */}
      <section className="text-center py-20">
        <div className="max-w-3xl mx-auto">
          <Avatar className="w-32 h-32 mx-auto border-4 border-black shadow-md overflow-hidden rounded-full mb-6">
            <AvatarImage
              src="/antpp.jpg"
              alt="Anthony"
              className="w-full h-full object-cover object-[center_30%]"
            />
            <AvatarFallback className="text-2xl bg-black text-white">AD</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl font-serif mb-2">Anthony Doan</h1>
          <p className="uppercase tracking-widest text-sm text-gray-500">
            Web Developer & Visual Creative
          </p>
          <p className="text-lg text-gray-700 mt-6 max-w-xl mx-auto">
            Computer Engineering graduate turned creative—sharing my lifestyle, building sleek websites, and expressing myself through fashion.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button className="uppercase bg-black text-white hover:bg-neutral-800 px-8 py-3 tracking-wider rounded-none">
                Work With Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center">Follow My Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{
              name: "Instagram",
              icon: Instagram,
              url: "https://www.instagram.com/antdoan/",
              color: "hover:bg-pink-500",
            }, {
              name: "TikTok",
              icon: Play,
              url: "https://www.tiktok.com/@antdoan123",
              color: "hover:bg-black",
            }, {
              name: "LinkedIn",
              icon: Linkedin,
              url: "https://www.linkedin.com/in/antdoan/",
              color: "hover:bg-blue-700",
            }, {
              name: "Email",
              icon: Mail,
              url: "mailto:antdoan1999@gmail.com",
              color: "hover:bg-yellow-400",
            }].map((social) => (
              <Link key={social.name} href={social.url}>
                <Button
                  variant="outline"
                  className={`w-full justify-start gap-3 h-14 transition-all duration-200 ${social.color} hover:text-white border-gray-200 rounded-none font-medium`}
                >
                  <social.icon className="w-5 h-5" />
                  {social.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">My Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: "Website Examples",
              description: "Browse my portfolio of custom websites and web apps",
              icon: Monitor,
              gradient: "from-blue-400 to-blue-600",
              link: "/website",
            }, {
              title: "Amazon Storefront",
              description: "Check out my curated product recommendations",
              icon: ShoppingBag,
              gradient: "from-orange-400 to-orange-600",
              link: "#",
            }, {
              title: "Mobile Bartending",
              description: "Professional cocktail service for your events and a fun drinking card game to play",
              icon: Martini,
              gradient: "from-pink-400 to-pink-600",
              link: "https://www.drunkies.co/",
            }].map(({ title, description, icon: Icon, gradient, link }) => (
              <Link href={link} key={title} className="block">
                <Card className="border border-gray-200 hover:border-opacity-50 transition-all duration-200 hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{title}</h3>
                        <p className="text-sm text-gray-600">{description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectLinks.map((project, index) => (
              <Link key={index} href={project.url} className="block">
                <Card className="border border-gray-200 hover:border-green-300 transition-all duration-200 hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-gray-900">{project.name}</h3>
                      <p className="text-sm text-gray-600">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

<Contact/>
    </div>
  );
}
