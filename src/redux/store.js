import { configureStore } from "@reduxjs/toolkit";
import whishlistSilce from "./whishlistSilce";
import ecartSlice from "./ecartSlice";

const store = configureStore({
    reducer:{
        wishlistReducer:whishlistSilce,
        ecartReducer:ecartSlice

    }
})

export default store

// export wishlistReducer