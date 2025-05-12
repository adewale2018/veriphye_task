import type { PageInfo, Repository } from "../types";

import { GET_USER_REPOS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export const useRepositories = () => {
  const [first] = useState(15);
  const [username, setUsername] = useState("");
  const [before, setBefore] = useState<string | null>(null);
  const [after, setAfter] = useState<string | null>(null);
  const [languageFilter, setLanguageFilter] = useState("");
  const [sortBy, setSortBy] = useState("updated");

  const { loading, error, data } = useQuery(GET_USER_REPOS, {
    variables: { username, first, after, before, last: null },
    skip: !username,
    notifyOnNetworkStatusChange: true,
  });
  const pageInfo = data?.user.repositories.pageInfo;

  const handleNext = () => {
    if (data?.user?.repositories.pageInfo.hasNextPage) {
      setAfter(data.user.repositories.pageInfo.endCursor);
      setBefore(null);
    }
  };

  const handlePrevious = () => {
    if (data?.user?.repositories.pageInfo.hasPreviousPage) {
      setBefore(data.user.repositories.pageInfo.startCursor);
      setAfter(null);
    }
  };

  const repositories = data?.user?.repositories?.nodes || [];

  const filteredRepos = languageFilter
    ? repositories.filter(
        (repo: Repository) =>
          repo.primaryLanguage?.name?.toLowerCase() ===
          languageFilter.toLowerCase()
      )
    : repositories;

  const sortedRepos = [...filteredRepos].sort((a, b) => {
    if (sortBy === "stars") return b.stargazerCount - a.stargazerCount;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  return {
    username,
    setUsername,
    loading,
    error,
    repositories: sortedRepos as Repository[],
    after,
    before,
    pageInfo: pageInfo as PageInfo | undefined,
    handleNext,
    handlePrevious,
    languageFilter,
    setLanguageFilter,
    sortBy,
    setSortBy,
    availableLanguages: [
      ...new Set(
        repositories
          .map((repo: Repository) => repo.primaryLanguage?.name)
          .filter(Boolean)
      ),
    ] as string[],
  };
};
