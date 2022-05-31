import React, { Fragment } from "react";
import "./App.css";
import { styled } from "@mui/material/styles";
import Header from "../components/header/Header";
import Paper from "@mui/material/Paper";
import DrawerSideBar from "../components/drawer/DrawerSideBar";
import { Fab } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box>
      <Header />
      <DrawerSideBar />
      <Stack direction="row" spacing={2} justifyContent="space-evenly" sx={{marginTop: 10, p: 2}}>
        <Item>Empty Left Content</Item>
        <Item sx={{ flex: 4, p: 10 }}>Central Content</Item>
        <Box sx={{p: 10}}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
