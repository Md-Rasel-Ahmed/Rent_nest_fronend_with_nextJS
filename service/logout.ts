"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export const logout=async()=>{
    const cookiStore=await cookies()
    cookiStore.delete("accessToken")
    cookiStore.delete("refreshToken")
    revalidateTag("my-profile","max")
}