type Props = {
  placeholder?: string;
  type?: string;
};

export default function Input({
  placeholder,
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full
        rounded-2xl
        border
        border-gray-200
        px-5
        py-4
        outline-none
        focus:border-green-500
      "
    />
  );
}