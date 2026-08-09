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
import { Input } from "@/components/ui/input";
import { fetcher } from "@/lib/fether";
import { toast } from "sonner";

interface UpdatePropertyModalProps {
  id: string;
  property: string;
  location: string;
  rent: number | string;
  token: string;
}

export default function UpdatePropertyModal({
  id,
  property,
  location,
  rent,
  token,
}: UpdatePropertyModalProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [propertyName, setPropertyName] = useState(property);
  const [propertyLocation, setPropertyLocation] = useState(location);
  const [propertyRent, setPropertyRent] = useState(rent);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
   console.log(id,
  property,
  token)
    try {
      await fetcher(`/landlord/properties/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: propertyName,
          address: propertyLocation,
          rent: Number(propertyRent),
        }),
      });

      setOpen(false);
      toast.success("Property update successdull!")
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message || "Failed to update property");
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

      <DialogContent className="sm:max-w-100">
        <DialogHeader>
          <DialogTitle>Update Property</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          {/* Property Name */}
          <div>
            <label className="text-sm font-medium">Property Name</label>
            <Input
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              placeholder="Property Title"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-medium">Location</label>
            <Input
              value={propertyLocation}
              onChange={(e) => setPropertyLocation(e.target.value)}
              placeholder="Location"
              required
            />
          </div>

          {/* Rent */}
          <div>
            <label className="text-sm font-medium">Rent</label>
            <Input
              type="number"
              value={propertyRent}
              onChange={(e) => setPropertyRent(e.target.value)}
              placeholder="Rent Amount"
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
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}