import { createSlice } from "@reduxjs/toolkit"
const counter = createSlice({
    name: "counter",
    initialState: {
        count: 10
    },
    reducers: {}
})

// REDUCER >>>>>>>>>
export default counter.reducer;
