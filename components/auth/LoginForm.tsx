"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";


type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<LoginFormData>();

const onSubmit = async(data: LoginFormData) => {
  console.log(data);
  const userPayload={
    email:data.email,
    password:data.password
  }
const res=await fetch(`https://assinemen4.vercel.app/api/auth/login`,{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(data)
})
const result=await res.json()

  console.log(result);

};
  return (
    <Card className="w-full max-w-md border-0 shadow-2xl">
      <CardContent className="p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Welcome Back 👋
          </h1>

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
               {errors.email && (
    <p className="text-sm text-red-500">
      {errors.email.message}
    </p>
  )}
            </div>
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
                className="absolute right-4 top-3"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Eye className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
               {errors.password && (
    <p className="text-sm text-red-500">
      {errors.password.message}
    </p>
  )}
            </div>
          </div>

          {/* Remember */}

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />

              Remember me
            </label>
          </div>

          <Button type="submit" className="h-12 w-full">
            Sign In
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