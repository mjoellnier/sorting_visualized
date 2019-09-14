import React, { useEffect, useGlobal } from "reactn";
import NavBar from "../components/navBar";
import "../style/App.css";

const App = () => {
  const [viewPage] = useGlobal("page");

  useEffect(() => {}, [viewPage]);

  return (
    <div className="App">
      <NavBar />
      {viewPage}
    </div>
  );
};

export default App;
