import React, { useState } from "react";
import Navbar from "./Navbar";
import User from "./User"; // Import the User component
import Admin from "./Admin"; // Import the Admin component

const Home = () => {
  const [showUser, setShowUser] = useState(false); // State to manage whether to show User component
  const [showAdmin, setShowAdmin] = useState(false); // State to manage whether to show Admin component

  const handleUserClick = () => {
    setShowUser(true); // Set showUser state to true when the User button is clicked
    setShowAdmin(false); // Make sure to hide the Admin component when showing the User component
  };

  const handleAdminClick = () => {
    setShowUser(false); // Make sure to hide the User component when showing the Admin component
    setShowAdmin(true); // Set showAdmin state to true when the Admin button is clicked
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">
          Generation Thailand
          <br />
          React - Assessment
        </h1>
        <div className="flex space-x-4">
          <button
            className="bg-white shadow-md rounded-md px-6 py-3 hover:bg-gray-100"
            onClick={handleUserClick} // Add onClick event to call handleUserClick function
          >
            User Home Sector
          </button>
          <button
            className="bg-white shadow-md rounded-md px-6 py-3 hover:bg-gray-100"
            onClick={handleAdminClick} // Add onClick event to call handleAdminClick function
          >
            Admin Home Sector
          </button>
        </div>
        {showUser && <User />}{" "}
        {/* Render User component if showUser state is true */}
        {showAdmin && <Admin />}{" "}
        {/* Render Admin component if showAdmin state is true */}
      </div>
    </>
  );
};

export default Home;
