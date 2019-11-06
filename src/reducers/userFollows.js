//用户详情
export const getUserDetailDataReducerUserFollows = (state={},action)=>{
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
//用户关注的人
export const userFollowsDataReducerUserFollows= (state={},action)=>{
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