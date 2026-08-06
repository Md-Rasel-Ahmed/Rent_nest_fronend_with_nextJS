import {
  CalendarDays,
  CreditCard,
  Heart,
  Home,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cookies } from "next/headers";
import { getRentals } from "@/service/rental.service";



const requests = [
  {
    id: 1,
    property: "Luxury Apartment",
    landlord: "John Smith",
    status: "Pending",
  },
  {
    id: 2,
    property: "Studio Flat",
    landlord: "Sarah Khan",
    status: "Approved",
  },
  {
    id: 3,
    property: "Modern Villa",
    landlord: "David Lee",
    status: "Rejected",
  },
];

const activeRentals = [
  {
    id: 1,
    property: "Luxury Apartment",
    rent: "$550 / month",
    nextPayment: "25 Aug 2026",
  },
];

export default async function TenantDashboardPage() {
    const cookiStore = await cookies();
    const token = cookiStore.get("accessToken")?.value;
    // getRentals may return an unknown type; assert a shape with optional data array
    const rentals = (await getRentals(token ?? "")) as { data?: { status?: string }[] };
    const stats = [
  {
    title: "Active Rentals",
    value: rentals.data?.filter(rental=>rental.status==="ACTIVE").length,
    icon: Home,
  },
  {
    title: "Pending Requests",
    value:rentals.data?.filter(rental=>rental.status==="PENDING").length,
    icon: CalendarDays,
  },
   {
    title: "Rejected equests",
    value:rentals.data?.filter(rental=>rental.status==="REJECTED").length,
    icon: CalendarDays,
  },
  {
    title: "Total Payments",
    value: "$2,450",
    icon: CreditCard,
  },
];
    console.log(rentals);
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-muted-foreground">
          Here is an overview of your rental activity.
        </p>
      </div>

      {/* Stats */}

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title}>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h2>
                </div>

                <div className="rounded-xl bg-primary/10 p-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Requests + Active Rental */}

      <section className="grid gap-6 lg:grid-cols-2">
        {/* Recent Requests */}

        {/* <Card>
          <CardContent className="p-6">
            <h2 className="mb-5 text-xl font-semibold">
              Recent Requests
            </h2>

            <div className="space-y-4">
              {rentals.data?.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <h3 className="font-medium">
                      {request.property}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Landlord: {request.landlord}
                    </p>
                  </div>

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
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}

        {/* Active Rentals */}

        {/* <Card>
          <CardContent className="p-6">
            <h2 className="mb-5 text-xl font-semibold">
              Active Rental
            </h2>

            <div className="space-y-4">
              {activeRentals.map((rental) => (
                <div
                  key={rental.id}
                  className="rounded-lg border p-4"
                >
                  <h3 className="font-semibold">
                    {rental.property}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Monthly Rent: {rental.rent}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Next Payment: {rental.nextPayment}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}
      </section>
    </div>
  );
}