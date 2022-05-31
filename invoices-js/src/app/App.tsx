import React, { Fragment } from "react";
import "./App.css";
import Header from "../components/header/Header";
import DrawerSideBar from "../components/drawer/DrawerSideBar";
import { Fab } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';

function App() {
  return (
    <Fragment>
      <Header />
      <DrawerSideBar />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Fragment>
  );
}

export default App;
