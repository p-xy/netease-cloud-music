import { getPlaylistData,getPlayListCommentData, getHotPlaylistLike } from '../api'
//歌单
export const playlistDataAction = (id)=>{
    return (dispatch,getState)=>{
        getPlaylistData(id).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"PLAYLIST_DATA",
                    data:res.data
                })
            }
        })
    }
}
//评论
export const playlistCommentDataAction = (id,limit,offset)=>{
    return (dispatch,getState)=>{
        getPlayListCommentData(id,limit,offset).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"PLAYLIST_COMMENT_DATA",
                    data:res.data
                })
            }
        })
    }
}
//相关推荐（相似歌单）
export const hotPlaylistDataAction = (id)=>{
    return (dispatch,getState)=>{
        getHotPlaylistLike(id).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"HOT_PLAYLIST_DATA",
                    data:res.data
                })
            }
        })
    }
}