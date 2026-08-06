export interface PropertyType {
  [x: string]: string | number | Date;
  id: string;
  title: string;
  image: string;
  address: string;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  rent: number;
}
export interface Property{
  data?:PropertyType[]
}