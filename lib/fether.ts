export async function fetcher<T>(
  endpoint: string,
  options: RequestInit = {}
) {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;

  // Server-এ absolute URL লাগবে
  const baseUrl =
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
      : "";

  const response = await fetch(`${baseUrl}/${cleanEndpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data?.message || "Something went wrong",
    };
  }

  return data as T;
}