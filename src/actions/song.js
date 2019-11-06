import{
    songGetSongData, getSongLyric, getSongComment,  
    getSimiUser,  getSimiPlaylist,  getSimilarSong  } from '../api'

//单曲数据
export const songDataAction = (data)=>{
    return (dispatch,getState)=>{
        songGetSongData(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"SONG_DATA",
                    data:res.data
                })
            }
        })
    }
}
//歌词
export const songLyricDataAction = (data)=>{
    return (dispatch,getState)=>{
        getSongLyric(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"SONG_LYRIC_DATA",
                    data:res.data
                })
            }
        })
    }
}
//评论
export const songCommentDataAction = (id,limit,offset)=>{
    return (dispatch,getState)=>{
        getSongComment(id,limit,offset).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"SONG_COMMENT_DATA",
                    data:res.data
                })
            }
        })
    }
}
//相似用户
export const simiUserDataAction = (data)=>{
    return (dispatch,getState)=>{
        getSimiUser(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"SIMI_USER_DATA",
                    data:res.data
                })
            }
        })
    }
}
//相似歌单
export const simiPlaylistDataAction = (data)=>{
    return (dispatch,getState)=>{
        getSimiPlaylist(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"SIMI_PLAYLIST_DATA",
                    data:res.data
                })
            }
        })
    }
}
//相似歌曲
export const similarSongDataAction = (data)=>{
    return (dispatch,getState)=>{
        getSimilarSong(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"SIMILAR_SONG_DATA",
                    data:res.data
                })
            }
        })
    }
}


//=======================未知
//歌曲播放数据
export const songUrlDataAction = (data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"SONG_URL_DATA",
            data
        })
    }
}

