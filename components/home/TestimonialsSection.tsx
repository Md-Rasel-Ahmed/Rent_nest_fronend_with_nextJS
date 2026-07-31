import Image from "next/image";
import { Star } from "lucide-react";
import StatsCounter from "../shared/StatsCounter";

const testimonials = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Software Engineer",
    image: "/images/user_1.jpg",
    review:
      "RentNest made finding my apartment incredibly easy. I connected directly with the landlord and completed everything within two days.",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "UI/UX Designer",
    image: "/images/user_1.jpg",
    review:
      "The verified listings gave me confidence. The whole experience was smooth, transparent, and stress-free.",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Business Owner",
    image: "/images/user_1.jpg",
    review:
      "I listed my property on RentNest and found reliable tenants much faster than expected. Highly recommended.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border px-4 py-2 text-sm font-medium text-primary">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
            Loved by Renters & Landlords
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Thousands of people trust RentNest to discover verified rental
            properties and connect with reliable landlords.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 leading-8 text-muted-foreground">
                {item.review}
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-16 rounded-3xl border bg-muted/40 p-10">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="text-3xl font-bold">
                Join Thousands of Happy Users
              </h3>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                Whether you are searching for your next home or listing a
                property, RentNest helps you connect with confidence.
              </p>
            </div>

            <div className="flex gap-10">
               
              <div>
                <h2 className="text-4xl font-bold text-primary">4.9</h2>
                <p className="text-muted-foreground">
                  Average Rating
                </p>
              </div>
 <StatsCounter
                    end={15}
                    suffix="k+"
                    title="Happy Users"
                  />
              <div>
                <h2 className="text-4xl font-bold text-primary">15K+</h2>
                <p className="text-muted-foreground">
                  Happy Users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}