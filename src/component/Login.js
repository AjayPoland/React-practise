import React from "react";

const Login = () => {
  const validation = () => {
    const userid = document.forms["myfrm"][0].value;
    if (userid === "") {
      alert("Enter the user Id");
      return false;
    }
  };
  function clickHandler(){
    console.log("button clicked");
  }
  return (
    <div>
      <form name="myfrm" onSubmit={validation}>
        <label>userId:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" required />
        <input type="submit" value="submit" />
      </form>
      <button onClick={clickHandler}>Check log</button>
    </div>
  );
};

export default Login;
