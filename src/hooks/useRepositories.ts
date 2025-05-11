import { GET_USER_REPOS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export const useRepositories = () => {
  const [first] = useState(10);
  const [after, setAfter] = useState<string | null>(null);
  const [before, setBefore] = useState<string | null>(null);
  const [username, setUsername] = useState("");

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

  const repos = data?.user?.repositories?.nodes || [];
  return {
    username,
    setUsername,
    loading,
    error,
    repositories: repos,
    after,
    before,
    pageInfo,
    handleNext,
    handlePrevious,
  };
};
