import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DrawerState {
  value: boolean; 
}

const initialState: DrawerState = {
  value: false,
};

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState: initialState,
  reducers: {
    drawerToggle: (state:{value:boolean})=>{          
      state.value = !state.value;              
    },    
    openDrawer: (state:{value: boolean}) => { 
      state.value = true;
    }, 
    closeDrawer: (state:{value: boolean}) => { 
      state.value = false;
    }    
  },
});

// Action creators generated for each case reducer function 
export const {drawerToggle, openDrawer, closeDrawer} = drawerSlice.actions
export const drawerSelector = (state: { drawer: { value: boolean; }; }) => state.drawer.value

export default drawerSlice.reducer