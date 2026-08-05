"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { IUser } from "@/app/types/user";
import UserDropdown from "./UserDropdown";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
interface NavbarProps {
  user: IUser;
}
export default function Navbar({user}:NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          RentNest
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`transition-colors ${
        pathname === link.href
          ? "text-primary font-semibold"
          : "text-muted-foreground hover:text-primary"
      }`}
    >
      {link.name}
    </Link>
  ))}
        </nav>
        {
          user?.email? <UserDropdown role={user.role.toLowerCase()}></UserDropdown>: <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" >
            <Link href="/login">Login</Link>
          </Button>

          <Button >
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>
        }

        {/* Desktop Buttons */}
       

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 hover:bg-muted"
              >
                {link.name}
              </Link>
            ))}
             {/* <UserDropdown></UserDropdown> */}
            {/* <div className="mt-4 flex flex-col gap-3">
              <Button variant="outline" >
                <Link href="/login">Login</Link>
              </Button>

              <Button >
                <Link href="/register">Sign Up</Link>
              </Button>
            </div> */}
          </nav>
        </div>
      )}
    </header>
  );
}