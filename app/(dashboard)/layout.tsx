import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import { getMe } from "@/utiles/getMe";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user=await getMe()
  return (
    <div className="flex min-h-screen w-full bg-muted/20">
      {/* Desktop Sidebar */}
      <Sidebar userRole={user.data.role} className="hidden md:flex w-64 fixed left-0 top-0 bottom-0 z-40" />
     
      {/* Main Container */}
      <div className="flex flex-1 flex-col md:pl-64">
        <Topbar user={user.data} />
        
        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}