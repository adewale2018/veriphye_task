import { gql } from "@apollo/client";

export const GET_USER_REPOS = gql`
  query GetUserRepositories(
    $username: String!
    $first: Int
    $after: String
    $before: String
    $orderBy: RepositoryOrder
  ) {
    user(login: $username) {
      name
      login
      repositories(
        first: $first
        after: $after
        before: $before
        orderBy: $orderBy
      ) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        nodes {
          id
          name
          description
          url
          stargazerCount
          forkCount
          updatedAt
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;
