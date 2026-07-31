import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cities = [
  {
    name: "Dhaka",
    properties: "2,450+ Properties",
    image: "/images/cities/dhaka.jpg",
    href: "/properties?city=dhaka",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Sylhet",
    properties: "420+ Properties",
    image: "/images/cities/sylhet.jpg",
    href: "/properties?city=sylhet",
  },
  {
    name: "Khulna",
    properties: "310+ Properties",
    image: "/images/cities/khulna.jpg",
    href: "/properties?city=khulna",
  },
  {
    name: "Chattogram",
    properties: "960+ Properties",
    image: "/images/cities/chattogram.jpg",
    href: "/properties?city=chattogram",
  },
  {
    name: "Rajshahi",
    properties: "280+ Properties",
    image: "/images/cities/rajshahi.jpg",
    href: "/properties?city=rajshahi",
  },
];

export default function PopularCitiesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border px-4 py-2 text-sm font-medium text-primary">
            Popular Locations
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Discover Properties Across Bangladesh
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Browse rental properties in the countries most popular cities.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-60 gap-6 md:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className={`group relative overflow-hidden rounded-3xl ${city.className || ""}`}
            >
              <Image
                src={city.image}
                alt={city.name}
                fill
                priority
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width:768px)100vw,50vw"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition group-hover:from-black/90" />

              <div className="absolute bottom-6 left-6 z-10 text-white">
                <h3 className="text-3xl font-bold">
                  {city.name}
                </h3>

                <p className="mt-2 text-white/80">
                  {city.properties}
                </p>
              </div>

              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur transition group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}