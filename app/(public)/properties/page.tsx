import { Property } from "@/app/types/property";
import PropertyFilter from "@/components/properties/PropertyFilter";
import PropertyGrid from "@/components/properties/PropertyGrid";
import PropertyListContainer from "@/components/properties/PropertyListContainer";
import { getProperties } from "@/service/getProperties";

export default async function  PropertiesPage() {
  const data=(await getProperties() as Property)

    return (
    <main className="container mx-auto py-20">
      {/* Heading */}

      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Explore Properties
        
        </h1>
        <p className="mt-4 text-muted-foreground">
          Discover verified apartments, houses, villas and offices.
        </p>
      </div>

      {/* Filter */}

      {/* <PropertyFilter /> */}

      {/* Result */}
       
      
       <PropertyListContainer initialData={data} />

      {/* Grid */}

      {/* <PropertyGrid properties={data} /> */}
    </main>
  );
}