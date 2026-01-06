import React from "react";

// Conditional rendering example

const user = {
  isLoggedIn: true,
  data: { name: "John Doe" },
};

// rendering list based on login status and conditional rendering list

const hobbies = [
  {
    name: "Reading",
    isFaviroute: true,
  },
  {
    name: "Traveling",
    isFaviroute: false,
  },
  {
    name: "Cooking",
    isFaviroute: true,
  },
  {
    name: "Gaming",
    isFaviroute: false,
  },
  {
    name: "Hiking",
    isFaviroute: true,
  },
  {
    name: "Swimming",
    isFaviroute: false,
  },
  {
    name: "Coding",
    isFaviroute: true,
  },
];

function App() {
  const isLoggedIn = user.isLoggedIn;
  console.log(isLoggedIn);
  return (
    <div>
      <div>
        {isLoggedIn ? (
          <h1>Welcome back, {user.data.name}!</h1>
        ) : (
          <h1>Please log in to continue.</h1>
        )}
      </div>
      {isLoggedIn && (
        <div>
          <h2>Your Hobbies:</h2>
          <h3>Faviroute Hobbies:</h3>
          <ul>
            {hobbies
              .filter((hobby) => hobby.isFaviroute)
              .map((hobby, index) => (
                <li key={index}>{hobby.name}</li>
              ))}
          </ul>

          <h3>Other Hobbies:</h3>
          <ul>
            {hobbies
              .filter((hobby) => !hobby.isFaviroute)
              .map((hobby, index) => (
                <li key={index}>{hobby.name}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
