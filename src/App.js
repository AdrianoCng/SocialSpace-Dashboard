import React, { useState } from "react";
import "./app.css";

// Components
import Nav from "./Components/Nav/Nav";
import SideNav from "./Components/SideNav/SideNav";
import Main from "./Components/Main/Main";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Nav setToggle={setToggle} />

      <div className={`wrapper ${toggle && "sidenav-toggled"}`}>
        <SideNav />
        <Main />
      </div>

    </>
  );
}

export default App;
