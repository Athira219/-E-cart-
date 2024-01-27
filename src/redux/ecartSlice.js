import { createSlice } from "@reduxjs/toolkit";

const ecartSlice = createSlice({
    name:'ecartSlice',
    initialState:({
        state:[]
    }),

    reducers:{
        //action
        addEcart:(initialState,action)=>{
            initialState.state.push(action.payload)
        },
        removeCart: (initialState,action)=>{
           
            return{
                state: initialState.state.filter(item=>item.id!=action.payload)
            }
            

        },
        removeAllOrder:(initialState)=>{
            initialState.state=[]

        }
    }
})
export const {addEcart,removeCart,removeAllOrder } = ecartSlice.actions
export default ecartSlice.reducer