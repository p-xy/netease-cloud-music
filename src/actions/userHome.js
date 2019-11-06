import { getUserDetailData, getUserPlayerList, getUserHomePlaylist } from '../api'

//用户详情
export const getUserDetailDataAction = (uid)=>{
    return (dispatch,getState)=>{
        getUserDetailData(uid).then( (res)=>{
            if( res.data.code===200 ){
                dispatch({
                    type: "USER_DETAIL_DATA",
                    data: res.data
                })
            }
        })
    }
}
//播放记录
export const userSingerPlayListAction = (uid,type)=>{
    return (dispatch,getState)=>{
        getUserPlayerList(uid,type).then( (res)=>{
            if( res.data.code===200 ){
                dispatch({
                    type:"USER_SING_PLAY_LIST",
                    data :res.data
                })
            }
        })
    }
}
//歌单（包含自建和收藏）
export const userHomePlaylistAction = (uid)=>{
    return (dispatch,getState)=>{
        getUserHomePlaylist( uid ).then( (res)=>{
            if( res.data.code===200){
                dispatch({
                    type: "USER_HOME_PLAYLIST",
                    data: res.data
                })
            }
        })
    }
}