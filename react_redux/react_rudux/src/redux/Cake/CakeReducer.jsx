import { BUY_CAKE } from "./CakeConstant";


const initalstate = {
    numOfCake:10
}

export const CakeReducer = (state = initalstate , action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCake:state.numOfCake -1
        }
        default: return state
    }
}
