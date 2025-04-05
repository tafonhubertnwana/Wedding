import Image from "next/image";
import Navbar from '@/components/navbar';
import Gallery from "@/components/gallery";
import HomeBanner from '@/components/homebanner';
import WeddingInvitation from "@/components/weddingProfile";
import GuestForm from "@/components/guestForm";
import Footer from "@/components/footer";
import WeddingTimeline from "@/components/timeLine";
import WeddingInfo from "@/components/weddingInfo";
import BridalParty from "@/components/brideParty";
export default function Home() {
  return (
   <div>
    <Navbar />
    <HomeBanner />
  <WeddingInvitation />
  {/* <WeddingTimeline /> */}
  <WeddingInfo />
    <Gallery />
    {/* <WeddingCountdown /> */}
    <BridalParty />
    <GuestForm />
    <Footer />
   </div>
  );
}


