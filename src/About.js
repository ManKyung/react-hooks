import React, { useState, useRef } from "react";

const About = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  const nameInput = useRef();

  const { name, nickName } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="name"
        onChange={onChange}
        ref={nameInput}
      />
      <input
        type="text"
        name="nickName"
        value={nickName}
        placeholder="nickName"
        onChange={onChange}
      />
      <button onClick={onReset}>Reset</button>
      <div>
        {name} : {nickName}
      </div>
    </div>
  );
};

export default About;
