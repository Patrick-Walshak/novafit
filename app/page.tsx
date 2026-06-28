import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewArrivals />
    </div>
  );
}
