import { getSongUrlData, getSongData } from "../api"
/*
reducer和localStorage都各自维护一个数据相同的播放列表
好处是用户下次打开网站时，浏览器还保留上次的播放记录
*/
//添加歌曲到播放列表，并记录播放的索引值
export const addSongToPlaylistAction = (songId)=>{
    return (dispatch, getState)=>{
        const playlist = JSON.parse( localStorage.getItem("playlist") )
        if( playlist ){
            //去重： 若歌曲id已存在，则不添加，只更新索引
            for( let item of playlist){
                if( songId === item.id){
                    //先停止歌曲，更新索引后再播放
                    dispatch({
                        type:'PLAYERSTATUS',
                        data: 'STOPPED'
                    })
                    localStorage.setItem("currentSongIndex",playlist.indexOf(item))
                    dispatch({
                        type:'CURRENTSONGINDEX',
                        data: playlist.indexOf(item)
                    })
                    dispatch({
                        type:'PLAYERSTATUS',
                        data: 'PLAYING'
                    })
                    return 
                }
            }
           
            //歌曲id不存在，则添加至播放列表
            getSongUrlData(songId).then( (res)=>{
                if(res.data.code===200){
                    getSongData(songId).then( (r)=>{
                        if(r.data.code===200){
                            //一首歌的所有播放信息
                            const song = {
                                id:songId,
                                songUrl: res.data,
                                songInfo: r.data
                            }
                            playlist.push(song)
                            //先停止播放
                            dispatch({
                                type:'PLAYERSTATUS',
                                data: 'STOPPED'
                            })
                            //添加歌曲到播放列表
                            localStorage.setItem( "playlist",JSON.stringify( playlist))
                            dispatch({
                                type: 'PLAYLIST',
                                data: playlist
                            })
                            //更新索引
                            localStorage.setItem("currentSongIndex",playlist.length - 1)
                            dispatch({
                                type:'CURRENTSONGINDEX',
                                data: playlist.length - 1 
                            })
                            //播放
                            dispatch({
                                type:'PLAYERSTATUS',
                                data: 'PLAYING'
                            })
                        }
                    })
                }
            })
        }else{
            const playlist = []
            getSongUrlData(songId).then( (res)=>{
                if(res.data.code===200){
                    getSongData(songId).then( (r)=>{
                        if(r.data.code===200){
                            //一首歌的所有播放信息
                            const song = {
                                id:songId,
                                songUrl: res.data,
                                songInfo: r.data
                            }
                            playlist.push(song)
                            //先停止播放
                            dispatch({
                                type:'PLAYERSTATUS',
                                data: 'STOPPED'
                            })
                            //添加歌曲到播放列表
                            localStorage.setItem( "playlist",JSON.stringify( playlist))
                            dispatch({
                                type: 'PLAYLIST',
                                data: playlist
                            })
                            //更新索引
                            localStorage.setItem("currentSongIndex",playlist.length - 1)
                            dispatch({
                                type:'CURRENTSONGINDEX',
                                data: playlist.length - 1
                            })
                            //开始播放
                            dispatch({
                                type:'PLAYERSTATUS',
                                data: 'PLAYING'
                            })
                        }
                    })
                }
            })
        }
        
    }
}


//改变播放器的状态： 参数status 有 'PLAYING'，'STOPPED' 和 'PAUSED' 状态
export const playerStatusAction = ( status) =>{
    return( dispatch, getState) =>{
        dispatch({
            type: 'PLAYERSTATUS',
            data:  status
        })
    }
}
/*
记录当前播放歌曲在播放列表的索引
方便用户重新打开网站后播放的是上一次播放的歌曲
*/
export const currentSongIndexAction = (index)=>{
    return( dispatch, getstate ) =>{
        localStorage.setItem("currentSongIndex",index)
        dispatch({
            type:'CURRENTSONGINDEX',
            data: index
        })
    }
}

/*
清除播放列表和索引,并设置播放为暂停
*/
export const clearPlaylistAction = ()=>{
    localStorage.removeItem("playlist")
    localStorage.removeItem("currentSongIndex")
    return (dispatch,getState)=>{
        dispatch({
            type:"PLAYLIST",
            data: []
        });
        dispatch({
            type: "CURRENTSONGINDEX",
            data: null
        });
        dispatch({
            type:"PLAYERSTATUS",
            data:"PAUSED"
        })
    
    }
}