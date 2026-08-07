import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 text-center shadow-sm">
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        {/* Content */}
        <h1 className="text-2xl font-bold tracking-tight">Payment Successful!</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for your payment. Your booking has been confirmed successfully.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3">
          <Button  className="w-full">
            <Link className="flex gap-1" href="/tenant/rentals">
              View My Bookings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button variant="outline" className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}