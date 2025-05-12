import { gql } from "@apollo/client";

export const GET_USER_REPOS = gql`
  query GetUserRepos(
    $username: String!
    $first: Int
    $after: String
    $orderBy: RepositoryOrder
  ) {
    user(login: $username) {
      login
      name
      avatarUrl
      repositories(first: $first, after: $after, orderBy: $orderBy) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
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
