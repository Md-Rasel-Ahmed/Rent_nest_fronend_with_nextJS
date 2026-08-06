"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  PlusSquare,
  CalendarDays,
  Users,
  MessageSquare,
  CreditCard,
  Settings,
  LogOut,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { logout } from "@/service/logout";

const menus = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Properties",
    href: "/admin/properties",
    icon: Building2,
  },
  {
    title: "Rentals",
    href: "/admin/rentals",
    icon: PlusSquare,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: CalendarDays,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
//   {
//     title: "Reviews",
//     href: "/dashboard/admin/reviews",
//     icon: MessageSquare,
//   },
//   {
//     title: "Payments",
//     href: "/dashboard/admin/payments",
//     icon: CreditCard,
//   },
  // {
  //   title: "Settings",
  //   href: "/dashboard/admin/settings",
  //   icon: Settings,
  // },
];

export default function AdminSidebar() {
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
          href="/dashboard/admin"
          className="flex items-center gap-2"
        >
          <ShieldCheck className="h-7 w-7 text-primary" />

          <div>
            <h2 className="text-xl font-bold">
              RentNest
            </h2>

            <p className="text-xs text-muted-foreground">
              Admin Panel
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
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
}