import type { RepositoryProps } from "../types";
import { formatDistanceToNow } from "date-fns";
import { getLanguageColor } from "../utils/getLanguageColor";

export default function RepositoryCard(repository: RepositoryProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <a
        href={repository?.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-semibold text-blue-600 hover:underline"
      >
        {repository?.name}
      </a>

      {repository?.description && (
        <p className="mt-2 text-gray-600">{repository?.description}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
        <div className="flex items-center">
          <span className="mr-1">⭐</span>
          <span>{repository.stargazerCount}</span>
        </div>

        <div className="flex items-center">
          <span className="mr-1">⑂</span>
          <span>{repository.forkCount}</span>
        </div>

        {repository.primaryLanguage?.name && (
          <div className="flex items-center">
            <span
              className="w-3 h-3 rounded-full mr-1"
              style={{
                backgroundColor: getLanguageColor(
                  repository.primaryLanguage.name
                ),
              }}
            />
            <span>{repository?.primaryLanguage?.name}</span>
          </div>
        )}

        <div className="flex items-center">
          <span>
            Updated {formatDistanceToNow(new Date(repository.updatedAt))} ago
          </span>
        </div>
      </div>
    </div>
  );
}
