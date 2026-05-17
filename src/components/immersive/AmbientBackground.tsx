"use client";

export default function AmbientBackground() {
  return (
    <>
      {/* Top Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="absolute left-[20%] top-[30%] h-72 w-72 rounded-full bg-amber-200/[0.03] blur-3xl" />

        <div className="absolute bottom-0 right-[10%] h-96 w-96 rounded-full bg-purple-300/[0.03] blur-3xl" />
      </div>

      {/* Grid Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
    </>
  );
}