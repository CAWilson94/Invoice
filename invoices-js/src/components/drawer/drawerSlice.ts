import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DrawerState {
  value: boolean; // want this to represent closed or open
}

const initialState: DrawerState = {
  value: false,
};

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    openDrawer: (state: { value: boolean }) => {
      state.value = true;
    },
    closeDrawer: (state: { value: boolean }) => {
      state.value = false;
    },
    openCloseDrawer: (state: { value: boolean}, action: PayloadAction<boolean>)=>{ 
        state.value = action.payload; 
    }
  },
});

// Action creators generated for each case reducer function 
export const {openDrawer, closeDrawer, openCloseDrawer} = drawerSlice.actions

export default drawerSlice.reducer