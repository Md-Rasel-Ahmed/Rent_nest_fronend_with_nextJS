import {
  Building2,
  CalendarDays,
  Wallet,
  Star,
  ArrowUpRight,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Properties",
    value: "12",
    icon: Building2,
  },
  {
    title: "Active Bookings",
    value: "28",
    icon: CalendarDays,
  },
  {
    title: "Total Earnings",
    value: "$8,450",
    icon: Wallet,
  },
  {
    title: "Average Rating",
    value: "4.9",
    icon: Star,
  },
];

const recentBookings = [
  {
    id: 1,
    tenant: "John Doe",
    property: "Luxury Apartment",
    date: "20 Aug 2026",
    status: "Confirmed",
  },
  {
    id: 2,
    tenant: "Sarah Khan",
    property: "Studio Flat",
    date: "18 Aug 2026",
    status: "Pending",
  },
  {
    id: 3,
    tenant: "Alex Smith",
    property: "Family House",
    date: "15 Aug 2026",
    status: "Completed",
  },
];

const recentProperties = [
  {
    id: 1,
    name: "Luxury Apartment",
    location: "Dhaka",
    rent: "$450 / month",
  },
  {
    id: 2,
    name: "Modern Villa",
    location: "Khulna",
    rent: "$700 / month",
  },
  {
    id: 3,
    name: "Studio Room",
    location: "Sylhet",
    rent: "$250 / month",
  },
];

export default function LandlordDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-muted-foreground">
          Here is an overview of your rental business.
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

      {/* Recent Bookings */}

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-5 text-xl font-semibold">
              Recent Bookings
            </h2>

            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <h3 className="font-medium">
                      {booking.tenant}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {booking.property}
                    </p>

                    <p className="text-xs text-muted-foreground mt-1">
                      {booking.date}
                    </p>
                  </div>

                  <Badge>
                    {booking.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My Properties */}

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-5 text-xl font-semibold">
              My Properties
            </h2>

            <div className="space-y-4">
              {recentProperties.map((property) => (
                <div
                  key={property.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <h3 className="font-medium">
                      {property.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {property.location}
                    </p>

                    <p className="text-sm font-medium mt-1">
                      {property.rent}
                    </p>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}