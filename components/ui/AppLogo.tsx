import Image from "next/image";
import { Assets } from "@/lib/assets";

type Props = {
  width?: number;
};

export default function AppLogo({
  width = 170,
}: Props) {
  return (
    <Image
      src={Assets.logo.vertical}
      alt="BrokoLink"
      width={width}
      height={width}
      priority
    />
  );
}