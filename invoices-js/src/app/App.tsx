import * as React from "react";
import "./App.css";
import { styled } from "@mui/material/styles";
import Header from "../components/header/Header";
import Paper from "@mui/material/Paper";
import DrawerSideBar from "../components/drawer/DrawerSideBar";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import FloatingButton from "../components/floatingButton/FloatingButton";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{flexGrow: 1}}>
      <Header />
      <DrawerSideBar />
      <Stack direction="row" spacing={2} justifyContent="space-evenly" sx={{marginTop: 2}}>
        <Item sx={{ flex: 1, p: 10 }}>Empty Left Content</Item>
        <Item sx={{ flex: 5, p: 10 }}>Central Content</Item>        
        <Item sx={{ flex: 1, p: 10 }}>Empty Right Content</Item>
      </Stack>
      <FloatingButton/>
    </Box>
  );
}

export default App;
