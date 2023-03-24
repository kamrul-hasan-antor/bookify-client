import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);

  return (
    <div>
      {users.map((user, i) => {
        const { fullName } = user;
        return (
          <div key={i} className="bg-green-100">
            {fullName}
          </div>
        );
      })}
    </div>
  );
};

export default AllUsers;
