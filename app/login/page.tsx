"use client";
import GoogleSignIn from "@/components/auth/GoogleSignIn";

import { useState } from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { supabase } from "@/lib/supabase/client";



export default function LoginPage() {

  const router = useRouter();

  const searchParams =
  useSearchParams();

const redirect =
  searchParams.get(
    "redirect"
  ) || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin() {

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push(redirect);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">

      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/[0.03] p-10">
 <h1 className="mb-10 text-5xl">
          Welcome Back
        </h1>
        <p className="mb-10 text-zinc-500">
  Continue your writing journey.
</p>
        <div className="mb-6">

  <GoogleSignIn
  redirectTo={redirect}
/>

</div>

<div className="relative my-8">

  <div className="absolute inset-0 flex items-center">

    <div className="w-full border-t border-white/10" />

  </div>

  <div className="relative flex justify-center text-xs uppercase">

    <span className="bg-black px-4 text-zinc-500">
      Or continue with email
    </span>

  </div>

</div>

       

        <div className="space-y-6">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 outline-none"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-full bg-white py-5 text-black transition hover:scale-[1.02]"
          >
            {loading ? "Signing in..." : "Login"}
          </button>

        </div>

      </div>

    </main>
  );
}