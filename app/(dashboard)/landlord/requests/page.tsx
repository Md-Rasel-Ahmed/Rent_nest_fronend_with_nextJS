import {
  Eye,
  Pencil,
  Search,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cookies } from "next/headers";
import { getRentalRequests } from "@/service/landlord.service";
import UpdateStatusModal from "@/components/properties/UpdateStatusModal";


type LandlordProperty = {
  id: string;
  tenant: {
    name: string;
    phone: string;
  };
  property: {
    title: string;
    rent: number;
  };
  moveInDate: string;
  status: string;
};

type LandlordPropertiesResponse = {
  data?: LandlordProperty[];
};
export default async function RentalRequestsPage() {
  const cookiStore = await cookies();
    const token = cookiStore.get("accessToken")?.value;
    const requestedProperties = (await getRentalRequests()) as LandlordPropertiesResponse;
    console.log(requestedProperties)
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Rental Requests
          </h1>

          <p className="text-muted-foreground">
            Review and manage tenant rental requests.
          </p>
        </div>

        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search request..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-4 text-left">Tenant</th>
              <th className="px-6 py-4 text-left">Property</th>
              <th className="px-6 py-4 text-left">Phone</th>
              <th className="px-6 py-4 text-left">Rent</th>
              <th className="px-6 py-4 text-left">Move In</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {requestedProperties.data?.map((request) => (
              <tr
                key={request.id} 
                className="border-t"
              >
                <td className="px-6 py-5 font-medium">
                  {request.tenant.name}
                </td>

                <td className="px-6 py-5">
                  {request.property.title}
                </td>

                <td className="px-6 py-5">
                  {request.tenant.phone}
                </td>

                <td className="px-6 py-5">
                  {request.property.rent}
                </td>

                <td className="px-6 py-5">
                  {request.moveInDate}
                </td>

                <td className="px-6 py-5">
                  <Badge
                    variant={
                      request.status === "Approved"
                        ? "default"
                        : request.status === "Pending"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {request.status}
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

                     <UpdateStatusModal token={token??""} id={request.id}name={request.status}></UpdateStatusModal>

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