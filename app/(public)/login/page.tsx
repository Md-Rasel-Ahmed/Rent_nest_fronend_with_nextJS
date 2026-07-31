import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16">
      <LoginForm />
    </section>
  );
}