import Link from "next/link";
import {
  Building2,
  Home,
  Hotel,
  Building,
  Warehouse,
  Trees,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Apartment",
    properties: "1,250+ Properties",
    href: "/properties?category=apartment",
    icon: Building2,
  },
  {
    id: 2,
    title: "House",
    properties: "860+ Properties",
    href: "/properties?category=house",
    icon: Home,
  },
  {
    id: 3,
    title: "Villa",
    properties: "420+ Properties",
    href: "/properties?category=villa",
    icon: Trees,
  },
  {
    id: 4,
    title: "Office",
    properties: "310+ Properties",
    href: "/properties?category=office",
    icon: Building,
  },
  {
    id: 5,
    title: "Studio",
    properties: "540+ Properties",
    href: "/properties?category=studio",
    icon: Hotel,
  },
  {
    id: 6,
    title: "Commercial",
    properties: "210+ Properties",
    href: "/properties?category=commercial",
    icon: Warehouse,
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full border px-4 py-2 text-sm font-medium text-primary">
            Browse Categories
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
            Find the Right Property Type
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Explore a wide range of verified rental properties tailored to your
            lifestyle and budget.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                href={category.href}
                className="group rounded-3xl border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <Icon className="h-8 w-8 text-primary transition-colors group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {category.title}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {category.properties}
                </p>

                <div className="mt-8 flex items-center text-sm font-medium text-primary">
                  Explore Category
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}