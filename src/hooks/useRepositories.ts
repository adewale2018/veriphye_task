import { GET_USER_REPOS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export const useRepositories = () => {
  const [username, setUsername] = useState("");
  const { loading, error, data } = useQuery(GET_USER_REPOS, {
    variables: { username, first: 20 },
    skip: !username,
  });

  const repositories = data?.user?.repositories?.nodes || [];
  return {
    username,
    setUsername,
    loading,
    error,
    repositories,
  };
};
