import {
  Search,
  MessageSquareMore,
  CalendarCheck2,
  House,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Search Properties",
    description:
      "Browse verified apartments, houses, villas, and commercial spaces using powerful search and filters.",
    icon: Search,
  },
  {
    id: "02",
    title: "Contact the Landlord",
    description:
      "View property details and connect directly with landlords to ask questions or discuss availability.",
    icon: MessageSquareMore,
  },
  {
    id: "03",
    title: "Schedule a Visit",
    description:
      "Book a convenient time to visit the property and make sure it matches your expectations.",
    icon: CalendarCheck2,
  },
  {
    id: "04",
    title: "Move Into Your Home",
    description:
      "Complete the rental process and move into your new home with confidence.",
    icon: House,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border px-4 py-2 text-sm font-medium text-primary">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
            Renting a Home Has Never Been Easier
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Follow four simple steps to find, visit, and rent your next home
            through RentNest.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-border lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="group relative rounded-3xl border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
                >
                  {/* Step Number */}
                  <div className="absolute right-6 top-6 text-5xl font-black text-muted/30">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
                    <Icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-20 rounded-3xl border bg-muted/40 p-8 lg:p-12">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="text-3xl font-bold">
                Start Your Rental Journey Today
              </h3>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                Thousands of renters use RentNest every day to discover verified
                properties and connect with trusted landlords across the country.
              </p>
            </div>

            <a
              href="/properties"
              className="rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
            >
              Browse Properties →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}