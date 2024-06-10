// import React from "react";

const User = () => {
  return (
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200"></td>
            <td className="px-6 py-4 border-b border-gray-200"></td>
            <td className="px-6 py-4 border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200"></td>
            <td className="px-6 py-4 border-b border-gray-200"></td>
            <td className="px-6 py-4 border-b border-gray-200"></td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200"></td>
            <td className="px-6 py-4 border-b border-gray-200"></td>
            <td className="px-6 py-4 border-b border-gray-200"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
