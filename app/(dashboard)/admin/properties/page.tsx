import { Eye, Pencil, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProperties } from "@/service/getProperties";
import { cookies } from "next/headers";
import { getAllProperties } from "@/service/admin.service";
import DeletePropertyButton from "@/components/DeleteProperty";


type LandlordProperty = {
  id: string;
  title: string;
  location: string;
  rent: string;
  isAvailable:boolean,
  address:string,
  city:string
};
type LandlordPropertiesResponse = {
  data?: LandlordProperty[];
};
export default async function AdminPropertiesPage() {
  const cookiStore = await cookies();
      const token = cookiStore.get("accessToken")?.value;
  const properties = (await getAllProperties(token ?? "")) as LandlordPropertiesResponse;

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
                Adress
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
            {properties.data?.map((property) => (
              <tr
                key={property.id}
                className="border-t"
              >
                <td className="px-6 py-5 font-medium">
                  {property.title}
                </td>

                <td className="px-6 py-5">
                  {/* {property.} */}
                  Jhon
                </td>

                <td className="px-6 py-5">
                  {property.address}
                </td>

                <td className="px-6 py-5">
                  {property.rent}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    {property.isAvailable?"Active":"not active"}
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

                   <DeletePropertyButton id={property.id}token={token??""} propertyTitle={property.title}></DeletePropertyButton>
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