import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    user: null,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user
            state.error = null
        },
        setLogOut: (state, action) => {
            state.user = null
            state.isLoading = false
        },
        setError: (state, action) => {
            state.user = null
            state.error = action.payload.error
            state.isLoading = false
        }
    }
});

export const { setLogin, setLogOut, setError } = userSlice.actions;

export default userSlice.reducer;