import {
  CalendarDays,
  CreditCard,
  Home,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getMe } from "@/utiles/getMe";
import EditProfileModal from "@/components/dashboard/EditProfileModal";

export default async function TenantProfilePage() {
  const userProfile=await getMe()
  console.log(userProfile);
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="text-muted-foreground">
          View and manage your personal information.
        </p>
      </div>

      {/* Profile */}

      <div className="grid gap-8 lg:grid-cols-3">
        <Card>
          <CardContent className="flex flex-col items-center p-8">
            <Avatar className="h-28 w-28">
              <AvatarFallback className="text-3xl">
                RA
              </AvatarFallback>
            </Avatar>

            <h2 className="mt-5 text-2xl font-bold">
             {userProfile.data?.name||"Jhon"}
            </h2>

            <p className="text-muted-foreground">
              {userProfile.data?.role}
            </p>

            {userProfile.data && (
              <EditProfileModal
                user={{
                  ...userProfile.data,
                  // ensure name is string | undefined (not null)
                  name: userProfile.data.name ?? undefined,
                  // convert null phone to undefined to match UserData type
                  phone: userProfile.data.phone ?? undefined,
                }}
              />
            )}
          </CardContent>
        </Card>

        {/* Personal Information */}

        <Card className="lg:col-span-2">
          <CardContent className="grid gap-6 p-8 md:grid-cols-2">
            <div className="flex items-center gap-4">
              <User className="text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Full Name
                </p>

                <h3 className="font-semibold">
                   {userProfile.data?.name||"Jhon doe"}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Email
                </p>

                <h3 className="font-semibold">
                   {userProfile.data?.email}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Phone
                </p>

                <h3 className="font-semibold">
                   {userProfile.data?.phone||"017000000000"}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Address
                </p>

                <h3 className="font-semibold">
                  Khulna, Bangladesh
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <CalendarDays className="text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Joined
                </p>

                <h3 className="font-semibold">
                   {userProfile.data?.createdAt}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Home className="text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Current Property
                </p>

                <h3 className="font-semibold">
                  Luxury Apartment
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Cards */}

      {/* <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-muted-foreground">
                Active Rentals
              </p>

              <h2 className="text-3xl font-bold">
                1
              </h2>
            </div>

            <Home className="h-10 w-10 text-primary" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-muted-foreground">
                Total Payments
              </p>

              <h2 className="text-3xl font-bold">
                $2,450
              </h2>
            </div>

            <CreditCard className="h-10 w-10 text-primary" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-muted-foreground">
                Pending Requests
              </p>

              <h2 className="text-3xl font-bold">
                2
              </h2>
            </div>

            <CalendarDays className="h-10 w-10 text-primary" />
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
}