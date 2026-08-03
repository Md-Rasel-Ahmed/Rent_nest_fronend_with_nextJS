
import AdminSidebar from "./AdminSidebar";
import LandlordSidebar from "./LandlordSidebar";
import TenantSidebar from "./TenantSidebar";
import { tokenVerify } from "@/utiles/tokenVerify";



export default async function Sidebar() {
 const role= await tokenVerify()
  switch (role) {
    case "ADMIN":
      return <AdminSidebar />;

    case "LANDLORD":
      return <LandlordSidebar />;

    case "TENANT":
      return <TenantSidebar />;

    default:
      return null; 
  }
}