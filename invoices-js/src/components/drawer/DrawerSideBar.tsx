import * as React from "react";
import { drawerSelector} from "../drawer/drawerSlice";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@mui/material/Drawer";
import { breakpoints } from "@mui/system";

const drawerWidth = 240;

export default function DrawerSideBar() {
  const drawer = useSelector(drawerSelector); // if you read this value do you ever need to write back? no?
  //const dispatch = useDispatch();  

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={drawer}      
    ></Drawer>
  );
}
