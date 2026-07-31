"use client"
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, ArrowRight } from "lucide-react";
import StatsCounter from "@/components/shared/StatsCounter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {motion} from "framer-motion"
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-sky-400/10 blur-[120px]" />

      <div className="container relative mx-auto px-4 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="inline-flex items-center rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm">
              🏡 Trusted by 10,000+ Happy Tenants
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight lg:text-7xl">
              Find Your
              <span className="block text-primary">
                Perfect Rental Home
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
              Browse verified apartments, family homes and commercial
              properties. Connect directly with trusted landlords and move
              into your next home with confidence.
            </p>

            {/* Search */}
            <div className="mt-10 rounded-3xl border bg-background p-3 shadow-xl">
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="relative flex-1">
                  <MapPin className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />

                  <Input
                    placeholder="Search city, area or property..."
                    className="h-14 border-0 pl-12 shadow-none focus-visible:ring-0"
                  />
                </div>

                <Button className="h-14 rounded-2xl px-8">
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">
                <Link className="flex" href="/properties">
                  Explore Properties
                  <ArrowRight className="ml-2  h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" size="lg">
                <Link href="/register">
                  Become a Landlord
                </Link>
              </Button>
            </div>

            {/* Stats */}
           <div className="grid gap-8 md:grid-cols-4 mt-4">

  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3 }}
>
  <StatsCounter
    end={10}
    suffix="k+"
    title="Properties"
  />
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
> <StatsCounter
    end={8}
    suffix="k+"
    title="Happy Tenants"
  />
</motion.div>
 
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
 <StatsCounter
    end={2}
    suffix="k+"
    title="Landlords"
  />
</motion.div>
 

 
</div>



     </div>

          {/* Right */}
          <div className="relative">
            <div className="relative h-162.5 overflow-hidden rounded-[40px] shadow-2xl">
              <Image
                src="/images/rental_house.jpg"
                alt="Luxury Apartment"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 rounded-3xl border bg-white/95 p-5 shadow-2xl backdrop-blur">
              <p className="text-sm text-muted-foreground">
                Featured Property
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Modern Family Apartment
              </h3>

              <p className="mt-1 text-primary font-semibold">
                $850 / month
              </p>
            </div>

            {/* Review Card */}
            <div className="absolute -right-6 top-10 rounded-3xl border bg-background p-5 shadow-xl">
              <h2 className="text-3xl font-bold">4.9★</h2>
              <p className="text-sm text-muted-foreground">
                Customer Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}