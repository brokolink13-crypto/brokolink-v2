import Image from "next/image";

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
};

export default function Avatar({
  src = "/images/broko/avatar.png",
  alt = "Broko Avatar",
  size = 48,
}: AvatarProps) {
  return (
    <div
      className="overflow-hidden rounded-full border border-green-100 bg-green-50"
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </div>
  );
}