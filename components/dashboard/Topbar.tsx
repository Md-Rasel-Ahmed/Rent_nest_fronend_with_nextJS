"use client";

import {
  Bell,
  Menu,
  MessageSquare,
  Search,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background px-4 lg:px-8">
      {/* Left */}

      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Button */}

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Search */}

        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search..."
            className="w-65 pl-10 lg:w-87.5"
          />
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="ghost"
        >
          <Bell className="h-5 w-5" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
        >
          <MessageSquare className="h-5 w-5" />
        </Button>

        {/* Profile */}

        <DropdownMenu>
          <DropdownMenuTrigger >
            <Button
              variant="ghost"
              className="flex h-auto items-center gap-3 px-2"
            >
              <Avatar className="h-9 w-9">
                <AvatarImage src="" />

                <AvatarFallback>
                  RA
                </AvatarFallback>
              </Avatar>

              <div className="hidden text-left lg:block">
                <p className="text-sm font-medium">
                  Md Rasel
                </p>

                <p className="text-xs text-muted-foreground">
                  Administrator
                </p>
              </div>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-56"
          >
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="text-red-500 focus:text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}