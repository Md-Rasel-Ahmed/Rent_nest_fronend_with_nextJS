import { Property } from "@/app/types/property";
import PropertyCard from "./PropertyCard";
import { getProperties } from "@/utiles/getProperties";



export default async function PropertyGrid() {
  const data=await getProperties()
  return (
    <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {data?.data.map((property:Property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </section>
  );
}