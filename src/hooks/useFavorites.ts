"use client";

import {
  useEffect,
  useState,
} from "react";

export default function useFavorites() {

  const [favorites, setFavorites] =
    useState<string[]>([]);

  useEffect(() => {

    const stored =
      localStorage.getItem(
        "favorite-poems"
      );

    if (stored) {

      setFavorites(
        JSON.parse(stored)
      );

    }

  }, []);

  const toggleFavorite = (
    slug: string
  ) => {

    const updated =
      favorites.includes(slug)

        ? favorites.filter(
            (item) =>
              item !== slug
          )

        : [
            ...favorites,
            slug,
          ];

    setFavorites(updated);

    localStorage.setItem(
      "favorite-poems",
      JSON.stringify(updated)
    );
  };

  return {
    favorites,
    toggleFavorite,
  };
}