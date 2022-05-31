import * as React from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";

export default function FloatingButton(){ 
    return(
        <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
    );
}