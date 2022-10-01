import { createSlice } from "@reduxjs/toolkit";

const userSlience = createSlice({
    name: "user",

    initialState: {
        toId: "",
    },

    reducers: {
        set_id: (_,action) => {
            const {toId} = action.payload;
            return {toId}
        }
    }
    
});

export const {set_id} = userSlience.actions;

export default userSlience.reducer;