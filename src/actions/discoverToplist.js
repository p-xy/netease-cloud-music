import { allPlaylistData, toplistData, toplistCommentData  } from '../api';


//榜单(左侧列表)
export const allPlaylistDataAction = ( )=>{
    return (dispatch,getState)=>{
        allPlaylistData().then( (res) => {
            if( res.data.code === 200){
                dispatch({
                    type:"ALL_PLAYLIST_DATA",
                    data: res.data
                })
            }
        })
    }
}
//单个榜单(右侧内容)
export const toplistContentDataAction = ( id )=>{
    return (dispatch,getState)=>{
        toplistData(id ).then( (res) =>{
            if(res.data.code === 200){
                dispatch({
                    type:"TOPLIST_CONTENT_DATA",
                    data: res.data
                })
                
            }
        })
    }
}
//评论数据
export const toplistCommentDataAction = (id,limit,offset)=>{
    return (dispatch,getState)=>{
        toplistCommentData( id,limit,offset).then( (res) => {
            if(res.data.code === 200){
                dispatch({
                    type:"TOPLIST_COMMENT_DATA",
                    data: res.data
                })
                
            }
        })
    }
}
 




























/*

//获取所有榜单(列表)数据
export const allPlaylistDataAction = (data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"ALL_PLAYLIST_DATA",
            data
        })
    }
}
//获取所有榜单(内容)数据
export const toplistContentDataAction = (data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"TOPLIST_CONTENT_DATA",
            data
        })
    }
}
 //获取评论数据
export const toplistCommentDataAction = (data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"TOPLIST_COMMENT_DATA",
            data
        })
    }
}

*/