import { cookies } from "next/headers";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "")
  : "";
export async function serverFetcher<T>(
  endpoint: string,
  options: RequestInit = {}
) {
  const cookieStore = await cookies();

  const accessToken =
    cookieStore.get("accessToken")?.value;

  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
        ...options.headers,
      },
      cache: "no-store",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data?.message || "Something went wrong",
    };
  }

  return data as T;
}