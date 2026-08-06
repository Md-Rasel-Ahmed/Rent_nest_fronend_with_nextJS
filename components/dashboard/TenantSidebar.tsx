"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  CalendarDays,
  CreditCard,
  Heart,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  User,
  History,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { logout } from "@/service/logout";

const menus = [
  {
    title: "Dashboard",
    href: "/tenant/dashboard",
    icon: LayoutDashboard,
  },
  // {
  //   title: "Wishlist",
  //   href: "/dashboard/tenant/wishlist",
  //   icon: Heart,
  // },
  // {
  //   title: "My Bookings",
  //   href: "/dashboard/tenant/bookings",
  //   icon: CalendarDays,
  // },
  {
    title: "Payment History",
    href: "/tenant/payments",
    icon: CreditCard,
  },
  // {
  //   title: "Rental History",
  //   href: "/tenant/history",
  //   icon: History,
  // },
  // {
  //   title: "My Reviews",
  //   href: "/dashboard/tenant/reviews",
  //   icon: MessageSquare,
  // },
  {
    title: "Profile",
    href: "/tenant/profile",
    icon: User,
  },
  // {
  //   title: "Settings",
  //   href: "/tenant/settings",
  //   icon: Settings,
  // },
];

export default function TenantSidebar() {
  const pathname = usePathname();
  const route=useRouter()
  const handleLogout=async()=>{
    await logout()
    route.push("/login")
  }
  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-background">
      {/* Logo */}

      <div className="flex h-16 items-center border-b px-6">
        <Link
          href="/dashboard/tenant"
          className="flex items-center gap-3"
        >
          <User className="h-7 w-7 text-primary" />

          <div>
            <h2 className="text-xl font-bold">RentNest</h2>

            <p className="text-xs text-muted-foreground">
              Tenant Panel
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
        <Button onClick={handleLogout}
          variant="outline"
          className="w-full justify-start"
        >
          <LogOut  className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
}