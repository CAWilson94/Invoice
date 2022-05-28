import * as React from "react";
import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240;

export default function DrawerSideBar() {
  const count = useSelector((state: RootState) => state.drawer.value)
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
    sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}

      variant="persistent"
      anchor="left"
      open={open}
       // should be set to true for testing
    ></Drawer>
    
  );
}
