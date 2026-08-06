import { CreditCard, Download, Wallet } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cookies } from "next/headers";
import { getPaymentsHistory } from "@/service/rental.service";

const currentPayment = {
  property: "Luxury Apartment",
  landlord: "John Doe",
  amount: "$550",
  dueDate: "25 Aug 2026",
  status: "Pending",
};

const paymentHistory = [
  {
    id: 1,
    month: "July 2026",
    amount: "$550",
    method: "Stripe",
    status: "Paid",
  },
  {
    id: 2,
    month: "June 2026",
    amount: "$550",
    method: "Stripe",
    status: "Paid",
  },
  {
    id: 3,
    month: "May 2026",
    amount: "$550",
    method: "Stripe",
    status: "Paid",
  },
];

export default async function TenantPaymentsPage() {
  const cookiStore = await cookies();
      const token = cookiStore.get("accessToken")?.value;
      const payments = (await getPaymentsHistory(token ?? "")) as { data?: { status?: string; amount?: number;id:string }[] };
      
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          Payments
        </h1>

        <p className="text-muted-foreground">
          View your rent payments and payment history.
        </p>
      </div>

      {/* Current Payment */}

      <Card>
        <CardContent className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Current Rent
            </h2>

            <p className="text-muted-foreground">
              Property: {currentPayment.property}
            </p>
          
            <p className="text-muted-foreground">
              Landlord: {currentPayment.landlord}
            </p>

            <p className="text-muted-foreground">
              Due Date: {currentPayment.dueDate}
            </p>

            <Badge variant="secondary">
              {currentPayment.status}
            </Badge>
          </div>

          <div className="text-right">
            <h2 className="text-4xl font-bold">
              {currentPayment.amount}
            </h2>

            <Button className="mt-4">
              <Wallet className="mr-2 h-4 w-4" />
              Pay Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}

      <Card>
        <CardContent className="p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Payment History
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left">
                    Month
                  </th>

                  <th className="px-6 py-4 text-left">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-left">
                    Method
                  </th>

                  <th className="px-6 py-4 text-left">
                    Status
                  </th>

                  <th className="px-6 py-4 text-center">
                    Invoice
                  </th>
                </tr>
              </thead>

              <tbody>
                {payments.data?.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-t"
                  >
                    <td className="px-6 py-5">
                      {payment.month}
                    </td>

                    <td className="px-6 py-5 font-medium">
                      {payment.amount}
                    </td>

                    <td className="px-6 py-5">
                      {payment.method}
                    </td>

                    <td className="px-6 py-5">
                      <Badge>
                        {payment.status}
                      </Badge>
                    </td>

                    <td className="px-6 py-5 text-center">
                      <Button
                        size="icon"
                        variant="outline"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}