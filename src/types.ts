export interface RepositoryProps {
  id: string;
  name: string;
  url: string;
  description: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
  }
  updatedAt: Date;
}