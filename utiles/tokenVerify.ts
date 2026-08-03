"use server"

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
type DecodedToken = {
  email: string;
  role: "admin" | "landlord" | "tenant";
  exp: number;
};
export const tokenVerify=async()=>{
 const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  
    let role: string | null = null;
  
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        role = decoded.role;
      } catch (error) {
        console.error("Token decoding failed:", error);
      }
    }

    return role
  
}