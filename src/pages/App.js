import React, { useEffect, useGlobal } from "reactn";
import NavBar from "../components/navBar";
import "../style/App.css";

const App = () => {
  const [viewPage, setViewPage] = useGlobal("page");

  useEffect(() => {
    // console.log("page ", page);
  }, [viewPage]);

  return (
    <div className="App">
      <NavBar />
      {viewPage}
    </div>
  );
};

export default App;
