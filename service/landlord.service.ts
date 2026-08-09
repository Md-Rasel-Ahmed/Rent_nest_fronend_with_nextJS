import { fetcher } from "@/lib/fether";
import { serverFetcher } from "@/lib/serverFether";

export const getLandlordProperties = () => {
  return serverFetcher("/landlord/properties/landlord", {
    method: "GET",
   
  });
};
export const getRentalRequests = () => {
  return serverFetcher("/landlord/properties/requests", {
    method: "GET",
  });
};

export const deleteProperty=(id:string)=>{
     return fetcher(`/landlord/properties/${id}`, {
     method: "DELETE",
    
  })
}