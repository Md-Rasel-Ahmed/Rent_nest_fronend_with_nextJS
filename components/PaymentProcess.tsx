"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PaymentButtonProps {
  bookingId: string;
  token?: string;
  amount?: string;
}

export default function PaymentButton({
  bookingId,
  token,
  amount,
}: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);
  const amountInt = parseInt(amount ?? "0", 10);
  const handlePayment = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/checkout`, {
        method: "POST",
         headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
        body: JSON.stringify({ rentalRequestId:bookingId,amount:amountInt }),
      });
          const responseData = await res.json();
         console.log(responseData);
        const checkoutUrl = responseData?.data?.paymentUrl || 
                       responseData?.data?.url || 
                       responseData?.url ||
                       responseData?.paymentUrl;

    console.log('🔗 Checkout URL:', checkoutUrl);
        
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        toast.error("Payment URL not found in API response.");
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
      toast.error((error as Error).message||"Payment initiation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={loading}
      className=" text-base "
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Processing Payment...
        </>
      ) : (
        <>
          <CreditCard className=" h-5 w-5" />
          Proceed to Payment 
        </>
      )}
    </Button>
  );
}