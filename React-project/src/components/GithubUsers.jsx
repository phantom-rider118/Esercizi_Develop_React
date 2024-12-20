import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [username, setUsername] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      setUsernames([...username, username]);
      setUsername("");
    }
  };
  return (
    <div className="github-users">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          id="user"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>

      <div className="user-list">
        {usernames.map((user, index) => (
          <GithubUser key={index} username={user} />
        ))}
      </div>
    </div>
  );
}
