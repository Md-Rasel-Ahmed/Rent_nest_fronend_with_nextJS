import { fetcher } from "@/lib/fether";
import { serverFetcher } from "@/lib/serverFether";

export const getRentals = (token: string) => {
  return serverFetcher("/rentals", {
    method: "GET",
    
  });
};
export const getPaymentsHistory = (token: string) => {
  return serverFetcher("/payments", {
    method: "GET",
    
  });
};