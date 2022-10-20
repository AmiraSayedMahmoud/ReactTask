import { ADDCOUNTER } from "../Types";



export const counterReducer=(state={count:0},action)=>
{
    switch(action.type)
    {
        case ADDCOUNTER:
            {
                return{
                    ...state,
                    count:state.count+1
                }
            }
        default:return state;
    }

}