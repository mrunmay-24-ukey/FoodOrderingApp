import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";

const Store = configureStore({
    reducer:{
        raj : CartSlice,
        kaj : CategorySlice,
        search: SearchSlice,
    }
})

export default Store;