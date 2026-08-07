const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

type FetchOptions = RequestInit & {
  token?: string;
};

export async function fetcher<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T | { success: boolean; message: string }> {
  const { token, headers, ...rest } = options;

  const reqHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...(headers as Record<string, string>),
  };

  if (token) {
    reqHeaders["Authorization"] = `Bearer ${token}`;
    reqHeaders["Cookie"] = `accessToken=${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...rest,
    headers: reqHeaders,
    credentials: "include",
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data?.message || response.statusText || "Request failed",
    };
  }

  return (data as T) || ([] as unknown as T);
}