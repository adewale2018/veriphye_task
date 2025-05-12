import EmptyRepo from "../components/EmptyRepo";
import ErrorMessage from "../components/ErrorMessage";
import Filters from "../components/Filters";
import LoadingSpinner from "../components/LoadingSpinner";
import PaginationControls from "../components/PaginationControls";
import type { Repository } from "../types";
import RepositoryCard from "../components/RepositoryCard";
import SearchForm from "../components/SearchForm";
import { useRepositories } from "../hooks/useRepositories";
const ReposList = () => {
  const {
    loading,
    error,
    repositories,
    username,
    setUsername,
    handleNext,
    handlePrevious,
    pageInfo,
    languageFilter,
    setLanguageFilter,
    sortBy,
    setSortBy,
    availableLanguages,
  } = useRepositories();

  const isEmptyRepo = repositories?.length === 0;

  return (
    <div className="mx-auto px-4 py-8">
      <SearchForm onSubmit={setUsername} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error?.message} />}
      {username && !loading && !error && isEmptyRepo && !languageFilter && (
        <EmptyRepo username={username} />
      )}
      {username && !loading && !error && (
        <>
          <Filters
            languageFilter={languageFilter}
            setLanguageFilter={setLanguageFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            availableLanguages={availableLanguages}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {repositories.map((repo: Repository) => (
              <RepositoryCard key={repo?.url} {...repo} />
            ))}
          </div>
          {repositories.length === 0 && (
            <p className="text-center mt-8 text-gray-500">
              No repositories found{" "}
              {languageFilter ? ` for language ${languageFilter}` : ""}.
            </p>
          )}
          {!isEmptyRepo && (
            <PaginationControls
              loading={loading}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              pageInfo={
                pageInfo || { hasPreviousPage: false, hasNextPage: false }
              }
            />
          )}
        </>
      )}
    </div>
  );
};

export default ReposList;
