import React, { Fragment } from "react";
import "../App.css";
import Header from "../components/header/Header";
import DrawerSideBar from "../components/drawer/DrawerSideBar";

function App() {
  return (
    <Fragment>
      <Header />
      <DrawerSideBar />
    </Fragment>
  );
}

export default App;
