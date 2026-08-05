import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { getMe } from "@/utiles/getMe";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const userProfile=await getMe()
  
  return (
    <>
      <Navbar user={userProfile.data} />
      {children}
      <Footer></Footer>
    </>
  );
}