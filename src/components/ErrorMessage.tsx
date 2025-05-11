export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-red-100  text-red-700 px-4 py-3 rounded mb-6 mt-4">
      <p>{message}</p>
      {message.includes("API rate limit exceeded") && (
        <p className="mt-2">
          Please try again later or use a GitHub personal access token.
        </p>
      )}
    </div>
  );
}
