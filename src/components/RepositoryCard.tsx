import { Circle, Clock, GitFork, Star } from "lucide-react";

import type { Repository } from "../types";
import { formatDistanceToNow } from "date-fns";
import { getLanguageColor } from "../utils/getLanguageColor";

export default function RepositoryCard(repository: Repository) {
  return (
    <div className="group border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-100 bg-white">
      {/* Header with repo name */}
      <div className="flex items-start justify-between">
        <a
          href={repository?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-blue-500 hover:text-blue-600 transition-colors line-clamp-1"
        >
          {repository?.name}
        </a>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-2">
          Public
        </span>
      </div>

      {/* Description */}
      {repository?.description && (
        <p className="mt-3 text-gray-600 line-clamp-2">
          {repository?.description}
        </p>
      )}

      {/* Stats bar */}
      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-600">
        {/* Stars */}
        <div className="flex items-center bg-gray-50 px-2 py-1 rounded-md">
          <Star className="mr-1.5 w-4 h-4 text-yellow-500 fill-yellow-400" />
          <span className="font-medium">{repository.stargazerCount.toLocaleString()}</span>
        </div>

        {/* Forks */}
        <div className="flex items-center bg-green-50 px-2 py-1 rounded-md">
          <GitFork className="mr-1.5 w-4 h-4 text-gray-500" />
          <span className="font-medium">{repository.forkCount.toLocaleString()}</span>
        </div>

        {/* Language */}
        {repository.primaryLanguage?.name && (
          <div className="flex items-center bg-gray-50 px-2 py-1 rounded-md">
            <Circle
              className="mr-1.5 w-3 h-3"
              style={{
                color: getLanguageColor(repository.primaryLanguage.name),
              }}
            />
            <span className="font-medium">{repository.primaryLanguage.name}</span>
          </div>
        )}

        {/* Updated time */}
        <div className="flex items-center text-gray-500 ml-auto">
          <Clock className="mr-1.5 w-4 h-4 text-gray-400" />
          <span className="text-xs">
            Updated {formatDistanceToNow(new Date(repository.updatedAt))} ago
          </span>
        </div>
      </div>
    </div>
  );
}