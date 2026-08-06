"use client";

import { useState, useMemo } from "react";
import PropertyGrid from "@/components/properties/PropertyGrid";
import { Property } from "@/app/types/property";

interface PropertyListContainerProps {
  initialData: Property;
}

export default function PropertyListContainer({
  initialData,
}: PropertyListContainerProps) {
  const [sortBy, setSortBy] = useState<string>("Newest");

  const sortedProperties = useMemo(() => {
    const list = initialData.data ? [...initialData.data] : [];

    if (sortBy === "Lowest Price") {
      return list.sort((a, b) => Number(a.rent) - Number(b.rent));
    }

    if (sortBy === "Highest Price") {
      return list.sort((a, b) => Number(b.rent) - Number(a.rent));
    }

    // Default: Newest (ধরে নেওয়া হচ্ছে createdAt ফিল্ড রয়েছে)
    return list.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [initialData.data, sortBy]);

  return (
    <>
      {/* Result Header */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing {sortedProperties.length} Properties
        </p>

        {/* Dropdown with State Listener */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-md border px-3 py-2 bg-background cursor-pointer"
        >
          <option value="Newest">Newest</option>
          <option value="Lowest Price">Lowest Price</option>
          <option value="Highest Price">Highest Price</option>
        </select>
      </div>

      {/* Sorted Properties Grid */}
      <PropertyGrid properties={{ ...initialData, data: sortedProperties }} />
    </>
  );
}