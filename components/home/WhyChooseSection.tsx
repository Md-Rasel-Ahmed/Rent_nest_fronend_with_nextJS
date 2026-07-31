import {
  BadgeCheck,
  ShieldCheck,
  Clock3,
  Headphones,
} from "lucide-react";
import StatsCounter from "../shared/StatsCounter";

const features = [
  {
    title: "Verified Listings",
    description:
      "Every property is reviewed to help you browse genuine and trustworthy rental listings.",
    icon: BadgeCheck,
  },
  {
    title: "Secure & Transparent",
    description:
      "Connect with landlords confidently through a reliable and transparent rental process.",
    icon: ShieldCheck,
  },
  {
    title: "Quick Property Search",
    description:
      "Find apartments, houses, villas, and offices in minutes using smart filters.",
    icon: Clock3,
  },
  {
    title: "Dedicated Support",
    description:
      "Our support team is here to assist tenants and landlords whenever they need help.",
    icon: Headphones,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border px-4 py-2 text-sm font-medium text-primary">
            Why Choose RentNest
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
            Renting Made Simple, Secure & Reliable
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Whether you are searching for your next home or listing a property,
            RentNest gives you a smooth and trusted rental experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
                  <Icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 rounded-3xl border bg-primary/5 p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-3xl font-bold">
                Thousands of People Trust RentNest
              </h3>

              <p className="mt-4 text-muted-foreground leading-7">
                From first-time renters to experienced landlords, RentNest
                provides a secure platform to discover verified properties,
                connect directly, and make confident rental decisions.
              </p>
            </div>
 <div className="grid grid-cols-2 gap-6">

 <StatsCounter
    end={10}
    suffix="k+"
    title=" Verified Properties"
  />
 <StatsCounter
    end={8}
    suffix="k+"
    title="Happy Tenants"
  />
 <StatsCounter
    end={2}
    suffix="k+"
    title="Trusted Landlords"
  />
 <StatsCounter
    end={99}
    suffix="k+"
    title="Customer Satisfaction"
  />
 

 
</div>
          
          </div>
        </div>
      </div>
    </section>
  );
}