import Image from "next/image";
import Navbar from '@/components/navbar';
import Gallery from "@/components/gallery";
import HomeBanner from '@/components/homebanner';
import WeddingInvitation from "@/components/weddingProfile";
import WeddingCountdown from "@/components/weddingCountdown";
export default function Home() {
  return (
   <div>
    <Navbar />
    <HomeBanner />
  <WeddingInvitation />
    <Gallery />
    <WeddingCountdown />
   </div>
  );
}


