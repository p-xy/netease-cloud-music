//歌手的热门歌曲
export const singerSongsDataReducer = (state={},action)=>{
    switch(action.type){
        case "SINGER_SONGS_DATA":
            return {
                ...state,
                data:action.data
            }
            default :
                return state
    }
}
//歌手专辑
export const singerAlbumsDataReducer = (state={},action)=>{
    switch(action.type){
        case "SINGER_ALBUMS_DATA":
            return {
                ...state,
                data:action.data
            }
            default :
                return state
    }
}
//歌手MV
export const singerMvsDataReducer = (state={},action)=>{
    switch(action.type){
        case "SINGER_MVS_DATA":
            return {
                ...state,
                data:action.data
            }
            default :
                return state
    }
}
//歌手描述
export const singerDesDataReducer = (state={},action)=>{
    switch(action.type){
        case "SINGER_DES_DATA":
            return {
                ...state,
                data:action.data
            }
            default :
                return state
    }
}
//相似歌手
export const simiArtistDataReducer = (state={},action)=>{
    switch(action.type){
        case "SIMI_ARTIST":
            return{
                data: action.data
            }
        default:
            return state
    }
}
