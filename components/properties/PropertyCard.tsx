import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  BedDouble,
  Heart,
  MapPin,
  Maximize,
  BadgeCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PropertyType } from "@/app/types/property";

interface Props {
  property: PropertyType;
}

export default function PropertyCard({ property }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-background transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.city||`/images/rental_house.jpg`}
          alt={property.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow">
          <Heart className="h-5 w-5" />
        </button>

        {property.isAvailable && (
          <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
            <BadgeCheck className="h-4 w-4" />
            Verified
          </div>
        )}
      </div>

      {/* Content */}

      <div className="space-y-4 p-6">
        <div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Special
          </span>

          <h2 className="mt-3 text-2xl font-semibold">
            {property.title}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />

            <span>
              {property.address}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 border-y py-4 text-sm">
          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4 text-primary" />
            {property.bedrooms} Beds
          </div>

          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4 text-primary" />
            {property.bathrooms} Bath
          </div>

          <div className="flex items-center gap-2">
            <Maximize className="h-4 w-4 text-primary" />
            {property.area} sqft
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-primary">
              ${property.rent}
            </h3>

            <p className="text-sm text-muted-foreground">
              / month
            </p>
          </div>

          <Button >
            <Link href={`/properties/${property.id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}