import { Pencil, Plus, Search, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  {
    id: 1,
    name: "Apartment",
    properties: 120,
    createdAt: "12 Jul 2026",
  },
  {
    id: 2,
    name: "House",
    properties: 82,
    createdAt: "15 Jul 2026",
  },
  {
    id: 3,
    name: "Villa",
    properties: 35,
    createdAt: "20 Jul 2026",
  },
  {
    id: 4,
    name: "Studio",
    properties: 64,
    createdAt: "28 Jul 2026",
  },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Categories
          </h1>

          <p className="text-muted-foreground">
            Manage property categories.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Search */}

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search category..."
          className="pl-10"
        />
      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-4 text-left">
                Category
              </th>

              <th className="px-6 py-4 text-left">
                Properties
              </th>

              <th className="px-6 py-4 text-left">
                Created
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <tr
                key={category.id}
                className="border-t"
              >
                <td className="px-6 py-5 font-medium">
                  {category.name}
                </td>

                <td className="px-6 py-5">
                  {category.properties}
                </td>

                <td className="px-6 py-5">
                  {category.createdAt}
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>

                    <Button
                      size="icon"
                      variant="destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}