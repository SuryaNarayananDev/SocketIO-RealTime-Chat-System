import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
}

export const themeSwtichSlice = createSlice({

    name:"themeSwtich",
    initialState,
    reducers:{
        toggleTheme:(state)=>{
            state.value = !state.value;
        }
    }

})

export const {toggleTheme} = themeSwtichSlice.actions;

export default themeSwtichSlice.reducer;