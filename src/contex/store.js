import {configureStore} from "@reduxjs/toolkit";
import userSlience from "./userSlience";

const store = configureStore({
    reducer: {
        name: userSlience
    }
});

export default store;