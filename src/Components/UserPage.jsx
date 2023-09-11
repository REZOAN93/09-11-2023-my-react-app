import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <div className=" container mx-auto">
      <h1>Users: {users.length}</h1>
      <div className=" grid grid-cols-3 gap-5">
        {users.map((ua) => (
          <Post key={ua.id} user={ua}></Post>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
