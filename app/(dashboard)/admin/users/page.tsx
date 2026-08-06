import { Eye, Search, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { cookies } from "next/headers";
import { getAllUsers } from "@/service/admin.service";
import UserStatusSwitch from "@/components/UserStatusSwitch";
import DeleteUser from "@/components/DeleteUser";


type UserType={
  id:string,
  name:string,
  email:string,
  phone:string,
  role:string,
  status:string,
  createdAt:string
 
}
type Tuser = {
  data?: UserType[];
};
export default async function usersPage() {
   const cookiStore = await cookies();
      const token = cookiStore.get("accessToken")?.value;
      const users = (await getAllUsers(token ?? "")) as Tuser;
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Users
          </h1>

          <p className="text-muted-foreground">
            Manage all platform users.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search users..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Role</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">
                Active / Ban
              </th>
              <th className="px-6 py-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.data?.map((user) => (
              <tr
                key={user.id}
                className="border-t"
              >
                <td className="px-6 py-5 font-medium">
                  {user.name}
                </td>

                <td className="px-6 py-5">
                  {user.email}
                </td>

                <td className="px-6 py-5">
                  <Badge variant="secondary">
                    {user.role}
                  </Badge>
                </td>

                <td className="px-6 py-5">
                    {user.status==="ACTIVE"? <Badge>
                      Active
                    </Badge>: <Badge variant="destructive">
                      Banned
                    </Badge>}
                 
                 
                </td>

                <td className="px-6 py-5 text-center">
                 <UserStatusSwitch token={token??""}userId={user.id}initialStatus={user.status}></UserStatusSwitch>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>

                    <DeleteUser id={user.id}token={token??""}propertyTitle={user.name}></DeleteUser>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}