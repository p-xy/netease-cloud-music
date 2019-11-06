//歌曲
export const songDataReducer = (state={},action)=>{
    switch(action.type){
        case "SONG_DATA":
            return {
                ...state,
                data:action.data
            }
         default :
             return state   
    }
}
//歌词
export const songLyricDataReducer = (state={},action)=>{
    switch(action.type){
        case "SONG_LYRIC_DATA":
            return {
                ...state,
                data:action.data
            }
            default :
                return state;
    }
}
//评论
export const songCommentDataReducer = (state={},action)=>{
    switch(action.type){
        case "SONG_COMMENT_DATA":
            return {
                ...state,
                data:action.data
            }
            default :
                return state
    }
}
//相似用户
export const simiUserDataReducer = (state={},action)=>{
    switch(action.type){
        case "SIMI_USER_DATA":
            return {
                ...state,
                data:action.data
            }
            default :
                return state
    }
}
//相似歌单
export const simiPlaylistDataReducer = (state={},action)=>{
    switch(action.type){
        case "SIMI_PLAYLIST_DATA":
            return {
                ...state,
                data:action.data
            }
            default :
                return state
    }
}
//相似歌曲
export const similarSongData = (state={},action)=>{
    switch(action.type){
        case "SIMILAR_SONG_DATA":
        return {
            ...state,
            data:action.data
        }
        default :
            return state
    }
}

//============未知
//播放数据？
export const songUrlDataReducer = (state={},action)=>{
    switch(action.type){
        case "SONG_URL_DATA":
        return {
            ...state,
            data:action.data
        }
        default :
            return state
    }
}

