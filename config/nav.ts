import { LayoutDashboard,  User,
  History, CreditCard, LucideIcon, 
  Building2,
  CalendarDays,
  Users,
  PlusSquare} from "lucide-react";

export type Role = "ADMIN" | "LANDLORD" | "TENANT";

export interface NavItem {
  title:string,
  href: string;
  icon: LucideIcon;
  roles: Role[];
}

export const navItems: NavItem[] = [
  {
    roles: ["TENANT"],
    title: "Dashboard",
    href: "/tenant/dashboard",
    icon: LayoutDashboard,
  },
  {
    roles: ["TENANT"],
   title: "Payment History",
    href: "/tenant/payments",
    icon: CreditCard,
  },
  {
    roles: ["TENANT"],
     title: "Rental History",
    href: "/tenant/rentals",
    icon: History,
  },
  {
    roles: ["TENANT"],
    title: "Profile",
    href: "/tenant/profile",
    icon: User,
  },
  {
    roles: ["LANDLORD"],
    title: "Dashboard",
    href: "/landlord/dashboard",
    icon: LayoutDashboard,
  },
  {
    roles: ["LANDLORD"],
     title: "My Properties",
    href: "/landlord/properties",
    icon: Building2,
  },
  {
    roles: ["LANDLORD"],
   title: "Requests",
    href: "/landlord/requests",
    icon: CalendarDays,
  },
  {
    roles: ["LANDLORD"],
    title: "Profile",
    href: "/landlord/profile",
    icon: User,
  },
  
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
    roles: ["ADMIN"],
  },
  {
   title: "Properties",
    href: "/admin/properties",
    icon: Building2,
    roles: ["ADMIN"],
  },
  {
   title: "Rentals",
    href: "/admin/rentals",
    icon: PlusSquare,
    roles: ["ADMIN",],
  },
  {
   title: "Categories",
    href: "/admin/categories",
    icon: CalendarDays,
    roles: ["ADMIN"],
  },
  {
   title: "Users",
    href: "/admin/users",
    icon: Users,
    roles: ["ADMIN"],
  },
];