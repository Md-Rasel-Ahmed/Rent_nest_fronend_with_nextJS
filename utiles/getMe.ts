import { IGetMeResponse } from "@/app/types/user";
import { cookies } from "next/headers";
export async function getMe(): Promise<IGetMeResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    return {
      success:false,
      message:"User not logged in",
      data:null
    }
  }

  const res = await fetch(`http://localhost:5000/api/auth/me`, {
     headers:{
     Cookie:`accessToken=${token}`
         },
         cache:"force-cache",
         next:{
          revalidate:3*24*60*60,
          tags:["my-profile"]
         }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  return res.json();
}