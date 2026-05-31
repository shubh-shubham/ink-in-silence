"use client";

import Link from "next/link";

import { useEffect, useState }
from "react";

import { supabase }
from "@/lib/supabase/client";

import { useRouter }
from "next/navigation";

export default function Navbar() {

  const [open, setOpen] =
    useState(false);

  const [user, setUser] =
    useState<any>(null);

  const router =
    useRouter();

  useEffect(() => {

    supabase.auth
      .getUser()
      .then(({ data }) => {

        setUser(data.user);

      });

  }, []);

  async function logout() {

    await supabase.auth.signOut();

    router.push("/");

    router.refresh();
  }

  return (

    <nav className="fixed top-6 z-50 flex w-full justify-center px-6">

      <div className="flex items-center gap-14 rounded-full border border-white/10 bg-black/40 px-12 py-5 backdrop-blur-2xl">

        {/* Brand */}

        <Link
          href="/"
          className="text-sm uppercase tracking-[0.4em] text-white/70 transition hover:text-white"
        >

          Ink in Silence

        </Link>

        {/* Links */}

        <div className="hidden items-center gap-10 md:flex">

          <Link
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >

            Home

          </Link>

          <button className="text-sm text-zinc-400 transition hover:text-white">

            Explore

          </button>

          <button className="text-sm text-zinc-400 transition hover:text-white">

            Moods

          </button>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <Link

            href={
              user
                ? "/studio"
                : "/login"
            }

            className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white transition hover:bg-white/[0.08]"
          >

            Write

          </Link>

          {user ? (

            <div className="relative">

              <button

                onClick={() =>
                  setOpen(!open)
                }

              >

                <img

                  src={
                    user?.user_metadata
                      ?.avatar_url ||

                    `https://ui-avatars.com/api/?name=${
                      user?.email ||
                      "Ink"
                    }`
                  }

                  alt="avatar"

                  className="h-11 w-11 rounded-full border border-white/10 object-cover"
                />

              </button>

              {open && (

                <div className="absolute right-0 mt-4 w-60 overflow-hidden rounded-3xl border border-white/10 bg-black/90 backdrop-blur-2xl">

                  <div className="border-b border-white/10 px-5 py-5">

                    <p className="text-sm text-white">

                      {
                        user
                          ?.user_metadata
                          ?.full_name ||
                        "Ink Writer"
                      }

                    </p>

                    <p className="mt-1 text-xs text-zinc-500">

                      {user.email}

                    </p>

                  </div>

                  <Link

                    href="/profile"

                    className="block w-full px-5 py-4 text-sm text-white transition hover:bg-white/5"
                  >

                    Profile

                  </Link>

                  <Link

                    href="/studio"

                    className="block w-full px-5 py-4 text-sm text-white transition hover:bg-white/5"
                  >

                    Studio

                  </Link>

                  <button

                    onClick={logout}

                    className="w-full px-5 py-4 text-left text-sm text-red-400 transition hover:bg-white/5"
                  >

                    Logout

                  </button>

                </div>

              )}

            </div>

          ) : (

            <Link

              href="/login"

              className="rounded-full bg-white px-6 py-3 text-sm text-black transition hover:scale-[1.02]"
            >

              Sign In

            </Link>

          )}

        </div>

      </div>

    </nav>
  );
}