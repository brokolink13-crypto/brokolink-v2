import BottomNavigation from "@/components/layout/BottomNavigation";
import Header from "./Header";
import CreditCard from "./CreditCard";
import LinkInput from "./LinkInput";
import GenerateButton from "./GenerateButton";
import VideoStyle from "./VideoStyle";
import AffiliateTip from "./AffiliateTip";
import RecentVideos from "./RecentVideos";

export default function DashboardScreen() {
  return (
    <main className="space-y-6 bg-gray-50 p-6 pb-28">

      <Header />

      <CreditCard />

      <LinkInput />

      <GenerateButton />

      <VideoStyle />

      <AffiliateTip />

      <RecentVideos />

      <BottomNavigation />

    </main>
  );
}
