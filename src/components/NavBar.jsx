import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center justify-between items-center h-20 pl-5 pr-5 bg-gradient-to-r from-slate-200 via-blue-600 to-gray-400">
      <div className="flex">Logo</div>
      <div>
        <ul className="flex">
          <li className="m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
