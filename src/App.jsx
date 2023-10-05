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

const Header = () => {
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

const RestrauntCard = () => {
  return (
    <div className="card">
      <img
        src="https://b.zmtcdn.com/data/pictures/chains/2/19082182/18e6d83c0f86b4dcc73fd80a91f4d283.jpg"
        alt="burger king pic"
      />
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h4>4.2 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <RestrauntCard />
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
