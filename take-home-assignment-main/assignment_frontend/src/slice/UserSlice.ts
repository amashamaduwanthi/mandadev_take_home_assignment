import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {User} from "../model/User.ts";
const api =axios.create({
    baseURL: 'http://localhost:5000/api',
})
const initialState = {
    jwt_token: null,
    refresh_token : null,
    username: null,
    isAuthenticated: false,
    loading: false,
    error: '',
};

export const registerUser = createAsyncThunk(
    'auth/register',
    async (user: User, { rejectWithValue }) => {
        try {
            const response = await api.post('/auth/register', user, { withCredentials: true });
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('User registration failed');
        }
    }
);


const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        logOutUser(state){
            state.isAuthenticated = false;
        }
    },
    extraReducers(builder){
        builder
            .addCase(registerUser.pending,(state, action)=>{
                console.log('pending user register');
            })
            .addCase(registerUser.fulfilled,(state, action)=>{
                console.log('User Registered Successfully');
            })
            .addCase(registerUser.rejected,(state, action)=>{
                state.error = action.payload as string;
            });

    }
})
export const {logOutUser} = userSlice.actions;
export default userSlice.reducer;













