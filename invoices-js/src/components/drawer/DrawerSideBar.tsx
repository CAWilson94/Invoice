import * as React from "react";
import { drawerSelector, drawerToggle, closeDrawer} from "../drawer/drawerSlice";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 240;

export default function DrawerSideBar() {
  const drawer = useSelector(drawerSelector); // if you read this value do you ever need to write back? no?
  const dispatch = useDispatch()
  

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
      variant="temporary"
      anchor="left"
      open={drawer}    
      onClose={() => dispatch(closeDrawer())}  
    ></Drawer>
  );
}
