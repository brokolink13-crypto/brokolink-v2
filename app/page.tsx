import Container from "@/components/layout/Container";
import BottomNavigation from "@/components/layout/BottomNavigation";

import Header from "@/components/dashboard/Header";
import CreditCard from "@/components/dashboard/CreditCard";
import LinkInput from "@/components/dashboard/LinkInput";
import GenerateButton from "@/components/dashboard/GenerateButton";
import VideoStyle from "@/components/dashboard/VideoStyle";
import AffiliateTip from "@/components/dashboard/AffiliateTip";

export default function Home() {
  return (
    <>
      <Container>

        <Header />

        <CreditCard />

        <div className="mt-8">
          <LinkInput />
        </div>

        <div className="mt-6">
          <GenerateButton />
          <VideoStyle />
          <AffiliateTip />
        </div>


      </Container>

      <BottomNavigation />
    </>
  );
}
