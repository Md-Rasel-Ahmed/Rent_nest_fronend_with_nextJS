"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface DeletePropertyButtonProps {
  id: string;
  token: string;
  propertyTitle: string;
}

export default function DeletePropertyButton({
  id,
  token,
  propertyTitle,
}: DeletePropertyButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
 
  const handleDelete = async () => {
    setLoading(true);
    try {
     const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/landlord/properties/${id}`, {
        method: "DELETE",
        headers:{
          'Authorization': `Bearer ${token}`
        }
       
      });
       const result=await res.json()
    if (!res.ok) {
      toast.error(result.message)
      throw new Error(result.message || 'Something went wrong');
    }
      setOpen(false);
      toast.success("Property delete successfull")
      router.refresh();
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button size="icon" variant="destructive">
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            <span className="font-semibold text-foreground">
              {propertyTitle ? `"${propertyTitle}"` : "this property"}
            </span>{" "}
            from our servers.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-2 sm:gap-0 pt-4">
          <Button
            type="button"
            variant="outline"
            disabled={loading}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

         <Button
            type="button"
            variant="destructive"
            disabled={loading}
            onClick={handleDelete}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              "Confirm Delete"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}