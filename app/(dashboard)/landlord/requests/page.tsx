import {
  Eye,
  Pencil,
  Search,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const requests = [
  {
    id: 1,
    tenant: "John Doe",
    property: "Luxury Apartment",
    phone: "+8801712345678",
    rent: "$500",
    moveIn: "20 Aug 2026",
    status: "Pending",
  },
  {
    id: 2,
    tenant: "Sarah Khan",
    property: "Modern Villa",
    phone: "+8801812345678",
    rent: "$850",
    moveIn: "25 Aug 2026",
    status: "Approved",
  },
  {
    id: 3,
    tenant: "Alex Smith",
    property: "Studio Flat",
    phone: "+8801912345678",
    rent: "$300",
    moveIn: "01 Sep 2026",
    status: "Rejected",
  },
];

export default function RentalRequestsPage() {
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
            {requests.map((request) => (
              <tr
                key={request.id}
                className="border-t"
              >
                <td className="px-6 py-5 font-medium">
                  {request.tenant}
                </td>

                <td className="px-6 py-5">
                  {request.property}
                </td>

                <td className="px-6 py-5">
                  {request.phone}
                </td>

                <td className="px-6 py-5">
                  {request.rent}
                </td>

                <td className="px-6 py-5">
                  {request.moveIn}
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

                    <Button
                      size="icon"
                      variant="outline"
                    >
                      <Pencil className="h-4 w-4" />
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