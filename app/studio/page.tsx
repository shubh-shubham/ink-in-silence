"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase/client";
import { toast } from "sonner";
import FloatingToolbar from "./FloatingToolbar";
import TemplateGallery from "./TemplateGallery";
import {
  createProfile,
} from "@/lib/supabase/createProfile";
import PenNameModal
from "@/components/profile/PenNameModal";
import PoemCard
from "@/components/poetry/PoemCard";


export default function StudioPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [title, setTitle] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [excerpt, setExcerpt] =
    useState("");

  const [content, setContent] =
    useState("");

  const [mood, setMood] =
    useState("");

  const [coverImage, setCoverImage] =
    useState("");

  const [audioUrl, setAudioUrl] =
    useState("");

  const [uploading, setUploading] =
    useState(false);

  const [poems, setPoems] =
    useState<any[]>([]);

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [

  templateOpen,

  setTemplateOpen,

  ] = useState(false);

const [

  selectedTemplate,

  setSelectedTemplate,

] = useState<any>(null);

const [

  penNameOpen,

  setPenNameOpen,

  
] = useState(false);

const [fontFamily, setFontFamily] =
  useState("Playfair Display");
const [alignment, setAlignment] =
  useState("text-center");

  useEffect(() => {

  async function checkUser() {

  const {

    data: { user },

  } = await supabase.auth.getUser();

  if (!user) {

    window.location.replace(
      "/login"
    );

    return;
  }

  await createProfile();

  const {

    data: profile,

  } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  console.log(profile);

  if (
    !profile?.pen_name?.trim()
  ) {

    setPenNameOpen(true);
  }

  setLoading(false);
}
  async function loadPoems() {

    const { data } =
      await supabase
        .from("poems")
        .select("*")
        .order("created_at", {

          ascending: false,

        });

    setPoems(data || []);
  }

  if (
    window.location.hash
  ) {

    window.history.replaceState(

      {},

      document.title,

      window.location.pathname

    );
  }

  checkUser();
  loadPoems();

}, [router]);

  async function createPoem() {

    if (
      !title ||
      !content
    ) {

      toast.error(
        "Please write your poem first."
      );

      return;
    }

    const {

  data: { user },

} = await supabase.auth.getUser();

const {

  data: profile,

} = await supabase
  .from("profiles")
  .select("*")
  .eq("id", user?.id)
  .single();

    let error;

    if (editingId) {

      const response =
        await supabase
          .from("poems")
          .update({
            title,
            slug,
            excerpt,
            content,
            mood,
            cover_image:
              coverImage,
            audio_url:
              audioUrl,
            author_name:
            profile?.pen_name || "Anonymous",

            template_name:
              selectedTemplate?.name || "",

            template_image:
              selectedTemplate?.image || "",
              author_id: user?.id,
          })
          .eq(
            "id",
            editingId
          );

      error =
        response.error;

    } else {


      const {

  data: { user },

} = await supabase.auth.getUser();

if (!user) return;

const {

  data: profile,

} = await supabase
  .from("profiles")
  .select("*")
  .eq("id", user.id)
  .maybeSingle();

if (!profile) {

  alert(
    "Profile not found"
  );

  return;
}

      const response =
        await supabase
          .from("poems")
          .insert({
            title,
            slug,
            excerpt,
            content,
            mood,
            cover_image:
              coverImage,
            audio_url:
              audioUrl,
            author_name:
            profile?.pen_name || "Anonymous",

            template_name:
              selectedTemplate?.name || "",

            template_image:
              selectedTemplate?.image || "",
              author_id: profile.id,
          });

      error =
        response.error;
    }

    if (error) {

      toast.error(
        error.message
      );

      return;
    }

    const { data } =
      await supabase
        .from("poems")
        .select("*")
        .order(
          "created_at",
          {
            ascending: false,
          }
        );

    setPoems(data || []);

    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setMood("");

    setCoverImage("");
    setAudioUrl("");

    setEditingId(null);

    toast.success(

      editingId
        ? "Poem updated"
        : "Poem published"

    );
  }

