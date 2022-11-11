import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogged: false,
        user: {},
        token: {}
    },
    reducers: {
        setLogged: (state, action) => {
            state.isLogged = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload

        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, setToken, setLogged } = userSlice.actions

export default userSlice.reducer