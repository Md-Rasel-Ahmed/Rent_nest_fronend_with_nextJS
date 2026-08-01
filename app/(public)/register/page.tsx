import SignupForm from "@/components/auth/SingupForm";

export default function RegisterPage() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16">
      <SignupForm />
    </section>
  );
}