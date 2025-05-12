import type { FiltersProps } from "../types";

export default function Filters({
  languageFilter,
  setLanguageFilter,
  sortBy,
  setSortBy,
  availableLanguages,
}: FiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center my-6 gap-4">
      <div className="flex items-center gap-4">
        <label htmlFor="language-filter" className="font-medium text-blue-800">
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

      <div className="flex items-center gap-4">
        <label htmlFor="sort-by" className="font-medium text-blue-800">
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
    </div>
  );
}
