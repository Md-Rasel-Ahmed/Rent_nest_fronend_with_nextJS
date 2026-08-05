"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { loginAction } from "@/app/(public)/login/_actions/auth";

type LoginFormData = {
  email: string;
  password: string;
};

export default function  LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    try {
      const res = await loginAction(data);
      
      if (res.success) {
        toast.success(res.message || "Logged in successfully!");
        console.log(res.role)
        if(res.role==="ADMIN"){
          router.push('/admin/dashboard')
        }else if(res.role==="TENANT"){
          router.push('/tenant/dashboard')
        }else{
          router.push('/landlord/dashboard')
        }
        // router.push('/');
        // router.refresh();
      } else {
        toast.error(res.message || "Failed to login!");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-0 shadow-2xl">
      <CardContent className="p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
          <p className="mt-2 text-muted-foreground">
            Sign in to access your RentNest account.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
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
                placeholder="Enter your email"
                className="h-12 pl-11"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Password</Label>
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Minimum 4 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="h-12 pl-11 pr-11"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-3.5"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Eye className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="rounded border-gray-300" />
              Remember me
            </label>
          </div>

          <Button type="submit" disabled={isLoading} className="h-12 w-full">
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Processing...
              </span>
            ) : (
              "Sign In"
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Do not have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-primary hover:underline"
            >
              Create Account
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}