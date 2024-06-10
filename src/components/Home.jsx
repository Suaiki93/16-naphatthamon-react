import { useState } from "react";
import Navbar from "./Navbar";
import User from "./User";
import Admin from "./Admin";

const Home = () => {
  const [showUser, setShowUser] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [tableData, setTableData] = useState([]); // State to manage table data

  const handleUserClick = () => {
    setShowUser(true);
    setShowAdmin(false);
  };

  const handleAdminClick = () => {
    setShowUser(false);
    setShowAdmin(true);
  };

  const handleFormSubmit = (formData) => {
    setTableData([tableData, formData]);
    setShowUser(true); // Show the User component after saving data in Admin
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">
          Generation Thailand
          <br />
          {showUser ? "Home - User Sector" : ""}
          {showAdmin ? "Home - Admin Sector" : ""}
          {!showAdmin && !showUser ? "React - Assesment" : ""}
        </h1>
        <div className="flex space-x-4">
          <button
            className="bg-white shadow-md rounded-md px-6 py-3 hover:bg-gray-100"
            onClick={handleUserClick}
          >
            User Home Sector
          </button>
          <button
            className="bg-white shadow-md rounded-md px-6 py-3 hover:bg-gray-100"
            onClick={handleAdminClick}
          >
            Admin Home Sector
          </button>
        </div>
        {showUser && <User tableData={tableData} />}
        {showAdmin && <Admin onFormSubmit={handleFormSubmit} />}
      </div>
    </>
  );
};

export default Home;
