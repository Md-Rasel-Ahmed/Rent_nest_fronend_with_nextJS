const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

type FetchOptions = RequestInit & {
  token?: string;
};

export async function fetcher<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { token, headers, ...rest } = options;

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token && {
        Cookie: `accessToken=${token}`,
      }),
      ...headers,
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}