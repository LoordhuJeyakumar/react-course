import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";
import NavBar from "./components/NavBar";
import { mockUsers } from "./data/mockData";
import Card from "./components/Card";

function App() {

  //Use State example
const [user, setUser] = React.useState({
    name: "Jane Smith",
    role: "Designer",
    description: "Jane is a creative designer with a passion for user experience."
  });

  const getRandomUser = () => {
  const data = mockUsers;
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
  
  }

  const handleChangeUser = () => {
    const randomUser = getRandomUser();
    setUser(randomUser);
  }
  




  return (
    <div className="">
      <NavBar />
      <UserCard user={user} />
      <button className="btn btn-primary" onClick={handleChangeUser}>Change User</button>
    <Card title="Generic Card" heading="Card Header" footerContent="Card Footer">
      <p>This is a generic card component wrapping some content.</p>
    </Card>
    </div>
  );
}

export default App;
