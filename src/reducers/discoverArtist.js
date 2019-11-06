
//入驻歌手
export const enterSingerDataReducer = (state={},action)=>{
    switch(action.type){
        case "ENTER_SINGER_DATA":
            return {
                ...state,
                data:action.data
            }
         default :
            return state   
    }
}

//推荐歌手
export const hotSingerDataReducer = (state={},action)=>{
    switch(action.type){
        case "HOT_SINGER_DATA":
            return {
                ...state,
                data:action.data
            }
        default :
            return state    
        
    }
}
//歌手分类
export const catSingerDataReducer = (state={},action)=>{
    switch(action.type){
        case "CAT_SINGER_DATA":
        return {
            ...state,
            data:action.data
        }
        default :
            return state
    }
}

