import React, { useGlobal } from "reactn";
import BinarySearch from "./binarySearch";
import LinearSearch from "./linearSearch";

const NavBar = props => {
  const [viewPage, setViewPage] = useGlobal("page");

  return (
    <div id="navBar">
      <div className="navBarItem" onClick={() => setViewPage(<LinearSearch />)}>
        Linear Search
      </div>
      <div className="navBarItem" onClick={() => setViewPage(<BinarySearch />)}>
        Binary Search
      </div>
    </div>
  );
};

export default NavBar;
