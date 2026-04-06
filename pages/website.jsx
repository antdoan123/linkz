import { ExternalLink } from "lucide-react";
import Link from "next/link";

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
  {
    name: "Fitness Gym & Sport Center",
    description: "Athletic style gym with old school free-weights.",
    url: "https://www.vinelandoptimalgym.com/",
    image: "gymss.png",
  },
];

export default function WebsiteExamples() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* BACK */}
      <div className="max-w-5xl mx-auto px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-8 pt-16 pb-20 text-center">
        <p className="uppercase tracking-[0.25em] text-xs text-gray-400 mb-4">
          Web Design · Development · Freelance
        </p>
        <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
          Website Portfolio
        </h1>
        <div className="w-12 h-px bg-black mx-auto mb-6" />
        <p className="text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
          A look at some of the websites I&apos;ve built — from creative studios to service businesses across Southern California.
        </p>
      </section>

      {/* GRID */}
      <section className="border-t border-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websites.map((site, i) => (
              <Link
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {/* Image */}
                <div className="overflow-hidden bg-neutral-100 aspect-[16/10]">
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400">
                        Project {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold leading-snug group-hover:underline underline-offset-4 transition-all">
                      {site.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      {site.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-neutral-50 py-20">
        <div className="max-w-xl mx-auto px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">Have a project in mind?</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            Whether it&apos;s a brand new site or a redesign, let&apos;s build something clean and effective together.
          </p>
          <Link href="/contact">
            <button className="px-10 py-3.5 bg-black text-white text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all duration-200 hover:scale-[1.02]">
              Start a Project
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}