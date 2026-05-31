"use client";

import { useEffect, useState } from "react";

export default function PublishPoem() {

  const [form, setForm] =
    useState({
      title: "",
      content: "",
      mood: "",
    });

  useEffect(() => {

    const savedDraft =
      localStorage.getItem(
        "poem-draft"
      );

    if (savedDraft) {

      setForm(
        JSON.parse(savedDraft)
      );

    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "poem-draft",
      JSON.stringify(form)
    );

  }, [form]);

  return (

    ...
  );
}