import { Property } from "@/app/types/property";
import PropertyCard from "./PropertyCard";



export default async function PropertyGrid({properties}:{properties:Property}) {
  return (
    <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {properties.data?.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </section>
  );
}