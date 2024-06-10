import React, { useState } from "react";
import Admin from "./Admin";
import User from "./User";

const App = () => {
  const [tableData, setTableData] = useState([]);

  return (
    <div>
      {/* Pass tableData and setTableData as props to Admin component */}
      <Admin tableData={tableData} setTableData={setTableData} />
      {/* Pass tableData as a prop to User component */}
      <User tableData={tableData} />
    </div>
  );
};

export default App;
