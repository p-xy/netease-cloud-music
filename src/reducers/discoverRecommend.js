//轮播图
export const banner=( state={},action ) => {
    switch(action.type) {
        //首页轮播图数据
        case "BANNER":
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}

//热门推荐
export const hotCommend=(state={},action)=>{
    switch(action.type) {
        case "HOT_COMMEND":
            return {
                ...state,
                data:action.data
            }
        default :
            return state
    }
}

//热门推荐歌单标签
export const hotCommendTagsReducer = (state={},action)=>{
    switch(action.type){
        case "HOT_COMMEND_TAGS":
            return {
                ...state,
                data:action.data
            }
        default :
            return state
    }
}
//新碟上架
export const newAlbumReducer = (state={},action)=>{
    switch(action.type){
        case "NEW_ALBUM":
            return {
                ...state,
                data:action.data
            }
        default:
            return state
    }
}
//榜单：飙升榜
export const topListReducer = (state={},action)=>{
    switch(action.type){
        case "TOP_LIST":
            return {
                ...state,
                data:action.data
            }
        default :
            return state
    }
}
//榜单：新歌榜
export const newListReducer = (state={},action)=>{
    switch(action.type){
        case "NEW_LIST":
            return {
                ...state,
                data:action.data
            }
        default :
            return state
    }
}
//榜单：原创榜
export const originalListReducer = (state={},action)=>{
    switch(action.type){
        case "ORIGIN_LIST":
            return {
                ...state,
                data:action.data,
            }
        default :
            return state
    }
}
//入入驻歌手
export const enteringSingerReducer = (state={},action)=>{
    switch(action.type){
        case "ENTERING_SINGER" :
            return {
                ...state,
                data:action.data
            }
        default :
            return state
    }
}
