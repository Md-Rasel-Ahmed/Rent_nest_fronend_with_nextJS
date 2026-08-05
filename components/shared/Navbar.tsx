"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserDropdown from "./UserDropdown";


const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Properties",
    href: "/properties",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  // পরে এটা getMe() দিয়ে replace করবে
  const user = {
    name: "Md Rasel",
    email: "rasel@gmail.com",
    role: "tanent",
    image:
      "https://i.pravatar.cc/150?img=3",
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold text-primary"
        >
          RentNest
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "font-semibold text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <>
              <Button
                variant="ghost"
                size="icon"
              >
                <Bell className="h-5 w-5" />
              </Button>

              <UserDropdown user={user} />
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                
              >
                <Link href="/login">
                  Login
                </Link>
              </Button>

              <Button >
                <Link href="/register">
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile */}

        <Sheet>
          <SheetTrigger >
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <div className="mt-10 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}

              <hr />

              {user ? (
                <>
                  <Link href="/dashboard">
                    Dashboard
                  </Link>

                  <Link href="/profile">
                    Profile
                  </Link>

                  <Button variant="destructive">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button >
                    <Link href="/login">
                      Login
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    
                  >
                    <Link href="/register">
                      Register
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}