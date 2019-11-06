import { loginStatusRefresh,  userPlayList ,  playListDetail } from '../api'

export const mySongAction = ()=>{
    return( dispatch, getState)=>{
        loginStatusRefresh().then( (res)=>{
            if(res.data.code===200){
                userPlayList(res.data.profile.userId).then( (r)=>{
                    if(r.data.code===200){
                        dispatch({
                            type:"LOGIN_PLAYLIST_INFO",
                            data:r.data
                        });
                        playListDetail(r.data.playlist[0].id).then( (rr)=>{
                            if(rr.data.code===200){
                                dispatch({
                                    type:"LOGIN_PLAYLIST_CONTENT",
                                    data:rr.data
                                })
                            }
                        })

                    }
                })
            }
        })
    }
}
export const getLoginPlaylistContentAction = (playListID)=>{
    return (dispatch,getState)=>{
        playListDetail(playListID).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"LOGIN_PLAYLIST_CONTENT",
                    data:res.data
                })
            }
        })
    }
}

