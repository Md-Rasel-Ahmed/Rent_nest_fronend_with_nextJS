import { fetcher } from "@/lib/fether";

export const getLandlordProperties = (token: string) => {
  return fetcher("/landlord/properties/landlord", {
    method: "GET",
    token,
  });
};

export const deleteProperty=(token:string,id:string)=>{
     return fetcher(`/landlord/properties/${id}`, {
     method: "DELETE",
     token,
  })
}