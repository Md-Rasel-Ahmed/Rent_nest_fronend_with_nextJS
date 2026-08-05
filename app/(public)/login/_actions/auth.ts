// app/actions/auth.ts
"use server";

import { cookies } from "next/headers";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { jwtDecode } from 'jwt-decode';
import { tokenVerify } from "@/utiles/tokenVerify";

export async function loginAction(data: { email: string; password: string }) {
  try {
    const res = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Login failed!",
      };
    }

    const { accessToken, refreshToken } = result.data || result; 
    
    const cookieStore = await cookies();
    
    if (accessToken) {
      cookieStore.set("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge:3 * 24 * 60 * 60, //3 days
      });
    }
    
    if (refreshToken) {
      cookieStore.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60, // 7 days
      });
    }
    const decodedToken=await tokenVerify()
    // const decoded=await tokenVerify(accessToken)
    return { success: true, message: "Login successful!",role:decodedToken};

  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}
export async function singupAction(data: { email: string; password: string,name:string,phone:string,role:string}) {
  try {
    const res = await fetch(`http://localhost:5000/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Singup failed!",
      };
    }
    return { success: true, message: "Singup successful!"};

  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}