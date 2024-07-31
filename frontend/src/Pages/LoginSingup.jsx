import React, { useState } from "react";
import "./CSS/LoginSignUp.css";

const LoginSingup = () => {
  const [loginState, setLoginState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const HandlerChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    let response;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => response = data)
      console.log(response)
      if(response.success){
        localStorage.setItem('auth-token',response.token)
        window.location.replace('/');
      }else{
        alert(response.error)
      }
  };
  const singup = async () => {
    let response;
    await fetch("http://localhost:4000/singup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => response = data)
      if(response.sucess){
        alert(response.message)
        window.location.replace('/login');
      }else{
        alert(response.error)
      }
  };
  return (
    <div className="loginSignups">
      <div className="loginsignupContiner">
        <h1>{loginState}</h1>
        <div className="loginSignupFields">
          {loginState === "Login" ? (
            <></>
          ) : (
            <input
              value={formData.name}
              onChange={HandlerChange}
              type="text"
              name="name"
              placeholder="Your Name"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={HandlerChange}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={HandlerChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <button onClick={() => (loginState === "Login" ? login() : singup())}>
          Continue
        </button>
        {loginState === "Login" ? (
          <p className="loginSingupLogin">
            Create an account{" "}
            <span
              style={{ color: "red", fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setLoginState("Sing-In");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="loginSingupLogin">
            Already have an account{" "}
            <span
              style={{ color: "red", fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setLoginState("Login");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="loginSinupAgree">
          <input type="checkbox" name="" id="" />
          <p>By Continue, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
