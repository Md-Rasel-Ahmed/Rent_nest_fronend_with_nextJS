"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserProps {
  user: {
    name: string;
    email: string;
    role: "ADMIN" | "LANDLORD" | "TENANT";
    image?: string;
  };
}

export default function UserDropdown({ user }: UserProps) {
  const getDashboardLink = () => {
    switch (user.role) {
      case "ADMIN":
        return "/admin/dashboard";

      case "LANDLORD":
        return "/landlord/dashboard";

      default:
        return "/tenant/dashboard";
    }
  };

  const handleLogout = () => {
    // পরে API call করবে
    console.log("Logout");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="h-10 w-10 cursor-pointer ring-2 ring-primary/20 hover:ring-primary transition">
          <AvatarImage src={user.image} />

          <AvatarFallback>
            {user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-64"
      >
        <DropdownMenuLabel className="pb-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={user.image} />
              <AvatarFallback>
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="font-semibold">
                {user.name}
              </p>

              <p className="text-xs text-muted-foreground">
                {user.email}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem >
          <Link
            href={getDashboardLink()}
            className="cursor-pointer"
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem >
          <Link
            href="/profile"
            className="cursor-pointer"
          >
            <User className="mr-2 h-4 w-4" />
            My Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem >
          <Link
            href="/settings"
            className="cursor-pointer"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer text-red-500 focus:text-red-500"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}