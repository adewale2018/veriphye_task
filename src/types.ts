export interface Repository {
  id: string;
  name: string;
  stargazerCount: number;
  updatedAt: Date;
  url: string;
  description: string;
  forkCount: number;
  primaryLanguage?: {
    name: string;
  } | null;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
}

export interface FiltersProps {
  languageFilter: string;
  setLanguageFilter: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  availableLanguages: string[];
}