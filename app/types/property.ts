export interface PropertyType {
  [x: string]: string | number | Date | boolean;
  id: string;
  city:string,
  title: string;
  imgUrl: string;
  address: string;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  createdAt:string,
  isAvailable:boolean,
  rent: number;
}
export interface Property{
  data?:PropertyType[]
}