import { serverFetcher } from "@/lib/serverFether";

export const getProperties = () => {
  return serverFetcher("/landlord/properties", {
    method: "GET",
  });
};
export const getSingleProperty = ({id}:{id:string}) => {
  return serverFetcher(`/landlord/properties/${id}`, {
    method: "GET",
  });
};