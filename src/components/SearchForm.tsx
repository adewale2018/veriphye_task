import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

interface OnSubmitProps {
  onSubmit: (name: string) => void;
}

const SearchForm = ({ onSubmit }: OnSubmitProps) => {
  const [inputName, setInputName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(inputName.trim());
  };
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
          className="cursor-pointer px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
          type="submit"
        >
          <Search className="mr-1" /> Search
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
