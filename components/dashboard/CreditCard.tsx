import Button from "../ui/Button";

export default function CreditCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-green-50 to-white p-6 shadow-md">

      <p className="text-gray-500">
        Available Credits
      </p>

      <h1 className="mt-2 text-5xl font-bold text-green-600">
        12,450
      </h1>

      <p className="mt-1 text-gray-500">
        ≈ 124 Videos Remaining
      </p>

      <div className="mt-6">
        <Button>
          Top Up Credits
        </Button>
      </div>

    </div>
  );
}