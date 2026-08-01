import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ShieldCheck,
  Users,
  Search,
  Target,
  Eye,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Listings",
    description: "Every property is reviewed before being published.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description: "Safe and transparent experience for tenants and landlords.",
  },
  {
    icon: Search,
    title: "Easy Search",
    description: "Find properties quickly using smart filters.",
  },
  {
    icon: Users,
    title: "Trusted Community",
    description: "Connecting thousands of tenants with landlords.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}

      <section className="border-b bg-muted/30">
        <div className="container mx-auto grid items-center gap-16 px-4 py-24 lg:grid-cols-2">
          <div>
            <span className="rounded-full border bg-background px-4 py-2 text-sm font-medium">
              About RentNest
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-6xl">
              Finding Your Perfect Home Starts Here.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              RentNest is a modern rental marketplace that connects tenants and
              landlords through verified property listings, secure
              communication, and a simple rental experience.
            </p>

            <div className="mt-10 flex gap-4">
              <Button  size="lg">
                <Link href="/properties">
                  Browse Properties
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                
                size="lg"
                variant="outline"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="/images/about/about.jpg"
              alt="About RentNest"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}

      <section className="container mx-auto grid gap-12 px-4 py-24 lg:grid-cols-2">
        <div>
          <p className="font-semibold text-primary">
            OUR STORY
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            We Make Renting Simple.
          </h2>

          <p className="mt-6 leading-8 text-muted-foreground">
            Renting a home should be simple—not stressful. RentNest was created
            to simplify the rental journey by bringing verified listings,
            trusted landlords, and modern technology together in one platform.
          </p>

          <p className="mt-5 leading-8 text-muted-foreground">
            Whether you are searching for your first apartment or listing
            multiple rental properties, RentNest provides a seamless experience
            from start to finish.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardContent className="flex gap-4 p-6">
              <Target className="h-10 w-10 text-primary" />

              <div>
                <h3 className="text-xl font-semibold">
                  Our Mission
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Make property renting faster, safer, and easier for everyone.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex gap-4 p-6">
              <Eye className="h-10 w-10 text-primary" />

              <div>
                <h3 className="text-xl font-semibold">
                  Our Vision
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Become the most trusted rental marketplace in Bangladesh.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}

      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold text-primary">
              WHY RENTNEST
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Why People Choose RentNest
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Everything you need to discover your next rental home in one
              trusted platform.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  className="transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-8 rounded-3xl border p-12 text-center md:grid-cols-4">
          <div>
            <h2 className="text-5xl font-bold text-primary">
              10K+
            </h2>

            <p className="mt-3 text-muted-foreground">
              Properties
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-primary">
              8K+
            </h2>

            <p className="mt-3 text-muted-foreground">
              Happy Tenants
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-primary">
              2K+
            </h2>

            <p className="mt-3 text-muted-foreground">
              Landlords
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-primary">
              99%
            </h2>

            <p className="mt-3 text-muted-foreground">
              Satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="container mx-auto px-4 pb-24">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <Building2 className="mx-auto h-12 w-12" />

          <h2 className="mt-6 text-4xl font-bold">
            Ready to Find Your Next Home?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Explore verified rental properties and connect with trusted
            landlords today.
          </p>

          <Button
            
            variant="secondary"
            size="lg"
            className="mt-8"
          >
            <Link href="/properties">
              Explore Properties
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}