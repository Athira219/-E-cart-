import { createSlice } from "@reduxjs/toolkit";

const whishlistSlice = createSlice({
    name:'whishklist',
    initialState:[] ,//to store morethan one value 
        
        

    reducers:{
        //actions
        // add function 
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        //remove whishlist
        removeWishlist:(state,action)=>{
          return state.filter(item=>item.id!=action.payload)

        // let filterArray = []
        // for(var i=0;i<state.length;i++){
        //     if (state[i].id !== action.payload) {
        //         filterArray.push(state[i]);
        //       }
        //     return filterArray
        // }
        }

    }
})

export const  {addToWishlist ,removeWishlist} = whishlistSlice.actions

export default whishlistSlice.reducer 