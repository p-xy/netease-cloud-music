
export const getUserDetailDataReducer = (state={},action)=>{
    switch(action.type){
        case "USER_DETAIL_DATA":
            return {
                data:action.data
            }
        default :
            return state    
    }
}   

export const userSingerPlayListReducer = (state={},action)=>{
    switch(action.type){
        case "USER_SING_PLAY_LIST":
            return {
                data:action.data
            }
            default :
                return state
    }
}

export const userHomePlaylistReducer = (state={},action)=>{
    switch(action.type){
        case "USER_HOME_PLAYLIST":
            return {
                data:action.data
            }
            default :
                return state
    }
}