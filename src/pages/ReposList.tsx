import EmptyRepo from "../components/EmptyRepo";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import PaginationControls from "../components/PaginationControls";
import RepositoryCard from "../components/RepositoryCard";
import type { RepositoryProps } from "../types";
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
  } = useRepositories();

  const isEmptyRepo = repositories?.length === 0;

  return (
    <div className="mx-auto px-4 py-8">
      <SearchForm onSubmit={setUsername} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error?.message} />}
      {username && !loading && !error && isEmptyRepo && (
        <EmptyRepo username={username} />
      )}
      {username && !loading && !error && !isEmptyRepo && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {repositories.map((repo: RepositoryProps) => (
              <RepositoryCard key={repo?.url} {...repo} />
            ))}
          </div>
          <PaginationControls
            loading={loading}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            pageInfo={pageInfo}
          />
        </>
      )}
    </div>
  );
};

export default ReposList;
