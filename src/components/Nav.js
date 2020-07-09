import React from "react";
import { Link } from "react-router-dom";

function Nav() {
   const active = e => {
      const active = document.querySelectorAll("nav ul li");
      const active2 = document.querySelectorAll("nav ul .nav-link");
      active.forEach(li => li.classList.remove("active"));
      active2.forEach(li => li.classList.remove("active"));
      e.target.classList.add("active");
   };

   return (
      <nav className="nav-container">
         <h2>SearchMovie</h2>
         <ul className="mt-2">
            <Link to="/" className="nav-link mr-3" onClick={active}>
               <li className="active" onClick={active}>
                  Home
               </li>
            </Link>
            <Link to="/contact" className="nav-link" onClick={active}>
               <li onClick={active}>Contact Us</li>
            </Link>
         </ul>
      </nav>
   );
}

export default Nav;
