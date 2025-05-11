import SearchForm from "../components/SearchForm";
const ReposList = () => {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto px-4 py-8">
      <SearchForm onSubmit={() => console.log("...")} />
    </div>
  );
};

export default ReposList;
