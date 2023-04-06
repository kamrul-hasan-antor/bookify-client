import { useLoaderData } from "react-router-dom";

const AllUsers = () => {
  const users = useLoaderData();
  return (
    <div>
      <div className="pb- pt-1">
        <p className="px-2 md:text-xl font-bold uppercase mb- pb-3 border-b">
          Total {users.length} users
        </p>
      </div>

      <div className="rounded-sm">
        <section className="bg-blueGray-50">
          <div className="w-full xl:mb-0 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 -z-0">
              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse">
                  <thead className="bg-gray-300">
                    <tr className="text-left text-xs">
                      <th className="pl-2 pr-4 align-middle whitespace-nowrap uppercase">
                        Email
                      </th>
                      <th className="px-4 align-middle  whitespace-nowrap py-4 uppercase">
                        First name
                      </th>
                      <th className="px-4 align-middle whitespace-nowrap py-4 uppercase">
                        Last name
                      </th>
                      <th className="px-4 align-middle  whitespace-nowrap uppercase">
                        Phone Number
                      </th>
                      <th className="px-4 align-middle  whitespace-nowrap uppercase">
                        Gender
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.reverse().map((user, i) => {
                      const {
                        email,
                        firstName,
                        lastName,
                        phoneNumber,
                        gender,
                      } = user;
                      return (
                        <tr
                          key={i}
                          className={`${
                            i % 2 !== 0 ? "bg-gray-100" : ""
                          } text-left text-xs hover:bg-[#ecf3fe]`}
                        >
                          <th className="pl-2 align-middle whitespace-nowrap">
                            {email}
                          </th>
                          <td className="px-4 pr-4 align-middle whitespace-nowrap py-4">
                            {firstName}
                          </td>
                          <td className="px-4 align-middle whitespace-nowrap">
                            {lastName}
                          </td>
                          <td className="px-4 align-middle whitespace-nowrap">
                            {phoneNumber}
                          </td>
                          <td className="px-4 align-middle whitespace-nowrap">
                            {gender}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllUsers;
