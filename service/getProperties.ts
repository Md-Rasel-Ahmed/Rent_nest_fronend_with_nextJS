import { fetcher } from "@/lib/fether";

export const getProperties = () => {
  return fetcher("/landlord/properties", {
    method: "GET",
  });
};
export const getSingleProperty = ({id}:{id:string}) => {
  return fetcher(`/landlord/properties/${id}`, {
    method: "GET",
  });
};