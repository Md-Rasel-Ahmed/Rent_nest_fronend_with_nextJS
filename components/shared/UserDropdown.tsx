"use client";

import Link from "next/link";
import {
  User,
  LogOut,
  LayoutDashboard,
  Settings,
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/service/logout";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function UserDropdown({ role }: { role: string }) {
   const router = useRouter();
const handleLogout=async()=>{
   await logout()
   toast.success("Logut success")
    router.push("/login");
   
}
  return (
    <DropdownMenu>
      <DropdownMenuTrigger >
        <button className="outline-none rounded-full">
          <Avatar className="h-10 w-10 cursor-pointer">
            <AvatarImage src="https://i.pravatar.cc/150?img=3" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56"
      >
        <DropdownMenuItem >
          <Link className="flex gap-1 justify-items-center" href={`/${role}/dashboard`}>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem >
          <Link className="flex gap-1 justify-items-center" href={`/${role}/profile`}>
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>

        {/* <DropdownMenuItem >
          <Link className="flex gap-1 justify-items-center" href="/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem> */}

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleLogout} className="text-red-500 cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}