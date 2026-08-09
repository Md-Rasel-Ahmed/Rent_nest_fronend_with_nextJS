import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  CheckCircle2, 
  Calendar, 
  User, 
  ArrowLeft 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSingleProperty } from "@/service/getProperties";
import RequestBookingModal from "@/components/properties/RequestBookingModal";
import { cookies } from "next/headers";

interface PageProps {
  params: Promise<{
    id: string; 
  }>;
}

 interface Property {
  id: string;
  title: string;
  description: string;
  address: string;
  city:string,
  imgUrl: string;
  rent: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  isAvailable: boolean;
  landlordId: string;
  categoryId: string;
  createdAt: string;
  amenities?: string[];
  hostName?: string;
}
 interface SinglePropertyResponse {
  success: boolean;
  message: string;
  data: Property;
}
export default async function PropertyDetailsPage({ params }: PageProps) {
  const cookiStore = await cookies();
    const token = cookiStore.get("accessToken")?.value;
 const { id } = await params;
  const property = (await getSingleProperty({ id })) as SinglePropertyResponse;

console.log(property);
  if (!property) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold">Property Not Found</h2>
        <Link href="/properties">
          <Button className="mt-4">Back to Properties</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-10 px-4">
      {/* Back Button */}
      <Link href="/properties" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Properties
      </Link>

      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {/* <Badge variant="secondary">{property.data?. || "Category"}</Badge> */}
            <Badge className={property.data?.isAvailable? "bg-green-600" : "bg-amber-600"}>
              {property.data.isAvailable?"ACTIVE":"NOT ACTIVE"}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{property.data.title}</h1>
          <p className="flex items-center text-muted-foreground mt-2">
            <MapPin className="h-4 w-4 mr-1 text-primary" />
            {property.data.address}
          </p>
        </div>

        <div className="md:text-right">
          <span className="text-3xl font-bold text-primary">${property.data.rent}</span>
          <span className="text-muted-foreground"> / month</span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="md:col-span-2 relative h-[350px] md:h-[450px] rounded-xl overflow-hidden">
          <Image
            src={property.data?.city ||  "/images/rental_house.jpg"}
            alt={property.data?.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <div className="relative h-[217px] rounded-xl overflow-hidden">
            <Image
              src={property.data?.city || "/images/rental_house.jpg"}
              alt="Property view"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[217px] rounded-xl overflow-hidden">
            <Image
              src={property.data?.city ||"/images/rental_house.jpg"}
              alt="Property view"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Content (2 Columns) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Key Specs */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl border bg-card text-card-foreground">
            <div className="flex items-center gap-3">
              <Bed className="h-6 w-6 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Bedrooms</p>
                <p className="font-semibold">{property.data.bedrooms || 3} Beds</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bath className="h-6 w-6 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Bathrooms</p>
                <p className="font-semibold">{property.data.bathrooms || 2} Baths</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Square className="h-6 w-6 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Area</p>
                <p className="font-semibold">{property.data.area || 1200} sqft</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              {property.data.description || 
                "This beautifully updated property offers spacious living areas, modern fixtures, and comfortable bedrooms. Located in a prime area with easy access to shopping centers, schools, and public transport."}
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {(property.data?.amenities || ["Wifi", "Parking", "Air Conditioning", "Balcony", "Security", "Gym"]).map((amenity: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar (1 Column) */}
        <div>
          <div className="border rounded-xl p-6 shadow-sm sticky top-6 space-y-6">
            <h3 className="text-xl font-bold">Interested in this property?</h3>

            <div className="space-y-4">
             <RequestBookingModal token={token??""}propertyId={property.data.id}></RequestBookingModal>
              <Button variant="outline" className="w-full text-base py-6">Contact Host</Button>
            </div>

            <hr />
 
            {/* Host Info */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                <User className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold">{property.data?.hostName || "Property Manager"}</p>
                <p className="text-xs text-muted-foreground">Verified Agent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}