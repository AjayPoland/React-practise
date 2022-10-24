import React, { useState } from "react";

const Login = () => {
  const obj = {
    userid: "",
    userpassword: ""
  };
  const [state, setstate] = useState(obj);
  
  const changeIdHandler = (event) => {
    setstate({...state, userid: event.target.value });
  };
  const changePasswordHandler = (event) => {
    setstate({...state,
      userpassword: event.target.value,
    });
  };
  const validation = () => {
    const userid = document.forms["myfrm"][0].value;
    if (userid === "") {
      alert("Enter the user Id");
      return false;
    }
  };
  function clickHandler() {
    console.log(state);
  }
  return (
    <div>
      <form name="myfrm" onSubmit={validation}>
        <label>userId:</label>
        <input
          name="userId"
          type="text"
          value={state.userid}
          onChange={changeIdHandler}
        />
        <br />
        <label>Password:</label>
        <input
          name="userPassword"
          type="password"
          value={state.userpassword}
          onChange={changePasswordHandler}
          required
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      <h2>{JSON.stringify(state)}</h2>
      <button onClick={clickHandler}>Check log</button>
    </div>
  );
};

export default Login;
