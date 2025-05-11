import { AlertCircle, Search } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface OnSubmitProps {
  onSubmit: (name: string) => void;
}

const SearchForm = ({ onSubmit }: OnSubmitProps) => {
  const [inputName, setInputName] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputName.trim().length === 0) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }
    onSubmit(inputName.trim());
    setInputName("");
  };

  useEffect(() => {
    if (inputName.trim().length > 0) {
      setShowError(false);
    }
  }, [inputName]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 flex-wrap items-center">
        <Input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Enter GitHub username"
          required
          className="flex-1"
        />
        <Button
          className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          <Search className="mr-1" />{" "}
          <span className="hidden md:block">Search</span>
        </Button>
      </div>
      {showError && (
        <p className="bg-red-100 text-red-700 mb-2 px-2 flex items-center gap-1 py-2 rounded-sm text-sm mt-4">
          <AlertCircle className="h-4 w-4" /> Github username is required!
        </p>
      )}
    </form>
  );
};

export default SearchForm;
