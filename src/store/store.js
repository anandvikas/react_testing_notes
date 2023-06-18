// CREATING STORE >>>>>>
import { configureStore } from "@reduxjs/toolkit";
import counter from "./slice"

const store = configureStore({
    reducer: {
        counter
    }
})

export default store;