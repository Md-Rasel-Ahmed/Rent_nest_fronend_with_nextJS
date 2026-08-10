"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface RequestBookingModalProps {
  propertyId: string;
  token: string;
}

export default function RequestBookingModal({
  propertyId,
  token,
}: RequestBookingModalProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [moveInDate, setMoveInDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!moveInDate) return;
const moveInDateInt = new Date(moveInDate).getTime();
    setLoading(true);

    try {
      const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rentals`, {
        method: "POST",
         headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
        body: JSON.stringify({
          moveInDate:moveInDate,
          propertyId
        }),
      });
const result=await res.json()
    if (!res.ok) {
      throw new Error(result.message || 'Something went wrong');
    }
    setLoading(false)
      setOpen(false);
      toast.success("Your booking is successfull")
      setMoveInDate("");
      router.refresh();
    } catch (error) {
      console.error("Booking error:", error);
      toast.error((error as Error).message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger >
        <Button className="w-full text-base py-6">
          <CalendarIcon className="mr-2 h-5 w-5" />
          Request Booking
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Request To Rent</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          {/* Move-in Date Field */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Move-in Date
            </label>
            <Input
              type="date"
              value={moveInDate}
              onChange={(e) => setMoveInDate(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Confirm Booking"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}