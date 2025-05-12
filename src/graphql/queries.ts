import { gql } from "@apollo/client";

export const GET_USER_REPOS = gql`
  query GetUserRepos(
    $username: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: RepositoryOrder
  ) {
    user(login: $username) {
      login
      repositories(
        first: $first
        last: $last
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
          stargazerCount
          forkCount
          primaryLanguage {
            name
          }
          updatedAt
          url
        }
      }
    }
  }
`;
