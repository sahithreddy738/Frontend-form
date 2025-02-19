import { useState } from "react";
import Input from "./Input";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils";

const Form = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate=useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const hanldeUser = (value, field) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };
  const handleSubmit=async()=>{
    console.log(newUser);
    const response = await fetch(BASE_URL+"/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({newUser}),
    });

    const data = await response.json();
    alert(data.message);
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    })
    navigate("/users");
  }
  return (
    <div className="w-full h-[80%]">
      <div className="w-[40%] shadow-xl mx-auto mt-4 p-6 bg-black text-white rounded-md">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Sign Up!</h2>
          <div className="flex flex-col gap-4">
            <Input
              labelName="firstName"
              value={newUser.firstName}
              onChange={(value) => hanldeUser(value, "firstName")}
            />
            <Input
              labelName="lastName"
              value={newUser.lastName}
              onChange={(value) => hanldeUser(value, "lastName")}
            />
            <Input
              labelName="Email"
              value={newUser.email}
              onChange={(value) => hanldeUser(value, "email")}
            />
            <Input
              labelName="Password"
              value={newUser.password}
              onChange={(value) => hanldeUser(value, "password")}
            />
          </div>
          <p className="text-red-500 ml-2">{errorMessage}</p>
          <div className="justify-center mt-4 w-full">
            <button
              className="w-[60%] rounded-lg h-10 text-xl bg-sky-500 text-white mx-auto hover:cursor-pointer"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
