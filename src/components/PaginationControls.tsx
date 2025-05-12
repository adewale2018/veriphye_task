import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

type PaginationControlsProps = {
  handlePrevious: () => void;
  handleNext: () => void;
  loading: boolean;
  pageInfo: {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
};

export default function PaginationControls({
  handlePrevious,
  pageInfo,
  loading,
  handleNext,
}: PaginationControlsProps) {
  return (
    <div className="flex md:justify-end justify-between gap-4 pt-4">
      <Button
        onClick={handlePrevious}
        disabled={!pageInfo.hasPreviousPage}
        variant="outline"
        className="border border-blue-600 text-blue-800"
      >
        Previous
      </Button>
      <Button
        className="px-8 bg-blue-600 hover:bg-blue-800"
        onClick={handleNext}
        disabled={!pageInfo.hasNextPage}
      >
        {loading && <Loader2 className="mr-1 h-4 w-4" />} Next
      </Button>
    </div>
  );
}
