export default function Loading() {

  return (

    <main className="min-h-screen animate-pulse bg-black px-10 py-24 text-white">

      <div className="mx-auto max-w-4xl">

        <div className="mb-6 h-4 w-32 rounded bg-white/10" />

        <div className="mb-10 h-20 w-2/3 rounded bg-white/10" />

        <div className="mb-16 h-6 w-40 rounded bg-white/10" />

        <div className="mb-20 h-[500px] rounded-[40px] bg-white/10" />

        <div className="space-y-8">

          <div className="h-6 w-full rounded bg-white/10" />

          <div className="h-6 w-5/6 rounded bg-white/10" />

          <div className="h-6 w-4/6 rounded bg-white/10" />

          <div className="h-6 w-3/4 rounded bg-white/10" />

        </div>

      </div>

    </main>
  );
}