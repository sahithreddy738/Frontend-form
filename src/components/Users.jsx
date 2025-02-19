import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await fetch(BASE_URL + "/users");
    const userData = await data.json();
    setUsers(userData?.users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const handleDelete = async (email) => {
    try {
      const response = await fetch(BASE_URL + `/user/${email}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        const filterUsers=users.filter((user)=>user.email!==email);
        setUsers(filterUsers);
      } else {
        toast.error("Error deleting user with" + email);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  return (
    <div className="w-[100%] min-h-screen bg-blue-950 flex gap-4 flex-wrap p-6">
      <div className="w-full h-[10%] text-center text-gray-100 font-bold text-3xl">
        Users List
      </div>
      {users &&
        users?.map((user) => (
          <div
            key={user.email}
            className="w-[25%] h-[40%] flex gap-4 p-6 flex-col bg-white rounded-md"
          >
            <div className="flex gap-2 text-black">
              <span className="font-bold">Name:</span>
              <span className="text-lg">
                {user.firstName + " " + user.lastName}
              </span>
            </div>
            <div className="flex gap-2 text-black flex-wrap">
              <span className="font-bold">Email:</span>
              <span className="text-lg ">{user.email}</span>
            </div>

            <div className="flex gap-4 w-[80%]">
              {/* <button className="rounded-md bg-sky-400  w-auto mx-auto p-2 font-bold text-lg cursor-pointer">
              Edit
            </button> */}
              <button
                className="rounded-md bg-red-600  w-[60%] mx-auto p-2 font-bold text-lg cursor-pointer"
                onClick={() => handleDelete(user?.email)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Users;
