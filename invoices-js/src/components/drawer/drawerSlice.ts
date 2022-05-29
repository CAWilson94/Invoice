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
  },
});

// Action creators generated for each case reducer function 
export const {drawerToggle} = drawerSlice.actions
export const drawerSelector = (state: { drawer: { value: boolean; }; }) => state.drawer.value

export default drawerSlice.reducer