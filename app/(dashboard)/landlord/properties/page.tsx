import {
  Eye,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const properties = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Dhaka",
    rent: "$550 / month",
    status: "Available",
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Khulna",
    rent: "$900 / month",
    status: "Rented",
  },
  {
    id: 3,
    title: "Studio Flat",
    location: "Sylhet",
    rent: "$300 / month",
    status: "Pending",
  },
];

export default function MyPropertiesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            My Properties
          </h1>

          <p className="text-muted-foreground">
            Manage all your rental properties.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>

      {/* Search */}

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search property..."
          className="pl-10"
        />
      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-4 text-left">
                Property
              </th>

              <th className="px-6 py-4 text-left">
                Location
              </th>

              <th className="px-6 py-4 text-left">
                Rent
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {properties.map((property) => (
              <tr
                key={property.id}
                className="border-t"
              >
                <td className="px-6 py-5 font-medium">
                  {property.title}
                </td>

                <td className="px-6 py-5">
                  {property.location}
                </td>

                <td className="px-6 py-5">
                  {property.rent}
                </td>

                <td className="px-6 py-5">
                  <Badge
                    variant={
                      property.status === "Available"
                        ? "default"
                        : property.status === "Rented"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {property.status}
                  </Badge>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>

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