import { fetcher } from "@/lib/fether";

export const getAllUsers = (token: string) => {
  return fetcher("/admin/users", {
    method: "GET",
    token,
  });
};
export const getAllProperties = (token: string) => {
  return fetcher("/admin/properties", {
    method: "GET",
    token,
  });
};
export const getAllBookings = (token: string) => {
  return fetcher("/admin/rentals", {
    method: "GET",
    token,
  });
};