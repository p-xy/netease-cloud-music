export const getUserDetailDataReducerUserEven = (state={},action)=>{

    switch(action.type){

        case "USER_DETAIL_DATA":
            return {
                ...state,
                data:action.data
            }
        default :
            return state    
    }

}   

export const userEventDataReducer = (state={},action)=>{
    switch(action.type){
        case "USER_EVENT_DATA":
        return {
            ...state,
            data:action.data
        }
        default :
            return state
    }
}

export const userFollowsDataReducer = (state={},action)=>{
    switch(action.type){
        case "USER_FOLLOWS_DATA":
            return {
                ...state,
                data:action.data
            }
            default :
                return state
    }
}
export const userFansDataReducer = (state={},action)=>{
    switch(action.type){
        case "USER_FANS_DATA":
            return {
                ...state,
                data:action.data
            }
            default :
                return state
    }
}






