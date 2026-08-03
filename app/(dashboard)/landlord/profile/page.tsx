import { Building2, CalendarDays, Mail, MapPin, Phone, User, Wallet } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandlordProfilePage() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="text-muted-foreground">
          Manage your personal information.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Profile Card */}

        <Card>
          <CardContent className="flex flex-col items-center p-8">
            <Avatar className="h-28 w-28">
              <AvatarFallback className="text-3xl">
                RA
              </AvatarFallback>
            </Avatar>

            <h2 className="mt-5 text-2xl font-bold">
              Md Rasel Ahmed
            </h2>

            <p className="text-muted-foreground">
              Landlord
            </p>

            <Button className="mt-6 w-full">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Information */}

        <Card className="lg:col-span-2">
          <CardContent className="grid gap-6 p-8 md:grid-cols-2">
            <div className="flex items-center gap-4">
              <User className="text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Full Name
                </p>

                <h3 className="font-semibold">
                  Md Rasel Ahmed
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
                  rasel@gmail.com
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
                  +880 1712345678
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
              <Building2 className="text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  NID Number
                </p>

                <h3 className="font-semibold">
                  ************4567
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
                  12 July 2026
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-muted-foreground">
                Properties
              </p>

              <h2 className="text-3xl font-bold">
                18
              </h2>
            </div>

            <Building2 className="h-10 w-10 text-primary" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-muted-foreground">
                Total Bookings
              </p>

              <h2 className="text-3xl font-bold">
                142
              </h2>
            </div>

            <CalendarDays className="h-10 w-10 text-primary" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-muted-foreground">
                Earnings
              </p>

              <h2 className="text-3xl font-bold">
                $12,480
              </h2>
            </div>

            <Wallet className="h-10 w-10 text-primary" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}