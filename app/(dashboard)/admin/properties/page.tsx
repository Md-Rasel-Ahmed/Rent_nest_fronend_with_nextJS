import { Eye, Pencil, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProperties } from "@/utiles/getProperties";

const propertiess = [
  {
    id: 1,
    title: "Luxury Apartment",
    landlord: "John Doe",
    city: "Dhaka",
    price: "$500",
    status: "Published",
  },
  {
    id: 2,
    title: "Modern Villa",
    landlord: "Sarah Khan",
    city: "Sylhet",
    price: "$850",
    status: "Pending",
  },
  {
    id: 3,
    title: "Studio Room",
    landlord: "Alex",
    city: "Khulna",
    price: "$300",
    status: "Published",
  },
];
export default async function AdminPropertiesPage() {
 const properties:[{id:string,title:string,landlord:string,city:string,price:string,status:string}]=await getProperties()
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Properties
          </h1>

          <p className="text-muted-foreground">
            Manage all rental properties.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>

      {/* Search */}

      <Input
        placeholder="Search property..."
        className="max-w-md"
      />

      {/* Table */}

      <div className="overflow-hidden rounded-xl border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-4 text-left">
                Property
              </th>

              <th className="px-6 py-4 text-left">
                Landlord
              </th>

              <th className="px-6 py-4 text-left">
                City
              </th>

              <th className="px-6 py-4 text-left">
                Price
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
            {properties?.map((property) => (
              <tr
                key={property.id}
                className="border-t"
              >
                <td className="px-6 py-5 font-medium">
                  {property.title}
                </td>

                <td className="px-6 py-5">
                  {property.landlord}
                </td>

                <td className="px-6 py-5">
                  {property.city}
                </td>

                <td className="px-6 py-5">
                  {property.price}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    {property.status}
                  </span>
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