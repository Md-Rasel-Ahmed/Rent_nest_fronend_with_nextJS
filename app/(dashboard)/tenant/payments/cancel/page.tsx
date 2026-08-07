import Link from "next/link";
import { XCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 text-center shadow-sm">
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400">
          <XCircle className="h-10 w-10" />
        </div>

        {/* Content */}
        <h1 className="text-2xl font-bold tracking-tight">Payment Cancelled</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Your payment process was not completed. No charges were made to your account.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3">
          <Button  className="w-full">
            <Link className="flex gap-1" href="/tenant/rentals">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Link>
          </Button>

          <Button  variant="outline" className="w-full">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}