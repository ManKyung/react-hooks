import React, { useRef, useState, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const getActiveCount = (users) => {
  console.log("Counting...");
  return users.filter((user) => user.active === true).length;
};

const User = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const onToggle = (id) => {
    console.log(12);
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  // const onCreate = () => {
  //   const user = {
  //     id: nextId.current,
  //     active: false,
  //     username,
  //     email,
  //   };

  //   setUsers([...users, user]);

  //   setInputs({
  //     username: "",
  //     email: "",
  //   });
  //   nextId.current += 1;
  // };

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      active: false,
      username,
      email,
    };

    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const count = useMemo(() => getActiveCount(users), [users]);

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <ul>
        {users.length > 0 &&
          users.map((user, index) => (
            <UserList
              key={index}
              user={user}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
      </ul>
      <div>Active count : {count}</div>
    </div>
  );
};

export default User;
