import { Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { IUser } from "@/app/types/user";
interface NavbarProps {
  user: IUser;
}
export default function Topbar({user}:NavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger Menu */}
        <Sheet>
          <SheetTrigger >
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <Sidebar userRole={user.role} />
          </SheetContent>
        </Sheet>

        <h1 className="text-lg font-semibold md:text-xl">Dashboard</h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Notification Button */}
        <Button variant="outline" size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
        </Button>

        {/* User Profile Dropdown */}
        <Button
              variant="ghost"
              className="flex h-auto items-center gap-3 px-2"
            >
            
              <div className="hidden text-left lg:block">
                <p className="text-sm font-medium">
                 {user.name}
                </p>

                <p className="text-xs text-muted-foreground">
                  Administrator
                </p>
              </div>
            </Button>
      </div>
    </header>
  );
}