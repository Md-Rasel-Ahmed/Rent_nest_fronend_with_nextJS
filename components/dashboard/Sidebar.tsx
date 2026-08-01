import AdminSidebar from "./AdminSidebar";
import LandlordSidebar from "./LandlordSidebar";
import TenantSidebar from "./TenantSidebar";

export default function Sidebar() {
  const role = "admin"; 

  switch (role) {
    case "admin":
      return <AdminSidebar />;

    case "landlord":
      return <LandlordSidebar />;

    case "tenant":
      return <TenantSidebar />;

    default:
      return null;
  }
}