"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  CalendarDays,
  CreditCard,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  PlusSquare,
  Settings,
  User,
  Wallet,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const menus = [
  {
    title: "Dashboard",
    href: "/landlord/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Properties",
    href: "/landlord/properties",
    icon: Building2,
  },
  {
    title: "Add Property",
    href: "/dashboard/add-property",
    icon: PlusSquare,
  },
  {
    title: "Requests",
    href: "/landlord/requests",
    icon: CalendarDays,
  },
  {
    title: "Earnings",
    href: "/landlord/earnings",
    icon: Wallet,
  },
//   {
//     title: "Reviews",
//     href: "/dashboard/landlord/reviews",
//     icon: MessageSquare,
//   },
//   {
//     title: "Payments",
//     href: "/dashboard/landlord/payments",
//     icon: CreditCard,
//   },
  {
    title: "Profile",
    href: "/landlord/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/landlord/settings",
    icon: Settings,
  },
];

export default function LandlordSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-background">
      {/* Logo */}

      <div className="flex h-16 items-center border-b px-6">
        <Link
          href="/dashboard/landlord"
          className="flex items-center gap-3"
        >
          <Building2 className="h-7 w-7 text-primary" />

          <div>
            <h2 className="text-xl font-bold">
              RentNest
            </h2>

            <p className="text-xs text-muted-foreground">
              Landlord Panel
            </p>
          </div>
        </Link>
      </div>

      {/* Menu */}

      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-2">
          {menus.map((menu) => {
            const Icon = menu.icon;

            const active =
              pathname === menu.href ||
              pathname.startsWith(menu.href + "/");

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{menu.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}

      <div className="border-t p-4">
        <Button
          variant="outline"
          className="w-full justify-start"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
}