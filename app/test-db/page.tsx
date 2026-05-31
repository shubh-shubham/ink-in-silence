import { supabase } from "@/lib/supabase/client";

export default async function TestDB() {
  const { data, error } = await supabase
    .from("poems")
    .select("*");

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      
      <h1 className="mb-10 text-5xl">
        Database Test
      </h1>

      {error && (
        <p className="text-red-500">
          {error.message}
        </p>
      )}

      <pre className="overflow-auto rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}