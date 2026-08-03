"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { singupAction } from "@/app/(public)/login/_actions/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
type SingupFormData = {
    name:string,
    phone?:string,
    email: string;
   password: string;
   role:string

};
export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<SingupFormData>();
const onSubmit = async (data: SingupFormData) => {
   setIsLoading(true);
   const singupPayload={
    name:data.name,
    password:data.password,
    email:data.email,
    phone:data.phone||"",
    role:data?.role.toUpperCase()
   }
   console.log(singupPayload);
      try {
        const res = await singupAction(singupPayload);
  
        if (res.success) {
          toast.success(res.message || "Singup successfully!");
          console.log(res);
          router.push("/login");
          router.refresh();
        } else {
          toast.error(res.message || "Failed to singup!");
        }
      } catch (error) {
        toast.error("An unexpected error occurred.");
      } finally {
        setIsLoading(false);
      }
};
  return (
    <Card className="w-full max-w-lg border-0 shadow-2xl">
      <CardContent className="p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Create Your Account 🚀
          </h1>

          <p className="mt-2 text-muted-foreground">
            Join RentNest and start exploring verified rental properties.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          {/* Name */}

          <div className="space-y-2">
            <Label>Full Name</Label>

            <div className="relative">
              <User className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />

              <Input
              {...register("name", {
      required: "Name is required",
    })}
                placeholder="John Doe"
                className="h-12 pl-11"
              />
               {errors.name && (
    <p className="text-sm text-red-500">
      {errors.name.message}
    </p>
  )}
            </div>
          </div>

          {/* Email */}

          <div className="space-y-2">
            <Label>Email Address</Label>

            <div className="relative">
              <Mail className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />

              <Input
              {...register("email", {
      required: "Email is required",
    })}
                type="email"
                placeholder="john@example.com"
                className="h-12 pl-11"
              />
               {errors.email && (
    <p className="text-sm text-red-500">
      {errors.email.message}
    </p>
  )}
            </div>
          </div>

          {/* Phone */}

          <div className="space-y-2">
            <Label>Phone Number</Label>

            <div className="relative">
              <Phone className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />

              <Input
               {...register("phone")}
                placeholder="+8801XXXXXXXXX"
                className="h-12 pl-11"
              />
            </div>
          </div>

          {/* Role */}

          <div className="space-y-2">
            <Label>Register As</Label>

            <select  {...register("role")} className="h-12 w-full rounded-md border bg-background px-3">
              <option>Tenant</option>
              <option>Landlord</option>
            </select>
          </div>

          {/* Password */}

          <div className="space-y-2">
            <Label>Password</Label>

            <div className="relative">
              <Lock className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />

              <Input
                {...register("password", {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Minimum 6 characters",
      },
    })}
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="h-12 pl-11 pr-11"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-3"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
               {errors.password && (
    <p className="text-sm text-red-500">
      {errors.password.message}
    </p>
  )}
            </div>
          </div>

          {/* Terms */}

          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1" />

            <span>
              I agree to the{" "}
              <Link
                href="/terms-and-conditions"
                className="text-primary hover:underline"
              >
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </span>
          </label>

          <Button type="submit" className="h-12 w-full">
            Create Account
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}