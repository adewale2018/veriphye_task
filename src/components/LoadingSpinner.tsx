import { Loader2 } from "lucide-react";
export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center my-40">
      <p className="mb-1">Loading data...</p>
      <Loader2 className="animate-spin" />
    </div>
  );
}
