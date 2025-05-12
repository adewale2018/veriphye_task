import { Button } from "./ui/button";
import type { FiltersProps } from "../types";

export default function Filters({
  languageFilter,
  setLanguageFilter,
  sortBy,
  setSortBy,
  availableLanguages,
}: FiltersProps) {

  const handleClearFilters = () => {
    setSortBy("");
    setLanguageFilter("");
  }
  return (
    <div className="flex flex-wrap md:justify-start justify-end items-center my-6 md:gap-4">
      <div className="flex items-center gap-4">
        <label htmlFor="language-filter" className="font-medium text-pri leading-tight">
          Filter by language:
        </label>
        <select
          id="language-filter"
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
          className="px-3 py-1 border rounded"
        >
          <option value="">All languages</option>
          {availableLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <label htmlFor="sort-by" className="font-medium text-pri">
          Sort by:
        </label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-1 border rounded"
        >
          <option value="updated">Last updated</option>
          <option value="stars">Stars</option>
        </select>
      </div>
      <Button className="mt-2 md:mt-0 text-red-600 hover:bg-red-500 hover:text-white cursor-pointer" variant="outline" onClick={handleClearFilters}>Clear Filter</Button>
    </div>
  );
}
