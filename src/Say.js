import { React, useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const enter = () => {
    setMessage("어서오세요!");
  };
  const exist = () => setMessage("안녕히 가세요!");
  return (
    <div>
      <button onClick={enter}>입장</button>
      <button onClick={exist}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
