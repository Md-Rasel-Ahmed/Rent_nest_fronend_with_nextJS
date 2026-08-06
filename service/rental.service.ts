import { fetcher } from "@/lib/fether";

export const getRentals = (token: string) => {
  return fetcher("/rentals", {
    method: "GET",
    token,
  });
};
export const getPaymentsHistory = (token: string) => {
  return fetcher("/payments", {
    method: "GET",
    token,
  });
};