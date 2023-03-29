import { useLoaderData } from "react-router-dom";

const AllUsers = () => {
  const users = useLoaderData();

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
