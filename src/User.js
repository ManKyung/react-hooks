import React from "react";

const User = ({ user, index }) => {
  return (
    <li key={index}>
      {user.name} : {user.age}
    </li>
  );
};

const UserList = () => {
  const users = [
    {
      name: "Jung",
      age: 33,
    },
    {
      name: "Lee",
      age: 32,
    },
    {
      name: "Kim",
      age: 31,
    },
    {
      name: "Seo",
      age: 38,
    },
  ];

  return (
    <div>
      <ul>
        {users.length > 0 &&
          users.map((user, index) => <User key={index} user={user} />)}
      </ul>
    </div>
  );
};

export default UserList;
