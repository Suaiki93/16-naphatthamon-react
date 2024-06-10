import React, { useState } from "react";

const Admin = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
  });

  // State to manage table data
  const [tableData, setTableData] = useState([]);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form data to tableData array
    setTableData([...tableData, formData]);
    // Clear form fields after submission
    setFormData({ name: "", lastname: "", position: "" });
  };

  // Function to handle deletion of table row
  const handleDeleteRow = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

  return (
    <>
      <div className="pt-8 pb-10">
        <h2 className="font-bold text-2xl py-6">Create User Here</h2>
        <form
          className="flex items-center space-x-4"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            className="border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Position"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className="border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700 focus:outline-none"
          >
            Save
          </button>
        </form>
      </div>
      <div className="w-full max-w-4xl">
        <p className="text-gray-500 mb-2">Table 1</p>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border-b border-gray-200">
                  {data.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {data.lastname}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {data.position}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-red-600">
                  <button onClick={() => handleDeleteRow(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="py-6 flex justify-end">
        <button className="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Delete
        </button>
      </div>
    </>
  );
};

export default Admin;
