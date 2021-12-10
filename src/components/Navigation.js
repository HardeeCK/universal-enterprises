import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img className="brand-logo" src="./logo.jpeg" alt="logo" align="center"></img>
            &nbsp;Universal Enterprises
          </NavLink>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
// import {  Link } from "react-router-dom";

// const Navbar = () => {
//     return (
//       <nav class="navbar">
//         <div class="navbar-collapse">
//           <ul class="navbar-nav">
//             <li class="nav-item">
//               <img className="brand-logo" src="./logo.jpeg" alt="logo" align="center"></img> 
//             </li>
//             <li class="navbar-brand">
//               <a class="navbar-brand" href="/">Universal Enterprises</a>
//             </li>
//             <li class="nav-list">
//               <a class="nav-link" href="/">Home</a>
//             </li>
//             <li class="nav-list" >
//               <Link to="/Products">Products</Link>
//             </li>
//             <li class="nav-list" >            
//               <Link to="/ContactUs">Contact Us</Link>
//             </li>
//             <li class="nav-list">
//               <Link to="/AboutUs">About Us</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//   );
    
// }
// export default Navbar;