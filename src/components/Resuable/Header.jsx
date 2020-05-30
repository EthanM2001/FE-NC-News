import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <h1>NC-News</h1>
      <h2>
        Go ahead and explore!
        <span role="img" aria-label="compass">
          🧭
        </span>
        <span role="img" aria-label="mountain">
          ⛰
        </span>
      </h2>
      <p className="login">You are currently logged in as {props.username}! </p>
    </header>
  );
};

export default Header;
