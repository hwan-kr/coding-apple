import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let cart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        countUp(state, action) {
            let index = state.findIndex((item) => item.id === action.payload);
            state[index].count++;
        },
        cartUpdate(state, action) {
            let index = state.findIndex(
                (item) => item.id === action.payload.id
            );
            if (state.some((item) => item.id === action.payload.id) == true) {
                state[index].count++;
            } else {
                state.push({
                    id: action.payload.id,
                    name: action.payload.title,
                    count: 1,
                });
            }
        },
        removeCart(state, action) {
            let index = state.findIndex((item) => item.id === action.payload);
            state.splice(index, 1);
        },
    },
});
export let { countUp, cartUpdate, removeCart } = cart.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
});
