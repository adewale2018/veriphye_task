import { gql } from "@apollo/client";

export const GET_USER_REPOS = gql`
  query getUserRepos($username: String!, $first: Int!) {
    user(login: $username) {
      name
      login
      repositories(
        first: $first
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        nodes {
          name
          description
          stargazerCount
          forkCount
          updatedAt
          primaryLanguage {
            name
          }
          url
        }
      }
    }
  }
`;
