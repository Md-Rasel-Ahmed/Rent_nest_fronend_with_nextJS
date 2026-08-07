"use client";

import Link from "next/link";
import { navItems, Role } from "@/config/nav";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogOut, User } from "lucide-react";
import { logout } from "@/service/logout";

interface SidebarProps {
  userRole?: Role;
  className?: string;
}

export default function Sidebar({ userRole, className = "" }: SidebarProps) {
  const pathname = usePathname();
  const route=useRouter()
  const handleLogout=async()=>{
    await logout()
    route.push("/login")
  }
  const filteredNavItems = navItems.filter((item) =>
    userRole ? item.roles.includes(userRole) : false
  );

  return (
    <aside className={`flex h-full flex-col border-r bg-background ${className}`}>
      <div className="flex h-16 items-center border-b px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <User className="h-7 w-7 text-primary" />

          <div>
            <h2 className="text-xl font-bold">RentNest</h2>

            <p className="text-xs text-muted-foreground">
              {userRole} Panel
            </p>
          </div>
        </Link>
      </div>

      <ScrollArea className="flex-1 px-4 py-4">
        <nav className="flex flex-col gap-1">
         <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-2">
          {filteredNavItems.map((menu) => {
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
        </nav>
      </ScrollArea>
      
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