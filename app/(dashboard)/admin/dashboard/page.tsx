import {
  Building2,
  CalendarDays,
  DollarSign,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { getUsers } from "@/utiles/getUser";
const stats = [
  {
    title: "Total Users",
    value: 5,
    icon: Users,
  },
  {
    title: "Properties",
    value: "856",
    icon: Building2,
  },
  {
    title: "Bookings",
    value: "432",
    icon: CalendarDays,
  },
  {
    title: "Revenue",
    value: "$18,540",
    icon: DollarSign,
  },
];

const recentBookings = [
  {
    tenant: "John Doe",
    property: "Luxury Apartment",
    status: "Confirmed",
  },
  {
    tenant: "Sarah Khan",
    property: "Modern Villa",
    status: "Pending",
  },
  {
    tenant: "Alex Smith",
    property: "Studio Room",
    status: "Completed",
  },
];

const recentUsers = [
  "John Doe",
  "Sarah Khan",
  "Alex Smith",
  "Michael",
];

const latestProperties = [
  "Luxury Apartment",
  "Modern Villa",
  "Family House",
  "Studio Flat",
];

export default async function AdminDashboardPage() {
//  const users=await getUsers()
  // console.log(users);
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-muted-foreground">
          Here is what is happening in RentNest today.
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

      {/* Recent Activity */}

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-5 text-xl font-semibold">
              Recent Bookings
            </h2>

            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking.tenant}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <h3 className="font-medium">
                      {booking.tenant}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {booking.property}
                    </p>
                  </div>

                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-5 text-xl font-semibold">
              Recent Users
            </h2>

            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div
                  key={user}
                  className="rounded-lg border p-4"
                >
                  {user}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Latest Properties */}

      <Card>
        <CardContent className="p-6">
          <h2 className="mb-5 text-xl font-semibold">
            Latest Properties
          </h2>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {latestProperties.map((property) => (
              <div
                key={property}
                className="rounded-lg border p-5"
              >
                <h3 className="font-medium">
                  {property}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Recently added property
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}