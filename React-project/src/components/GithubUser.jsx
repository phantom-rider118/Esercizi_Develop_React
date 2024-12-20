import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
          throw new Error("Errore nel fetching dei dati");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (username) {
      fetchFunction();
    }
  }, [username]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!user) {
    return null;
  }

  return (
    <div className="github-user">
      <h3>{user.name}</h3>
      <p>Username: {user.login}</p>
      <img src={user.avatar_url} alt={user.login} width={100} />
    </div>
  );
}
