"use client";

import { supabase } from "@/lib/supabase/client";

interface Props {

  redirectTo?: string;
}

export default function GoogleSignIn({

  redirectTo = "/",

}: Props) {

  const signInWithGoogle =
    async () => {

      await supabase.auth.signInWithOAuth({

        provider: "google",

        options: {

          redirectTo:
            window.location.origin +
            redirectTo,

          queryParams: {

            prompt:
              "select_account",

          },

        },

      });
    };

  return (

    <button

      onClick={signInWithGoogle}

      className="rounded-full bg-white px-6 py-3 text-sm text-black transition hover:scale-[1.02]"
    >

      Sign In With Google

    </button>
  );
}