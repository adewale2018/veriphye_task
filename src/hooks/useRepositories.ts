import type { PageInfo, Repository } from "../types";
import { useEffect, useState } from "react";

import { GET_USER_REPOS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

export const useRepositories = () => {
  const [first] = useState(15);
  const [username, setUsername] = useState("");
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [before, setBefore] = useState<string | null>(null);
  const [after, setAfter] = useState<string | null>(null);
  const [languageFilter, setLanguageFilter] = useState("");
  const [sortBy, setSortBy] = useState("updated");

  const variables =
    direction === "forward"
      ? {
          username,
          first,
          after,
          orderBy: { field: "UPDATED_AT", direction: "DESC" },
        }
      : {
          username,
          last: first,
          before,
          orderBy: { field: "UPDATED_AT", direction: "DESC" },
        };

  const { loading, error, data } = useQuery(GET_USER_REPOS, {
    variables,
    skip: !username,
    notifyOnNetworkStatusChange: true,
  });
  const pageInfo = data?.user.repositories.pageInfo;

  const handleNext = () => {
    if (pageInfo?.hasNextPage) {
      setAfter(pageInfo.endCursor);
      setBefore(null);
      setDirection("forward");
    }
  };

  const handlePrevious = () => {
    if (pageInfo?.hasPreviousPage) {
      setBefore(pageInfo.startCursor);
      setAfter(null);
      setDirection("backward");
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

  useEffect(() => {
    setAfter(null);
    setBefore(null);
    setDirection("forward");
  }, [username, languageFilter, sortBy]);

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
