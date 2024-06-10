// import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-400 p-4">
      <div className="container mx-auto flex justify-end">
        <div className="text-white">
          <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            Home
          </Link>
        </div>
        <div className="text-white">
          <Link to="/owner" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            Owner
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
