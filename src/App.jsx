import React from "react";
import ReactDOM from "react-dom/client";

/*
      Header
         -Logo
         -Nav Items(Right Side)
         -Cart
      Body
         -Search Bar
         -Restraunt List
           -Restraunt Card
              -Image
              -Name
              -Rating
              -Cuesienes
      Footer
          -Links
          -CopyRight
*/

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx76pUGIu1KXqWiqRHteqox-vTDYnsMp6PQ&usqp=CAU"
      alt="Food Villa Logo"
    />
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return {};
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
