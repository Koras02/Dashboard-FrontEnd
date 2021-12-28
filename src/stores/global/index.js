import {createSlice} from '@reduxjs/toolkit';


export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        moreListCheck: false
    },

    reducers: {
        setMoreListCheck: (state,action) => {
            state.moreListCheck = action.payload
        }
    },
})


export const {setMoreListCheck} = globalSlice.actions;


export default globalSlice.reducer;