import {createSlice} from '@reduxjs/toolkit'
/*
createSlice is a function from Redux Toolkit that helps create a Redux slice 
(a piece of the global state).
It automatically generates actions and reducers, reducing boilerplate code.
*/
const counterSlice=createSlice({
    /*
    This is the name of the slice.
    It determines how the state will be stored inside Redux (e.g., state.counter in useSelector).
    */
    name:'counter',

    initialState:{count:0},

    /*
    This defines functions that modify the state.
    Each function takes state as an argument and directly modifies it.
    */
    reducers:{
        increment:(state)=>{state.count+=1},
        decrement:(state)=>{state.count-=1},
    },
});
/*
This extracts and exports the action creators.
increment and decrement are functions that return an action object
*/
export const {increment,decrement}=counterSlice.actions;

/*
This exports the reducer function so it can be used in configureStore.
*/
export default counterSlice.reducer;