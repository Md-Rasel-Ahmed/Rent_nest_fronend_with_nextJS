import { Eye, Home } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const rentals = [
  {
    id: 1,
    property: "Luxury Apartment",
    landlord: "John Doe",
    location: "Dhaka",
    rent: "$550 / month",
    startDate: "01 Jan 2026",
    endDate: "31 Dec 2026",
    status: "Active",
  },
  {
    id: 2,
    property: "Studio Flat",
    landlord: "Sarah Khan",
    location: "Khulna",
    rent: "$300 / month",
    startDate: "01 Mar 2025",
    endDate: "31 Dec 2025",
    status: "Completed",
  },
  {
    id: 3,
    property: "Modern Villa",
    landlord: "David Lee",
    location: "Sylhet",
    rent: "$850 / month",
    startDate: "15 Feb 2026",
    endDate: "-",
    status: "Pending",
  },
];

export default function TenantRentalsPage() {
  return (
    <div className="space-y-6">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          My Rentals
        </h1>

        <p className="text-muted-foreground">
          View all your current and previous rental properties.
        </p>
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
                Landlord
              </th>

              <th className="px-6 py-4 text-left">
                Location
              </th>

              <th className="px-6 py-4 text-left">
                Monthly Rent
              </th>

              <th className="px-6 py-4 text-left">
                Start Date
              </th>

              <th className="px-6 py-4 text-left">
                End Date
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {rentals.map((rental) => (
              <tr
                key={rental.id}
                className="border-t"
              >
                <td className="px-6 py-5 font-medium">
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5 text-primary" />
                    {rental.property}
                  </div>
                </td>

                <td className="px-6 py-5">
                  {rental.landlord}
                </td>

                <td className="px-6 py-5">
                  {rental.location}
                </td>

                <td className="px-6 py-5">
                  {rental.rent}
                </td>

                <td className="px-6 py-5">
                  {rental.startDate}
                </td>

                <td className="px-6 py-5">
                  {rental.endDate}
                </td>

                <td className="px-6 py-5">
                  <Badge
                    variant={
                      rental.status === "Active"
                        ? "default"
                        : rental.status === "Pending"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {rental.status}
                  </Badge>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <Button
                      size="icon"
                      variant="outline"
                    >
                      <Eye className="h-4 w-4" />
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