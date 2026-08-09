import {
  Eye,
  Pencil,
  Search,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import  jwt, { JwtPayload }  from 'jsonwebtoken';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getLandlordProperties } from "@/service/landlord.service";
import { cookies } from "next/headers";
import AddPropertyModal from "@/components/dashboard/AddPropertyModal";
import DeleteProperty from "@/components/DeleteProperty";
import UpdatePropertyModal from "@/components/properties/UpdatePropertyModal";
import { getProperties } from "@/service/getProperties";

type LandlordProperty = {
  id: string;
  title: string;
  location: string;
  rent: string;
  isAvailable:boolean,
  address:string,
  city:string,
  landlordId:string
};
type Property = {
  id: string;
  title: string;
  location: string;
  rent: string;
  isAvailable:boolean,
  address:string,
  city:string,
  landlordId:string
};

type LandlordPropertiesResponse = {
  data?: Property[];
};

export default async function MyPropertiesPage() {
  const cookiStore = await cookies();
  const token = cookiStore.get("accessToken")?.value;
  const properties = (await getLandlordProperties()) as LandlordPropertiesResponse;
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

        <AddPropertyModal token={token??""}/>
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
            {properties.data?.map((property) => (
              <tr
                key={property.id}
                className="border-t"
              >
                <td className="px-6 py-5 font-medium">
                  {property.title}
                </td>

                <td className="px-6 py-5">
                  {property.address}
                </td>

                <td className="px-6 py-5">
                  {property.rent}
                </td>

                <td className="px-6 py-5">
                  <Badge
                    variant={
                      property.isAvailable?"secondary":"default"
                    }
                  >
                    {property.isAvailable?"Available":"Not Available"}
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

                   <UpdatePropertyModal property={property.title} id={property.id} token={token??""}location={property.address}rent={property.rent}></UpdatePropertyModal>

                    <DeleteProperty id={property.id} token={token??""}propertyTitle={property.title}/>
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