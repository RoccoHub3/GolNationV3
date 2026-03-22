"use client";

import { useMemo, useState } from "react";

export default function GolNationWebsite() {
  const countries = [
    "Argentina",
    "Belgium",
    "Colombia",
    "Germany",
    "Japan",
    "New Zealand",
    "Paraguay",
    "Scotland",
    "South Korea",
    "Uruguay",
  ];

  const featuredPacks = [
    {
      name: "Argentina Fan Pack",
      desc: "Sky-blue passion, iconic chants, and match-day pride for one of football’s most emotional fan cultures.",
      tag: "Iconic",
      theme: "from-sky-300/25 to-white/5",
      art: "bg-[linear-gradient(135deg,#93c5fd,#0f172a)]",
    },
    {
      name: "Germany Fan Pack",
      desc: "Bold shapes, tournament energy, and a sharp supporter identity inspired by classic football heritage.",
      tag: "Power",
      theme: "from-red-300/20 to-amber-300/10",
      art: "bg-[linear-gradient(135deg,#111827,#7f1d1d,#f59e0b)]",
    },
    {
      name: "Japan Fan Pack",
      desc: "Minimal, precise, and fierce. Clean visuals built for fans who bring style into every match.",
      tag: "New",
      theme: "from-white/20 to-rose-300/10",
      art: "bg-[linear-gradient(135deg,#e5e7eb,#be123c,#111827)]",
    },
    {
      name: "World Pack",
      desc: "A global football edition created for tournaments, watch parties, and the biggest nights in the game.",
      tag: "Limited",
      theme: "from-emerald-300/20 to-cyan-300/10",
      art: "bg-[linear-gradient(135deg,#22c55e,#0ea5e9,#111827)]",
    },
  ];

  const sliderImages = [
    { title: "Match-day identity", desc: "Flags, tattoos, and supporter energy before kickoff.", art: "bg-[linear-gradient(135deg,#0f172a,#1d4ed8,#93c5fd)]" },
    { title: "Football passion", desc: "Loud colors, national pride, and tournament emotion.", art: "bg-[linear-gradient(135deg,#111827,#7f1d1d,#f59e0b)]" },
    { title: "Wear your colors", desc: "A visual language made for watch parties and stadium days.", art: "bg-[linear-gradient(135deg,#052e16,#16a34a,#86efac)]" },
    { title: "The world game", desc: "Global football culture turned into wearable symbols.", art: "bg-[linear-gradient(135deg,#3b0764,#a21caf,#f0abfc)]" },
  ];

  const countryImages = useMemo(
    () =>
      Object.fromEntries(
        countries.map((country) => {
          const slug = country.toLowerCase().replace(/\s+/g, "-");
          return [
            country,
            [
              `/images/${slug}/1.png`,
              `/images/${slug}/2.png`,
              `/images/${slug}/3.png`,
              `/images/${slug}/4.png`,
            ],
          ];
        })
      ),
    []
  );

  const faqs = [
    {
      q: "Are Gol Nation tattoos safe for skin?",
      a: "Yes. They are designed for temporary cosmetic use with skin-safe materials.",
    },
    {
      q: "How long do they last?",
      a: "Typically 2–4 days depending on placement, skin type, and activity.",
    },
    {
      q: "Are they waterproof?",
      a: "They are water-resistant and built to handle normal daily activity and match-day celebrations.",
    },
    {
      q: "How do I remove them?",
      a: "Use baby oil, rubbing alcohol, or soap and warm water for quick removal.",
    },
  ];

  const [activeCountry, setActiveCountry] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openCountry = (country) => setActiveCountry(country);
  const closeCountry = () => setActiveCountry(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-white selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-lg font-black">
              GN
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-white/60">Gol Nation</div>
              <div className="text-lg font-semibold">Football Fan Tattoos</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#home" className="text-sm text-white/80 hover:text-white">Home</a>
            <a href="#packs" className="text-sm text-white/80 hover:text-white">Packs</a>
            <a href="#countries" className="text-sm text-white/80 hover:text-white">Countries</a>
            <a href="#apply" className="text-sm text-white/80 hover:text-white">How to Apply</a>
            <a href="#faq" className="text-sm text-white/80 hover:text-white">FAQ</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-white/45">Opening slider</div>
              <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">Feel the match-day energy</h2>
            </div>
            <p className="max-w-2xl text-white/65">
              A real image-style slider at the start of the page, built to feel faster, louder, and more football-driven.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sliderImages.map((item) => (
                <article key={item.title} className="min-w-full">
                  <div className={`relative h-[360px] rounded-[1.5rem] ${item.art} md:h-[480px]`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_24%),linear-gradient(180deg,transparent,rgba(0,0,0,.68))]" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="mb-3 inline-flex rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/70">
                        Football culture
                      </div>
                      <h3 className="text-3xl font-black uppercase md:text-5xl">{item.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">{item.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-xl backdrop-blur hover:bg-black/45"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-xl backdrop-blur hover:bg-black/45"
              aria-label="Next slide"
            >
              ›
            </button>

            <div className="mt-4 flex justify-center gap-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${currentSlide === index ? "w-8 bg-white" : "w-2.5 bg-white/35"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_22%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.05fr_.95fr] md:py-28">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                Football passion, made wearable
              </div>
              <h1 className="max-w-3xl text-5xl font-black uppercase leading-none md:text-7xl">
                Wear the rivalry. <span className="text-white/60">Carry the nation.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
                Gol Nation turns football emotion into premium temporary tattoos inspired by supporters,
                flags, chants, tournaments, and the identity fans bring to every match.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#packs" className="rounded-2xl bg-white px-6 py-3 font-semibold text-black">Explore Packs</a>
                <a href="#countries" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white">See Countries</a>
              </div>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3 text-sm text-white/60">
                <span className="rounded-full border border-white/10 px-3 py-2 text-center">Skin-safe</span>
                <span className="rounded-full border border-white/10 px-3 py-2 text-center">Water-resistant</span>
                <span className="rounded-full border border-white/10 px-3 py-2 text-center">Made for match day</span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-200/20 to-sky-500/10 p-4 shadow-2xl shadow-black/30">
                  <div className="mb-4 h-64 rounded-[1.5rem] bg-[linear-gradient(135deg,#93c5fd,#0f172a)]" />
                  <div className="text-sm uppercase tracking-[0.25em] text-white/50">South American passion</div>
                  <div className="mt-2 text-2xl font-bold">Argentina</div>
                </div>
                <div className="mt-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-red-200/20 to-amber-500/10 p-4 shadow-2xl shadow-black/30 sm:mt-14">
                  <div className="mb-4 h-64 rounded-[1.5rem] bg-[linear-gradient(135deg,#111827,#7f1d1d,#f59e0b)]" />
                  <div className="text-sm uppercase tracking-[0.25em] text-white/50">Tournament identity</div>
                  <div className="mt-2 text-2xl font-bold">Germany</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="packs" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-white/45">Featured packs</div>
              <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">Fan favorites</h2>
            </div>
            <p className="max-w-2xl text-white/65">
              Premium country-inspired tattoos created for kickoff nerves, national pride, stadium rituals, and unforgettable football nights.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredPacks.map((item) => (
              <article key={item.name} className={`group rounded-[2rem] border border-white/10 bg-gradient-to-br ${item.theme} p-4 transition hover:-translate-y-1 hover:border-white/20`}>
                <div className={`mb-4 h-64 rounded-[1.5rem] ${item.art}`} />
                <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/55">
                  {item.tag}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{item.name}</h3>
                <p className="mt-3 text-white/65">{item.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/55">
                  <span className="rounded-full bg-white/5 px-3 py-1">Football culture</span>
                  <span className="rounded-full bg-white/5 px-3 py-1">Supporter energy</span>
                  <span className="rounded-full bg-white/5 px-3 py-1">Country pride</span>
                </div>
                <a
                  href="#contact"
                  className="mt-6 block w-full rounded-2xl bg-white px-4 py-3 text-center font-semibold text-black"
                >
                  Ask about this pack
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="countries" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-10 max-w-3xl">
              <div className="text-sm uppercase tracking-[0.35em] text-white/45">Available countries</div>
              <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">Built for the nations you support</h2>
              <p className="mt-4 text-lg text-white/65">
                Click any country to open a modal with that country’s tattoo images.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => openCountry(country)}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-left transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <div className="mb-4 h-24 rounded-2xl bg-gradient-to-br from-white/12 to-white/5" />
                  <div className="text-2xl font-bold">{country}</div>
                  <div className="mt-2 text-white/60">Tap to view tattoo gallery.</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-white/45">About Gol Nation</div>
              <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">For fans who feel every match</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-white/70">
              <p>
                Gol Nation was created for supporters who do not watch football passively. They live it, wear it, and carry it with them.
              </p>
              <p>
                Every collection is driven by the emotion of football culture: flags in the crowd, pre-match nerves, city pride, rivalries, and the visual power of belonging to a nation or a team.
              </p>
              <p>
                The result is a product line that feels more like supporter expression than ordinary merchandise.
              </p>
            </div>
          </div>
        </section>

        <section id="apply" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm uppercase tracking-[0.35em] text-white/45">How to apply</div>
            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">Ready for kickoff in seconds</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["01", "Clean", "Clean and dry the skin before applying the tattoo."],
              ["02", "Place", "Put the tattoo face-down on the skin."],
              ["03", "Press", "Use a wet cloth or sponge for about 20 seconds."],
              ["04", "Wear", "Peel the paper away and you’re ready for match day."],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-5xl font-black text-white/15">{n}</div>
                <div className="mt-6 text-2xl font-bold">{t}</div>
                <p className="mt-3 text-white/65">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-6 text-white/70">
            Removal: use baby oil, rubbing alcohol, or warm soapy water for easy removal.
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-10 text-center">
            <div className="text-sm uppercase tracking-[0.35em] text-white/45">FAQ</div>
            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">Questions, answered</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold">{item.q}</summary>
                <p className="mt-4 text-white/65">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-white/45">Contact</div>
              <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">Bring Gol Nation to your crowd</h2>
              <p className="mt-5 max-w-2xl text-lg text-white/70">
                Reach out for retail, wholesale, partnerships, or questions about current country packs and future launches.
              </p>
              <div className="mt-6 space-y-3 text-white/75">
                <p>
                  Email:{" "}
                  <a href="mailto:hello@golnation.com" className="underline underline-offset-4">
                    hello@golnation.com
                  </a>
                </p>
                <p>
                  Instagram:{" "}
                  <a href="https://instagram.com/golnation" target="_blank" rel="noreferrer" className="underline underline-offset-4">
                    @golnation
                  </a>
                </p>
                <p>
                  Amazon Store:{" "}
                  <a href="https://amazon.com" target="_blank" rel="noreferrer" className="underline underline-offset-4">
                    Shop now
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6">
              <div className="text-2xl font-bold">Quick links</div>
              <div className="mt-5 space-y-3">
                <a href="mailto:hello@golnation.com" className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                  Email Gol Nation
                </a>
                <a href="https://instagram.com/golnation" target="_blank" rel="noreferrer" className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                  Open Instagram
                </a>
                <a href="https://amazon.com" target="_blank" rel="noreferrer" className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                  Visit Amazon Store
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-2">
          <div>
            <div className="text-2xl font-black uppercase">Gol Nation</div>
            <p className="mt-3 max-w-xl text-white/60">
              Temporary football fan tattoos designed to carry country pride, tournament emotion, and supporter energy into every match day.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["Shop", [["Featured Packs", "#packs"], ["Countries", "#countries"], ["Amazon Store", "https://amazon.com"]]],
              ["Brand", [["About", "#about"], ["Contact", "#contact"], ["Top", "#home"]]],
              ["Help", [["How to Apply", "#apply"], ["FAQ", "#faq"], ["Email", "mailto:hello@golnation.com"]]],
              ["Follow", [["Instagram", "https://instagram.com/golnation"], ["Contact", "#contact"], ["Top", "#home"]]],
            ].map(([title, links]) => (
              <div key={title}>
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">{title}</div>
                <div className="mt-4 space-y-2 text-white/65">
                  {links.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target={String(href).startsWith("http") ? "_blank" : undefined}
                      rel={String(href).startsWith("http") ? "noreferrer" : undefined}
                      className="block hover:text-white"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {activeCountry && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-4">
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-[2rem] border border-white/10 bg-neutral-950 p-5 shadow-2xl">
            <button
              onClick={closeCountry}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl hover:bg-white/10"
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="mb-6 pr-12">
              <div className="text-sm uppercase tracking-[0.35em] text-white/45">Country tattoos</div>
              <h3 className="mt-2 text-3xl font-black uppercase">{activeCountry}</h3>
              <p className="mt-2 text-white/60">
                Replace these placeholders with your live tattoo PNGs inside <span className="font-mono text-white/80">/public/images/{activeCountry.toLowerCase().replace(/\s+/g, "-")}/</span>
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {countryImages[activeCountry].map((src, index) => (
                <div key={src} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                  <img
                    src={src}
                    alt={`${activeCountry} tattoo ${index + 1}`}
                    className="h-72 w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.innerHTML = '<div class="flex h-72 items-center justify-center bg-[linear-gradient(135deg,#111827,#374151)] text-center text-sm text-white/55 px-6">Add ' + activeCountry + ' tattoo image here<br/>Expected file: ' + (index + 1) + '.png</div>';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
