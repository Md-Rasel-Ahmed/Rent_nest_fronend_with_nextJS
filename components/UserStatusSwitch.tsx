"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { fetcher } from "@/lib/fether"; 
import { toast } from "sonner";

interface UserStatusSwitchProps {
  userId: string;
  initialStatus: string;
  token: string;
}

export default function UserStatusSwitch({
  userId,
  initialStatus,
  token,
}: UserStatusSwitchProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(initialStatus === "ACTIVE");

  const handleStatusChange = async (checked: boolean) => {
    const newStatus = checked ? "ACTIVE" : "BANNED";
    
    setIsActive(checked);
    setLoading(true);

    try {
      await fetcher(`/admin/users/${userId}`, {
        method: "PATCH",
        token: token,
        body: JSON.stringify({ status: newStatus }),
      });
       toast.success("User status update successed!")
      router.refresh();
    } catch (error) {
      console.error("Status update failed:", error);
      setIsActive(!checked);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Switch
      checked={isActive}
      disabled={loading}
      onCheckedChange={handleStatusChange}
    />
  );
}