import Head from "next/head"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Users, UtensilsCrossed, ExternalLink } from "lucide-react"

export default function InvitePage() {
  // EDIT THESE
  const event = {
    title: "Anthony’s Circle",
    subtitle: "Networking / Appreciation Night",
    dateText: "Friday, January 16",
    timeText: "6:00 PM",
    locationName: "Stanton, CA",
    addressLine: "Cloud House Apartment",
    rsvpUrl: "https://forms.gle/CatufaErhUBJestW7", // <-- replace with your RSVP link
    dressCode: "Smart casual",
    note:
      "A small appreciation party for the people I met this year. Come eat, drink, connect, and vibe. Feel free to bring a friend.",
  }

  const menu = {
    header: "Food Menu",
    sections: [
      {
        title: "Small Bites",
        items: [
          "Bánh mì board (build-your-own)",
          "Spicy Soy-Marianted Devil Eggs",
        ],
      },
      {
        title: "Main",
        items: [
          "Vietnamese-style bossam (pork belly + pickles + sauces)",
          "Crying Tiger Steak",
          "Vietnamese Shrimp Stir-Fry Macaroni",
        ],
      },
      {
        title: "Drinks",
        items: [
          "Signature cocktail",
          "Hennessy",
        ],
      },
    ],
    footer:
      "If you have dietary restrictions, add it in the RSVP and I’ll do my best to accommodate.",
  }

  const agenda = [
    { time: "6:00 PM", label: "Arrive + drinks + meet people" },
    { time: "6:45 PM", label: "Food opens" },
    { time: "7:30 PM", label: "Group photo + quick toast" },
    { time: "8:00 PM", label: "Chill, drink, vibe / music" },
  ]

  return (
    <>
      <Head>
        <title>{event.title} | Invitation</title>
        <meta
          name="description"
          content="Invitation to a networking / appreciation night hosted by Anthony. RSVP for date, time, location, and menu details."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-black font-sans">
        {/* HERO */}
        <section className="py-20 text-center px-4">
          <div className="max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
              You&apos;re invited
            </p>
            <h1 className="text-5xl md:text-6xl font-serif mb-3">
              {event.title}
            </h1>
                      <Avatar className="w-32 h-32 mx-auto border-4 border-black shadow-md overflow-hidden rounded-full mb-6">
                        <AvatarImage
                          src="/antpp.JPG"
                          alt="Anthony"
                          className="w-full h-full object-cover object-[center_30%]"
                        />
                        <AvatarFallback className="text-2xl bg-black text-white">AD</AvatarFallback>
                      </Avatar>
            <p className="uppercase tracking-widest text-sm text-gray-500">
              {event.subtitle}
            </p>

            <p className="text-lg text-gray-700 mt-8 max-w-2xl mx-auto leading-relaxed">
              {event.note}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={event.rsvpUrl} target="_blank" rel="noopener noreferrer">
                <Button className="uppercase bg-black text-white hover:bg-neutral-800 px-8 py-3 tracking-wider rounded-none">
                  RSVP Now
                </Button>
              </a>

              <Link href="/">
                <Button
                  variant="outline"
                  className="uppercase border-black text-black hover:bg-black hover:text-white px-8 py-3 tracking-wider rounded-none"
                >
                  Back to Site
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="rounded-none">
                {event.dressCode}
              </Badge>
              <Badge variant="secondary" className="rounded-none">
                Limited space
              </Badge>
              <Badge variant="secondary" className="rounded-none">
                Invite-only
              </Badge>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 justify-center">
                *Parking is very limited, if you are trying to drink a lot with me then I reccommend ubering. If no parking, then park near Da Vien and walk over.
            </div>
          </div>
        </section>

        {/* EVENT DETAILS */}
        <section className="py-12 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="border border-gray-200 rounded-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p className="text-gray-600">{event.dateText}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 rounded-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold">Time</p>
                    <p className="text-gray-600">{event.timeText}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 rounded-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600">{event.locationName}</p>
                    <p className="text-gray-500 text-sm">{event.addressLine}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto px-4 mt-6">
            <Card className="border border-gray-200 rounded-none">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold">RSVP</p>
                    <p className="text-gray-600">
                      Please RSVP so I can plan food + seating.
                    </p>
                  </div>
                </div>

                <a href={event.rsvpUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="uppercase bg-black text-white hover:bg-neutral-800 px-6 py-2 tracking-wider rounded-none flex items-center gap-2">
                    RSVP Link <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AGENDA + MENU */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AGENDA */}
            <div>
              <h2 className="text-3xl font-serif mb-6">Night Flow</h2>
              <Card className="border border-gray-200 rounded-none">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {agenda.map((item) => (
                      <div
                        key={item.time}
                        className="flex items-start justify-between gap-6 border-b border-gray-200 pb-3 last:border-b-0 last:pb-0"
                      >
                        <p className="uppercase tracking-widest text-xs text-gray-500 whitespace-nowrap">
                          {item.time}
                        </p>
                        <p className="text-gray-700 font-medium text-right">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 mt-6">
                    *Vibes only. This is a relaxed hang — come through whenever,
                    stay as long as you want.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* MENU */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <UtensilsCrossed className="w-5 h-5" />
                <h2 className="text-3xl font-serif">{menu.header}</h2>
              </div>

              <div className="space-y-4">
                {menu.sections.map((section) => (
                  <Card key={section.title} className="border border-gray-200 rounded-none">
                    <CardContent className="p-6">
                      <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">
                        {section.title}
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-gray-400">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}

                <p className="text-sm text-gray-500">{menu.footer}</p>

                <div className="pt-2">
                  <a href={event.rsvpUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="uppercase bg-black text-white hover:bg-neutral-800 px-8 py-3 tracking-wider rounded-none w-full">
                      RSVP — Save Your Spot
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-600">
              Hosted by Anthony • Cloud House Apartments • {event.dateText} at {event.timeText}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Address details can be shared after RSVP if needed.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
