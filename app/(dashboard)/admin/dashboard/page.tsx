import {
  Building2,
  CalendarDays,
  DollarSign,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { getUsers } from "@/utiles/getUser";
import { cookies } from "next/headers";
import { getAllBookings, getAllProperties, getAllUsers } from "@/service/admin.service";


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
]
type UserType={
  id:string,
  name:string,
  email:string,
  phone:string,
  role:string,
  status:string,
  createdAt:string
 
}
type LandlordProperty = {
  id: string;
  title: string;
  location: string;
  rent: string;
  isAvailable:boolean,
  address:string,
  city:string
};
type BookingType = {
  id: string;
  moveInDate: string;
   status:string,
  tenant:{
  name:string
 },
 property:{
  title:string
 }
};
type LandlordPropertiesResponse = {
  data?: LandlordProperty[];
};
type BookingRes = {
  data?: BookingType[];
};
type Tuser = {
  data?: UserType[];
};
export default async function AdminDashboardPage() {
  const cookiStore = await cookies();
    const token = cookiStore.get("accessToken")?.value;
    const users = (await getAllUsers(token ?? "")) as Tuser;
     const properties = (await getAllProperties(token ?? "")) as LandlordPropertiesResponse;
     const bookings = (await getAllBookings(token ?? "")) as BookingRes;
    
    const stats = [
  {
    title: "Total Users",
    value: users.data?.length,
    icon: Users,
  },
  {
    title: "Properties",
    value: properties.data?.length,
    icon: Building2,
  },
  {
    title: "Bookings",
    value: bookings.data?.length,
    icon: CalendarDays,
  },
  {
    title: "Revenue",
    value: "$18,540",
    icon: DollarSign,
  },
];
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
              {bookings.data?.slice(0,3).map((booking) => (
                <div
                  key={booking?.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <h3 className="font-medium">
                      {booking.tenant?.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {booking.property?.title}
                    </p>
                  </div>

                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    {booking?.status}
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
              {users.data?.map((user) => (
                <div
                  key={user?.id}
                  className="rounded-lg border p-4"
                >
                  {user?.name}
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
            {properties.data?.slice(0,3).map((property) => (
              <div
                key={property?.id}
                className="rounded-lg border p-5"
              >
                <h3 className="font-medium">
                  {property?.title}
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