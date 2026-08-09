import {
  Building2,
  CalendarDays,
  Wallet,
  Star,
  ArrowUpRight,
} from "lucide-react";
import  jwt, { JwtPayload }  from 'jsonwebtoken';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cookies } from "next/headers";
import { getLandlordProperties, getRentalRequests } from "@/service/landlord.service";
import { getProperties } from "@/service/getProperties";



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

type LandlordPropertiesResponse = {
  data?: LandlordProperty[];
};
type LandlordPropertyR = {
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
  createdAt:string
};

type LandlordPropertiesResponseR = {
  data?: LandlordPropertyR[];
};
export default async function LandlordDashboardPage() {
  const cookiStore = await cookies();
    const token = cookiStore.get("accessToken")?.value;
    const properties = (await getProperties()) as LandlordPropertiesResponse;
      const decoded=jwt.decode(token??"") as JwtPayload
        const landLordProperty=properties.data?.filter(property=>property.landlordId===decoded.id)
  const requestedProperties = (await getRentalRequests()) as LandlordPropertiesResponseR;
    const stats = [
  {
    title: "Total Properties",
    value: landLordProperty?.length,
    icon: Building2,
  },
  {
    title: "Active Bookings",
    value: requestedProperties.data?.filter(property=>property.status==="ACTIVE").length,
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
              {requestedProperties.data?.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <h3 className="font-medium">
                      {booking.tenant.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {booking.property.title}
                    </p>

                    <p className="text-xs text-muted-foreground mt-1">
                      {booking.createdAt}
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
              {properties.data?.map((property) => (
                <div
                  key={property.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <h3 className="font-medium">
                      {property.title}
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