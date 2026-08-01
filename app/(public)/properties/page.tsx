import PropertyFilter from "@/components/properties/PropertyFilter";
import PropertyGrid from "@/components/properties/PropertyGrid";

export default function PropertiesPage() {
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

      <PropertyFilter />

      {/* Result */}

      <div className="mb-6 flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing 24 Properties
        </p>

        <select className="rounded-md border px-3 py-2">
          <option>Newest</option>
          <option>Lowest Price</option>
          <option>Highest Price</option>
        </select>
      </div>

      {/* Grid */}

      <PropertyGrid />
    </main>
  );
}