import { fetcher } from "@/lib/fether";

export const getProperties = () => {
  return fetcher("/landlord/properties", {
    method: "GET",
  });
};