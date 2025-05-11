interface EmptyRepoProps {
  username: string;
}

const EmptyRepo = ({ username }: EmptyRepoProps) => {
  return (
    <div className="mt-4 bg-green-50 text-green-500 p-2">
      <p>Sorry, {username} has 0 repo</p>
    </div>
  );
};

export default EmptyRepo;
