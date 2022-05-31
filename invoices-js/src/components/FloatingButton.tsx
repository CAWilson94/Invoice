import * as React from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

export default function FloatingButton(){ 
    return(
        <Box sx={{position: 'absolute', bottom: 10, right: 10, padding: 10}}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          </Box>
    );
}