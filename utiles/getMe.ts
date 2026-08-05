import { cookies } from "next/headers";
export async function getMe() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (!token) {
    throw new Error("User not loged in!")
  }

  const res = await fetch(`https://assinemen4.vercel.app/api/auth/me`, {
   credentials: "include",
      cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  return res.json();
}