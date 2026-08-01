"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PropertyFilter() {
  return (
    <section className="mb-10 rounded-2xl border bg-background p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {/* Search */}

        <Input
          placeholder="Search property..."
          className="h-11"
        />

        {/* Category */}

        <select className="h-11 rounded-md border bg-background px-3">
          <option>All Categories</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Villa</option>
          <option>Studio</option>
          <option>Commercial</option>
        </select>

        {/* City */}

        <select className="h-11 rounded-md border bg-background px-3">
          <option>All Cities</option>
          <option>Dhaka</option>
          <option>Chattogram</option>
          <option>Sylhet</option>
          <option>Khulna</option>
        </select>

        {/* Price */}

        <select className="h-11 rounded-md border bg-background px-3">
          <option>Price Range</option>
          <option>$100 - $300</option>
          <option>$300 - $500</option>
          <option>$500 - $800</option>
          <option>$800+</option>
        </select>

        {/* Bedrooms */}

        <select className="h-11 rounded-md border bg-background px-3">
          <option>Bedrooms</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
          <option>4+</option>
        </select>

        {/* Button */}

        <Button className="h-11 w-full">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </section>
  );
}