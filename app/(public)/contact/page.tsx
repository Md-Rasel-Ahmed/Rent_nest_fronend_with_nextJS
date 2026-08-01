import {
  Mail,
  Phone,
  MapPin,
  Clock,
 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}

      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="font-semibold text-primary">CONTACT US</p>

          <h1 className="mt-4 text-5xl font-bold">
            We had Love to Hear From You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Have a question, suggestion, or need assistance? Our team is here to
            help you with anything related to RentNest.
          </p>
        </div>
      </section>

      {/* Contact */}

      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left */}

          <div className="space-y-6">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <Mail className="h-10 w-10 text-primary" />

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    support@rentnest.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <Phone className="h-10 w-10 text-primary" />

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">
                    +880 1234-567890
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <MapPin className="h-10 w-10 text-primary" />

                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-muted-foreground">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <Clock className="h-10 w-10 text-primary" />

                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="text-muted-foreground">
                    Sunday - Thursday
                  </p>

                  <p className="text-muted-foreground">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right */}

          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold">
                  Send Us a Message
                </h2>

                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and well get back to you as soon as
                  possible.
                </p>

                <form className="mt-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input placeholder="John Doe" />
                    </div>

                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Subject</Label>
                    <Input placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2">
                    <Label>Message</Label>

                    <Textarea
                      rows={6}
                      placeholder="Write your message..."
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map */}

      <section className="container mx-auto px-4 pb-24">
        <Card>
          <CardContent className="flex h-96 items-center justify-center rounded-xl bg-muted">
            <p className="text-lg text-muted-foreground">
              Google Map will be integrated here.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Social */}

      <section className="border-t py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div>
            <h3 className="text-xl font-semibold">
              Follow RentNest
            </h3>

            <p className="text-muted-foreground">
              Stay connected with us on social media.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
            >
              {/* < className="h-5 w-5" /> */}
            </Button>

            <Button
              variant="outline"
              size="icon"
            >
              {/* <Instagram className="h-5 w-5" /> */}
            </Button>

            <Button
              variant="outline"
              size="icon"
            >
              {/* <Linkedin className="h-5 w-5" /> */}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}