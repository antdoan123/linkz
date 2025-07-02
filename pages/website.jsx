import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Monitor } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const websites = [
  {
    name: "Bartending Service Website",
    description: "Professional event bartending services in SoCal.",
    url: "https://www.mysocalbartenders.com/",
    image: "barss.png",
  },
  {
    name: "Tattoo Shop Website",
    description: "Clean and artistic online presence for a tattoo studio.",
    url: "https://www.whitelotusociety.com/",
    image: "tattooss.png",
  },
  {
    name: "Window & Door Company Website",
    description: "Corporate-style site for a premium window and door company.",
    url: "https://www.innoview.us/index.html",
    image: "doorss.png",
  },
];

export default function WebsiteExamples() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="text-sm">
              ← Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text mb-4">
            Website Examples
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A look at some of the websites I’ve built—from creative studios to service businesses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {websites.map((site) => (
            <Link key={site.name} href={site.url} target="_blank">
              <Card className="hover:shadow-xl transition-all border border-gray-200 bg-white/80 backdrop-blur h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative group h-48">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition duration-300 rounded-t"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{site.name}</h3>
                        <p className="text-sm text-gray-600">{site.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
