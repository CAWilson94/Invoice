import * as React from "react";
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240;

export default function DrawerSideBar() {
  const [open, setOpen] = React.useState(true);

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
