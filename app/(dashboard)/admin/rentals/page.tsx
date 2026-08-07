import { Eye, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cookies } from "next/headers";
import { getAllBookings } from "@/service/admin.service";

const rentals = [
  {
    id: 1,
    property: "Luxury Apartment",
    tenant: "John Doe",
    landlord: "Sarah Khan",
    rent: "$500",
    payment: "Paid",
    status: "Active",
  },
  {
    id: 2,
    property: "Modern Villa",
    tenant: "Alex Smith",
    landlord: "David",
    rent: "$850",
    payment: "Pending",
    status: "Pending",
  },
  {
    id: 3,
    property: "Studio Flat",
    tenant: "Michael",
    landlord: "Ahmed",
    rent: "$300",
    payment: "Paid",
    status: "Completed",
  },
];
type BookingType = {
  id: string;
  moveInDate: string;
   status:string,
   payment:[{
    status:string
   }],
  tenant:{
  name:string
 },
 property:{
  title:string,
  rent:string
 }
};
type BookingRes = {
  data?: BookingType[];
};
export default async function RentalsPage() {
   const cookiStore = await cookies();
        const token = cookiStore.get("accessToken")?.value;
       const bookings = (await getAllBookings(token ?? "")) as BookingRes;
        
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Rentals
          </h1>

          <p className="text-muted-foreground">
            Manage all rental records across the platform.
          </p>
        </div>

        <Input
          placeholder="Search rental..."
          className="w-full md:max-w-sm"
        />
      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-xl border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-4 text-left">Property</th>
              <th className="px-6 py-4 text-left">Tenant</th>
              <th className="px-6 py-4 text-left">Landlord</th>
              <th className="px-6 py-4 text-left">Monthly Rent</th>
              <th className="px-6 py-4 text-left">Payment</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.data?.map((rental) => (
              <tr
                key={rental?.id}
                className="border-t"
              >
                <td className="px-6 py-5 font-medium">
                  {rental.property?.title}
                </td>

                <td className="px-6 py-5">
                  {rental.tenant?.name}
                </td>

                <td className="px-6 py-5">
                  {/* {rental.landlord} */}
                  Jhon
                </td>

                <td className="px-6 py-5">
                  {rental.property?.rent}
                </td>

                <td className="px-6 py-5">
                  {/* <Badge
                    variant={
                      rental.payment[0]?.status === "SUCCESS"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {rental.payment[0]?.status}
                  </Badge> */}
                  paid
                </td>
{/* RENTAL APPROVED WILL IMPLIMENT LETTER */}
                <td className="px-6 py-5">
                  <Badge
                    variant={
                      rental?.status === "ACTIVE"
                        ? "default"
                        : rental?.status === "Pending"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {rental?.status}
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