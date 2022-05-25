import * as React from 'react';
import { AppBar, Box, Toolbar, Button } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function headerAppBar(){ 
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Invoice Buddy
                        </Typography>
                        <Button color="inherit">Notifications</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );

}