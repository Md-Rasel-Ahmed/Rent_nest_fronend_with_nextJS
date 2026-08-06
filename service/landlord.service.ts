import { fetcher } from "@/lib/fether";

export const getLandlordProperties = (token: string) => {
  return fetcher("/landlord/properties/landlord", {
    method: "GET",
    token,
  });
};