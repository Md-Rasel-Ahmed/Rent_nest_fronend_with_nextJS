import Link from "next/link";
import {
  
  Link2,
  
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Properties",
    href: "/properties",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const supportLinks = [
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];

const socials = [
  {
    icon: "Face",
    href: "#",
  },
  {
    icon: "Twi",
    href: "#",
  },
  {
    icon: "Ins",
    href: "#",
  },
  {
    icon: Link2,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-3xl font-black tracking-tight text-primary"
            >
              RentNest
            </Link>

            <p className="mt-6 leading-7 text-muted-foreground">
              Discover verified rental properties, connect with trusted
              landlords, and find your next home with confidence.
            </p>

            <div className="mt-8 flex gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-primary hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold">
              Support
            </h3>

            <ul className="mt-6 space-y-4">
              {supportLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />

                <p className="text-muted-foreground">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-primary" />

                <p className="text-muted-foreground">
                  support@rentnest.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-primary" />

                <p className="text-muted-foreground">
                  +880 1700-000000
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t pt-8 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} RentNest. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-primary"
            >
              Privacy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="hover:text-primary"
            >
              Terms
            </Link>

            <Link
              href="/cookies"
              className="hover:text-primary"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}