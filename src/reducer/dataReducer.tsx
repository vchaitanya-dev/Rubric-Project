import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { user } from "../Interface/user";
interface userState {
     users:Array<user>,
     getOneUser:Array<user>
}
const initialState: userState = {
     users:[
          {
               uid: 0,
               username: "",
               image: "",
               fullname: "",
               twubric: {
                    total: 0,
                    friends: 0,
                    influence: 0,
                    chirpiness: 0
               },
               join_date: 0
          }
     ],
     getOneUser:[
          {
               uid: 0,
               username: "",
               image: "",
               fullname: "",
               twubric: {
                    total: 0,
                    friends: 0,
                    influence: 0,
                    chirpiness: 0
               },
               join_date: 0
          }
     ]
}

export const userSlice = createSlice({
     name:'user',
     initialState,
     reducers:{
          getUser:(state,action:PayloadAction<Array<user>>) => {
               state.users =  action.payload;
          },
          removeUser:(state,action:PayloadAction<number>) => {
               const id = action.payload;
               const users = state.users.filter((item) => item.uid !== id);
               state.users = users;
          },
          totalFilter:(state,action:PayloadAction<number>) => {
               const total = action.payload;
               const users = state.users.filter((item) => item.twubric.total === total);
               state.users = users
          },
          friendFilter:(state,action:PayloadAction<number>) => {
               const filterNumber = action.payload;
               const users = state.users.filter((item) => item.twubric.friends === filterNumber);
               state.users = users
          },
          influenceFilters:(state,action:PayloadAction<number>) => {
               const filterNumber = action.payload;
               const users = state.users.filter((item) => item.twubric.influence === filterNumber);
               state.users = users},
          chirpFilter:(state,action:PayloadAction<number>) => {
               const filterNumber = action.payload;
               const users = state.users.filter((item) => item.twubric.chirpiness === filterNumber);
               state.users = users},
          getUsers:(state,action:PayloadAction<number>) => {
               const filterNumber = action.payload;
               const users = state.users.filter((item) => item.uid === filterNumber);
               state.getOneUser = users},
     }
})

export const {getUser,removeUser,totalFilter,friendFilter,influenceFilters,chirpFilter,getUsers} = userSlice.actions

export const selectUsers = (state:RootState) => state.user.users

export default userSlice.reducer;