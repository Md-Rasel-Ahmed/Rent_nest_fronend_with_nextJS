import { fetcher } from "@/lib/fether";
import { serverFetcher } from "@/lib/serverFether";

export const getAllUsers = (token: string) => {
  return serverFetcher("/admin/users", {
    method: "GET",
    
  });
};
export const getAllProperties = (token: string) => {
  return serverFetcher("/admin/properties", {
    method: "GET",
   
  });
};
export const getAllBookings = (token: string) => {
  return serverFetcher("/admin/rentals", {
    method: "GET",
    
  });
};
export const AllCategories = () => {
  return fetcher("/categories", {
    method: "GET",
  });
};