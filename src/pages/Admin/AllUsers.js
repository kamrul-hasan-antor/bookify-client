import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>users</h1>
      {users.map((user, i) => {
        const { fullName } = user;
        return (
          <div key={i} className="bg-green-100">
            {fullName}
          </div>
        );
      })}
      lorem500
    </div>
  );
};

export default AllUsers;