async function savePenName(
  name: string
) {

  const {

    data: { user },

  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase
    .from("profiles")
    .update({

      pen_name: name,

    })
    .eq("id", user.id);

  setPenNameOpen(false);
}

  function editPoem(
    poem: any
  ) {

    setEditingId(
      poem.id
    );

    setTitle(
      poem.title
    );

    setSlug(
      poem.slug
    );

    setExcerpt(
      poem.excerpt
    );

    setCoverImage(
      poem.cover_image || ""
    );

    setAudioUrl(
      poem.audio_url || ""
    );

    setContent(
      poem.content.replace(
        /\\n/g,
        "\n"
      )
    );

    setMood(
      poem.mood
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function logout() {

    await supabase.auth.signOut();

    localStorage.clear();

    sessionStorage.clear();

    router.replace("/");
  }

  async function deletePoem(
    id: string
  ) {

    const confirmed =
      confirm(
        "Delete this poem?"
      );

    if (!confirmed)
      return;

    await supabase
      .from("poems")
      .delete()
      .eq("id", id);

    setPoems(

      poems.filter(
        (poem) =>
          poem.id !== id
      )

    );
  }

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-black text-white">

        Loading...

      </div>

    );
  }



return (

  <main className="relative min-h-screen overflow-hidden bg-black px-6 text-white">

    {/* Ambient Background */}

    <div className="pointer-events-none fixed inset-0 overflow-hidden">

      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-zinc-500/10 blur-3xl" />

    </div>

    {/* Logout */}

    {/* Floating Navigation */}

<div className="fixed left-1/2 top-2 pt-8 z-50 -translate-x-1/2">

  <div className="flex items-center gap-8 rounded-full border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-2xl">

    <a
      href="/"
      className="text-sm text-zinc-400 transition transition-all duration-300 hover:text-white"
    >

      Home

    </a>

    <a
      href="/"
      className="text-sm text-zinc-400 transition transition-all duration-300 hover:text-white"
    >

      Explore

    </a>

    <div className="h-5 w-px bg-white/10" />

    <p className="text-sm uppercase tracking-[0.3em] text-white/40">

      Ink in Silence

    </p>

    <div className="h-5 w-px bg-white/10" />

   

    <button
      onClick={logout}
      className="text-sm text-zinc-400 transition hover:text-red-400"
    >

      Logout

    </button>

  </div>

</div>

    {/* Writing Canvas */}

<div className="relative z-10 mx-auto grid min-h-screen max-w-7xl gap-20 px-4 pb-40 pt-32 lg:grid-cols-2">

 {/* LEFT SIDE */}

<div className="flex min-h-[85vh] flex-col justify-between rounded-[40px] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">

  {/* TOP */}

  <div>

    {/* Header */}

    <div className="mb-10 flex items-center justify-between">

      <div>

        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-white/30">

          Ink in Silence

        </p>

        <h1 className="text-2xl text-white">

          Write in silence.

        </h1>

      </div>

      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">

        <div className="h-2 w-2 rounded-full bg-emerald-400" />

        <p className="text-xs text-white/60">

          Live Preview

        </p>

      </div>

    </div>

    {/* Template */}

    {selectedTemplate && (

      <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl">

        <div className="h-3 w-3 rounded-full bg-white/60" />

        <p className="text-sm text-white">

          {selectedTemplate.name}

        </p>

      </div>

    )}

    {/* Title */}

    <input

      placeholder="Untitled Poem"

      value={title}

      onChange={(e) => {

        const value =
          e.target.value;

        setTitle(value);

        setSlug(

          value
            .toLowerCase()
            .replaceAll(" ", "-")
            .replace(
              /[^\w-]+/g,
              ""
            )

        );
      }}

      className="mb-10 w-full bg-transparent text-6xl font-light tracking-tight text-white outline-none placeholder:text-white/20"

    />

    {/* Content */}

    <textarea

      placeholder="Start writing here..."

      value={content}

      onChange={(e) =>
        setContent(
          e.target.value
        )
      }

      className="min-h-[260px] w-full resize-none bg-transparent text-xl leading-[2.1] text-white/90 outline-none placeholder:text-white/20"

    />

  </div>

  {/* CONTROLS */}

<div className="mt-10 space-y-5">

  {/* Typography */}

  <div className="flex flex-wrap items-center gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-4">

    <p className="text-xs uppercase tracking-[0.3em] text-white/40">

      Typography

    </p>

    {/* Fonts */}

    <div className="flex overflow-hidden rounded-2xl border border-white/10">

      {[
  {
    label: "Modern",
    value: "Poppins",
  },
  {
    label: "Elegant",
    value: "Playfair Display",
  },
  {
    label: "Script",
    value: "Dancing Script",
  },
  {
    label: "Signature",
    value: "Great Vibes",
  },
  {
    label: "Bold",
    value: "Bebas Neue",
  },
].map((font) => (

        <button

          key={font.value}

          onClick={() =>
            setFontFamily(
              font.value
            )
          }

          className={`px-5 py-3 text-sm transition ${
            fontFamily ===
            font.value

              ? "bg-white text-black"

              : "text-white"
          }`}
        >

          {font.label}

        </button>

      ))}

    </div>

    {/* Alignment */}

    <div className="flex overflow-hidden rounded-2xl border border-white/10">

      {[
        "text-left",
        "text-center",
        "text-right",
      ].map((item) => (

        <button

          key={item}

          onClick={() =>
            setAlignment(item)
          }

          className={`px-5 py-3 text-sm capitalize transition ${
            alignment === item

              ? "bg-white text-black"

              : "text-white"
          }`}
        >

          {item.replace(
            "text-",
            ""
          )}

        </button>

      ))}

    </div>

  </div>

  {/* Actions */}

  <div className="flex gap-4">

    <button

      onClick={() =>
        setTemplateOpen(true)
      }

      className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm text-white transition hover:bg-white/[0.05]"

    >

      Templates

    </button>

    <button

      onClick={createPoem}

      className="rounded-2xl bg-white px-6 py-4 text-sm text-black transition hover:scale-[1.02]"

    >

      Publish

    </button>

  </div>

</div>
</div>
{/* RIGHT SIDE */}
      
  <div className="sticky top-24 flex items-start justify-center">

    <PoemCard
    alignment={alignment}
    fontFamily={fontFamily}
     title={title}

      content={
        content ||
        "Your poem will appear here..."
      }

      author={
        poems?.[0]
          ?.author_name ||
        "Anonymous"
      }

      templateImage={
        selectedTemplate?.image ||
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
      }

      templateName={
        selectedTemplate?.name ||
        "Midnight Rain"
      }

    />

  </div>

</div>

    
       <TemplateGallery

  open={templateOpen}

  onClose={() =>
    setTemplateOpen(false)
  }

  title={title}

  content={content}

  onSelect={(template) =>
    setSelectedTemplate(
      template
    )
  }

/>
<PenNameModal

  open={penNameOpen}

  onSave={savePenName}

/>
  </main>
);
}