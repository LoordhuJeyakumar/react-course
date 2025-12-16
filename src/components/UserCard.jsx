import React from "react";

function UserCard({user}) {
  return (
    <div>
      <div className="user-card"
      >
        <h2 className="user-name">{user.name}</h2>
        <p className="user-role">
          Role: <strong>{user.role}</strong>
        </p>
        <p className="user-description">{user.description}</p>
      </div>
    </div>
  );
}

export default UserCard;
