import React, { Fragment } from "react";
import logo from "../logo.svg";
import "../App.css";
import Header from "./Header";
import DrawerSideBar from "./DrawerSideBar";

function App() {
  return (
    <Fragment>
      <Header />
      <DrawerSideBar />
    </Fragment>
  );
}

export default App;
