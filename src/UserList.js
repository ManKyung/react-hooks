import React from "react";

const UserList = ({ user, index, onRemove, onToggle }) => {
  return (
    <>
      <li key={index}>
        {user.username} : {user.email}
        <button onClick={() => onRemove(user.id)}>삭제</button>
        <button onClick={() => onToggle(user.id)}>활성/비활성</button>
      </li>
    </>
  );
};

export default React.memo(UserList);
