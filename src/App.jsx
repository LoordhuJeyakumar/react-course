import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {

  const userData = {
    name: "John Doe",
    role: "Developer",
    description: "John is a skilled developer with 5 years of experience."
  };

  return (
    <div>
      <NavBar />
      <UserCard user={userData} />
    </div>
  );
}

export default App;
