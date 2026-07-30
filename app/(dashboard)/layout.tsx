

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
   <div>
     <div className="bg-blue-400">Navbar for dashboard</div>
    <div className=" flex ">

   <div className="bg-red-300">Menus</div>
   <div className="bg-yellow-300"> {children}</div>


    </div>
     
   </div>
    </>
  );
}