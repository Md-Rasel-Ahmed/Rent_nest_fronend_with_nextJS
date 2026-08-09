"use server"

import { cookies } from "next/headers";
import  jwt, { JwtPayload }  from 'jsonwebtoken';

export const tokenVerify=async()=>{
 const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  
    let role: string | null = null;
    
    if (token) {
      try {
        const decoded=jwt.decode(token) as JwtPayload
        //  const decodedToken=jwt.verify(token,process.env.JWT_ACCESS_SECRET as string)as JwtPayload
          // console.log(decoded,"from token verify");
        role = decoded.role;
      } catch (error) {
        console.error("Token decoding failed:", error);
      }
    }

    return role
  
}