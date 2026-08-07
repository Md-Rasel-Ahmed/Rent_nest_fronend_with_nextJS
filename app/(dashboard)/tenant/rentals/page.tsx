import { Eye, Home } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import { getRentals } from "@/service/rental.service";
import Link from "next/link";
import PaymentButton from "@/components/PaymentProcess";


type Rental={
  id:string,
  moveInDate:string,
  status:string,
  property:{
    title:string,
    rent:string,
    address:string
  }
}
type Property={
  data?:Rental[]

}
export default async function TenantRentalsPage() {
  const cookiStore = await cookies();
      const token = cookiStore.get("accessToken")?.value;
      const rentals=(await getRentals(token??""))as Property
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
            {rentals.data?.map((rental) => (
              <tr
                key={rental?.id}
                className="border-t"
              >
                <td className="px-6 py-5 font-medium">
                  <div className="flex items-center gap-3">
                    {/* <Home className="h-5 w-5 text-primary" /> */}
                    {rental.property?.title}
                  </div>
                </td>

                <td className="px-6 py-5">
                  Jhon
                </td>

                <td className="px-6 py-5">
                  {rental.property?.address}
                </td>

                <td className="px-6 py-5">
                  {rental.property?.rent}
                </td>

                <td className="px-6 py-5">
                  {rental?.moveInDate}
                </td>

                <td className="px-6 py-5">
                  {rental?.moveInDate+10}
                </td>

                <td className="px-6 py-5">
                  {rental?.status==="APPROVED"&& <PaymentButton token={token??""}bookingId={rental.id}amount={rental.property?.rent}></PaymentButton>}
                  {rental?.status==="COMPLETED"&& <Link href={"/tenatn/rentals/make-review"}><Badge variant={"destructive"}>Make Review</Badge></Link>}
                  <Badge
                    variant={
                      rental?.status === "ACTIVE"
                        ? "default"
                        : rental.status === "PENDING"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {rental?.status}
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