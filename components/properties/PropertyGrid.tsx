import { Property } from "@/app/types/property";
import PropertyCard from "./PropertyCard";


export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment",
    image: "/images/property-1.jpg",
    city: "Dhaka",
    location: "Banani",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    price: 450,
    verified: true,
  },
  {
    id: "2",
    title: "Luxury Villa",
    image: "/images/property-2.jpg",
    city: "Sylhet",
    location: "Zindabazar",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    price: 900,
    verified: true,
  },
];
export default function PropertyGrid() {
  return (
    <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </section>
  );
}