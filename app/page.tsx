import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/home/Hero";

import FeaturedPoems from "@/components/explore/FeaturedPoems";
import MoodCategories from "@/components/explore/MoodCategories";
import MobileNav from "@/components/layout/MobileNav";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
  <Sidebar />
  <Navbar />
  <MobileNav />

  <div className="lg:ml-24">
    <Hero />
    <FeaturedPoems />
    <MoodCategories />
  </div>
</main>
  );
}