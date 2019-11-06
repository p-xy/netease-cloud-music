export const loginDataReducer = (state={},action)=>{
    switch(action.type){
        case "LOGIN_DATA":
        return {
            ...state,
            data:action.data
        }
        default :
            return state
    }
}

