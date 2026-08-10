"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface UpdateStatusModalProps {
  id: string;
  name: string;
  token: string;
}

export default function UpdateStatusModal({
  id,
  name,
  token,
}: UpdateStatusModalProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(name);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
     const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/landlord/properties/requests/${id}`, {
        method: "PATCH",
           headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }, 
        body: JSON.stringify({ status }),
      });
const result=await res.json()
    if (!res.ok) {
      throw new Error(result.message || 'Something went wrong');
    }
    setLoading(false)
      setOpen(false);
      toast.success("Update successfull")
      router.refresh();
    } catch (error) {
      toast.error((error as Error).message)
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger >
        <Button size="icon" variant="outline">
          <Edit2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Update Status</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-md border p-2 bg-background"
          >
            <option value="PENDING">PENDING</option>
            <option value="APPROVED">APPROVED</option>
            <option value="REJECTED">REJECTED</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}