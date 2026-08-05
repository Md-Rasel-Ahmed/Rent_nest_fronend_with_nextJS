export interface IUser {
  id: string;
  name: string | null;
  email: string;
  phone: string | null;
  role: "ADMIN" | "LANDLORD" | "TENANT";
  status: "ACTIVE" | "BLOCKED";
  createdAt: string;
  updatedAt: string;
}

export interface IGetMeResponse {
  success: boolean;
  message: string;
  data: IUser;
}