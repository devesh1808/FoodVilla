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
   <h1 id="title" key="h2">
      Food Villa
   </h1>
)

const HeaderComponent = () => {
   return(
      <div>
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
