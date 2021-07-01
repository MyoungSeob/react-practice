import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeNickame = (e) => setNickname(e.target.value);
  const visible = () => {
    if (isVisible === true) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  // useEffect(()=>{
  //     console.log('디펜던시에 있는 특정 값이 업데이트가 될 때 실행합니다.')
  // }, [name])
  // useEffect(()=>{
  //     console.log('처음 화면에 렌더링 될 때만 실행됩니다.')
  // }, [])
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  return (
    <div>
      <div>
        <button onClick={visible}>{isVisible ? "숨기기" : "보이기"}</button>
      </div>
      {isVisible ? <><div>
        <input onChange={onChangeName} />
        <input onChange={onChangeNickame} />
      </div>
      <div>
        <div>
          <b>이름 : {name}</b>
        </div>
        <div>
          <b>닉네임 : {nickname}</b>
        </div>
      </div> </> : ""}
      
    </div>
  );
};

export default Info;
