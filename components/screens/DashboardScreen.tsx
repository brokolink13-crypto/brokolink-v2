import Header from "../dashboard/Header";
import CreditCard from "../dashboard/CreditCard";
import LinkInput from "../dashboard/LinkInput";
import GenerateButton from "../dashboard/GenerateButton";
import VideoStyle from "../dashboard/VideoStyle";
import AffiliateTip from "../dashboard/AffiliateTip";
import RecentVideos from "../dashboard/RecentVideos";

export default function DashboardScreen() {
  return (
    <main className="space-y-6 bg-gray-50 p-6">

      <Header />

      <CreditCard />

      <LinkInput />

      <GenerateButton />

      <VideoStyle />

      <AffiliateTip />

      <RecentVideos />

    </main>
  );
}