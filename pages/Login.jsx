import React from 'react';

export default function Login() {
  return (
    <>
    <div className="container my-5 py-5  p-2 text-align-center border border-5" >
    <div id="container" >
    <div id="header">
      <div className="logo">
        <i className="fa fa-weibo" style={{ color: "#f0f2f4" }} />
      </div>
      <h1 className="text-center">Welcome</h1>
    </div>
    <div id="loginform">
      <div className="containerfields text-center">
        <input type="email" placeholder="Email Address" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="submit" defaultValue="Login" />
      </div>
    </div>
    <div id="footer" className="containerfields text-center">
      <p >
        <a href="#">Log In</a> for a new account
      </p>
    </div>
  </div>
    </div>
    
    </>
  );
}
