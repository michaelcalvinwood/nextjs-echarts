import { createSlice } from '@reduxjs/toolkit';

const sliceMsg = createSlice({
    name: 'msg',
    initialState: "Hello Worlds",
    reducers: {
        setMsg: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})

export const { setMsg } = sliceMsg.actions;
export default sliceMsg.reducer;