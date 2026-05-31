"use client";

export default function SharePoem() {

  const handleShare = async () => {

    await navigator.clipboard.writeText(
      window.location.href
    );

    alert("Poem link copied 🖤");
  };

  return (

    <button

      onClick={handleShare}

      className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white transition hover:bg-white/[0.06]"
    >

      Share Poem

    </button>
  );
}