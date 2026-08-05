import { Eye, Search, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    role: "Tenant",
    status: true,
  },
  {
    id: 2,
    name: "Sarah Khan",
    email: "sarah@gmail.com",
    role: "Landlord",
    status: true,
  },
  {
    id: 3,
    name: "Alex Smith",
    email: "alex@gmail.com",
    role: "Tenant",
    status: false,
  },
  {
    id: 4,
    name: "Admin User",
    email: "admin@gmail.com",
    role: "Admin",
    status: true,
  },
];

export default function usersPage() {
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
            {users.map((user) => (
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
                  {user.status ? (
                    <Badge>
                      Active
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      Banned
                    </Badge>
                  )}
                </td>

                <td className="px-6 py-5 text-center">
                  <Switch
                    checked={user.status}
                  />
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>

                    <Button
                      size="icon"
                      variant="destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
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