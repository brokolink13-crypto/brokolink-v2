import Image from "next/image";

type BrokoCharacterProps = {
  size?: number;
};

export default function BrokoCharacter({
  size = 220,
}: BrokoCharacterProps) {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/broko/broko.png"
        alt="Broko Character"
        width={size}
        height={size}
        priority
      />
    </div>
  );
}
