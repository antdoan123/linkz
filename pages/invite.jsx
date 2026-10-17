import Head from "next/head"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Users, UtensilsCrossed, ExternalLink } from "lucide-react"

export default function InvitePage() {
  const event = {
    title: "Halloween Night",
    subtitle: "WARNING: you might die",
    dateText: "Friday, October 30",
    timeText: "6:00 PM",
    locationName: "Stanton, CA",
    addressLine: "Cloud House Apartment",
    rsvpUrl: "https://forms.gle/CatufaErhUBJestW7",
    dressCode: "Halloween Costume Required",
    note:
      "A spooky night filled with witch potions, spooky games, and deadly vibes",
  }

  const menu = {
    header: "Food Menu",
    subheader: "*subject to change",
    sections: [
      {
        title: "Small Bites",
        items: [
          { name: "Fish Sauce Caramel Crispy Chicken", description: "double-fried chicken, fish sauce caramel, thai chili, yuzu aioli" },
          { name: "Salsa & Chips", description: "habanero-salsa, torilla chips" },
        ],
      },
      {
        title: "Main",
        items: [
          { name: "Vietnamese-Style Bossam", description: "lemongrass sliced pork, soy-glaze, torched to caramelize, butter lettuce, banh hoi" },
          { name: "Grilled Tiger Prawn", description: "butterfly-shrimp, garlic-lime butter. breadcrumbs" },
          { name: "Vietnamese Garlic Noodles", description: "egg noodles, sweet-soy glaze, garlic butter, crispy shallot" },
        ],
      },
      {
        title: "Drinks",
        items: [
          { name: "Signature Cocktail", description: null },
          { name: "Hennessy", description: null },
        ],
      },
    ],
    footer:
      "If you have dietary restrictions, add it in the RSVP and I'll do my best to accommodate.",
  }

  const agenda = [
    { time: "6:00 PM", label: "Arrive + drinks + meet people" },
    { time: "6:45 PM", label: "Food opens" },
    { time: "7:30 PM", label: "Group photo + Costume contest" },
    { time: "8:00 PM", label: "Chill, drink, vibe / music" },
  ]

  return (
    <>
      <Head>
        <title>{event.title} | Invitation</title>
        <meta name="description" content="Invitation to an appreciation night hosted by Anthony. RSVP for date, time, location, and menu details." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        className="min-h-screen text-white font-sans"
        style={{
          backgroundImage: "linear-gradient(rgba(10,5,20,0.82), rgba(10,5,20,0.88)), url('/housebg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >

        {/* HERO */}
        <section className="py-20 text-center px-4">
          <div className="max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-sm text-orange-400/80 mb-3">
              You&apos;re invited
            </p>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-white drop-shadow-lg">
              {event.title}
            </h1>

            <Avatar className="w-32 h-32 mx-auto border-4 border-orange-500/60 shadow-lg shadow-orange-900/40 overflow-hidden rounded-full mb-6">
              <AvatarImage
                src="/antpp.JPG"
                alt="Anthony"
                className="w-full h-full object-cover object-[center_30%]"
              />
              <AvatarFallback className="text-2xl bg-purple-900 text-orange-300">AD</AvatarFallback>
            </Avatar>

            <p className="uppercase tracking-widest text-sm text-purple-300/80">
              {event.subtitle}
            </p>

            {/* Date / Time / Location */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-1.5 text-orange-300/90">
                <Calendar className="w-4 h-4" /> {event.dateText}
              </span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-1.5 text-orange-300/90">
                <Clock className="w-4 h-4" /> {event.timeText}
              </span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-1.5 text-orange-300/90">
                <MapPin className="w-4 h-4" /> {event.locationName}
              </span>
            </div>

            <p className="text-base text-white/70 mt-8 max-w-2xl mx-auto leading-relaxed">
              {event.note}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={event.rsvpUrl} target="_blank" rel="noopener noreferrer">
                <Button className="uppercase bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-3 tracking-wider rounded-none shadow-lg shadow-orange-900/30">
                  RSVP Now
                </Button>
              </a>
              <Link href="/">
                <Button
                  variant="outline"
                  className="uppercase border-purple-400/50 text-purple-200 hover:bg-purple-900/40 hover:border-purple-300 px-8 py-3 tracking-wider rounded-none"
                >
                  Back to Site
                </Button>
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <Badge className="rounded-none text-md text-purple-200">{event.dressCode}</Badge>
            </div>

            <div className="mt-6 text-sm text-white/50 max-w-md mx-auto">
              *Parking is very limited. If you plan on drinking, I recommend Ubering. If no parking, park near Da Vien and walk over.
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="flex items-center justify-center gap-4 px-8">
          <div className="h-px flex-1 max-w-xs bg-orange-500/20" />
          <span className="text-orange-400/50 text-lg">🎃</span>
          <div className="h-px flex-1 max-w-xs bg-orange-500/20" />
        </div>

        {/* NIGHT FLOW */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-serif mb-4 text-orange-300">Night Flow</h2>

            <div className="mb-4 flex flex-wrap gap-4 text-sm text-purple-300/80">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {event.dateText}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {event.timeText}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {event.locationName} · {event.addressLine}</span>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-6">
              <div className="space-y-4">
                {agenda.map((item) => (
                  <div
                    key={item.time}
                    className="flex items-start justify-between gap-6 border-b border-orange-500/10 pb-3 last:border-b-0 last:pb-0"
                  >
                    <p className="uppercase tracking-widest text-xs text-orange-400/70 whitespace-nowrap">
                      {item.time}
                    </p>
                    <p className="text-white/80 font-medium text-right">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/40 mt-6">
                *Vibes only. This is a relaxed hang — come through whenever, stay as long as you want.
              </p>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="flex items-center justify-center gap-4 px-8">
          <div className="h-px flex-1 max-w-xs bg-orange-500/20" />
          <span className="text-orange-400/50 text-lg">🎃</span>
          <div className="h-px flex-1 max-w-xs bg-orange-500/20" />
        </div>

        {/* FOOD MENU */}
        <section className="py-16">
          <div className="max-w-xl mx-auto px-4 text-center">

            <div className="flex items-center justify-center gap-2 mb-2">
              <UtensilsCrossed className="w-4 h-4 text-orange-400/60" />
              <p className="text-white/40 text-xs uppercase tracking-widest">{menu.subheader}</p>
            </div>
            <h2 className="text-3xl font-serif text-white mb-12">{menu.header}</h2>

            <div className="space-y-10">
              {menu.sections.map((section, i) => (
                <div key={section.title}>
                  {/* Section label */}
                  <p className="uppercase tracking-[0.25em] text-orange-400 text-xs mb-6">
                    {section.title}
                  </p>

                  {/* Items */}
                  <div className="space-y-6">
                    {section.items.map((item) => (
                      <div key={item.name}>
                        <p className="uppercase tracking-wide font-semibold text-white text-sm">
                          {item.name}
                        </p>
                        {item.description && (
                          <p className="italic text-white/50 text-sm mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {i < menu.sections.length - 1 && (
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <div className="h-px w-16 bg-orange-500/15" />
                      <div className="h-px w-16 bg-orange-500/15" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs text-white/30 mt-10 italic">{menu.footer}</p>

            <div className="mt-8">
              <a href={event.rsvpUrl} target="_blank" rel="noopener noreferrer">
                <Button className="uppercase bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-3 tracking-wider rounded-none w-full shadow-md shadow-orange-900/30">
                  RSVP — Save Your Spot
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 border-t border-orange-500/10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm text-white/40">
              Hosted by Anthony · Cloud House Apartments · {event.dateText} at {event.timeText}
            </p>
            <p className="text-xs text-white/25 mt-2">
              Address details can be shared after RSVP if needed.
            </p>
          </div>
        </footer>

      </main>
    </>
  )
}