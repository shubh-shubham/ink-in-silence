"use client";

import { useEffect } from "react";

interface Props {
  slug: string;
  title: string;
}

export default function RecentlyViewedTracker({
  slug,
  title,
}: Props) {

  useEffect(() => {

    const existing =
      JSON.parse(
        localStorage.getItem(
          "recent-poems"
        ) || "[]"
      );

    const filtered =
      existing.filter(
        (item: any) =>
          item.slug !== slug
      );

    const updated = [

      {
        slug,
        title,
      },

      ...filtered,

    ].slice(0, 5);

    localStorage.setItem(
      "recent-poems",
      JSON.stringify(updated)
    );

  }, [slug, title]);

  return null;
}