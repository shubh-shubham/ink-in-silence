import { supabase }
from "@/lib/supabase/client";

export async function createProfile() {

  const {

    data: { user },

  } = await supabase.auth.getUser();

  if (!user) return;

  const { data: existing } =
    await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();

  if (existing) return;

  const { error } =
    await supabase
      .from("profiles")
      .insert({

        id: user.id,

        pen_name: "",

        avatar_url:
          user.user_metadata
            ?.avatar_url || "",

      });

  console.log(
    "PROFILE CREATE ERROR",
    error
  );
}