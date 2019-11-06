import { getSingerSongs,getSingerAlbums,getSingerMvs,getSingerDesc,getSimiArtist } from '../api';


//歌手热门歌曲
export const singerSongsDataAction = (data)=>{
    return (dispatch,getState)=>{
        getSingerSongs(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"SINGER_SONGS_DATA",
                    data: res.data
                })
            }
        })
    }
}
//歌手专辑
export const singerAlbumsDataAction = (data)=>{
    return (dispatch,getState)=>{
        getSingerAlbums(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"SINGER_ALBUMS_DATA",
                    data:res.data
                })
            }
        })
    }
}
//歌手MV
export const singerMvsDataAction = (data)=>{
    return (dispatch,getState)=>{
        getSingerMvs(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"SINGER_MVS_DATA",
                    data:res.data
                })
            }
        })
        
    }
}
//歌手描述
export const singerDesDataAction = (data)=>{
    return (dispatch,getState)=>{
        getSingerDesc(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"SINGER_DES_DATA",
                    data:res.data
                })
            }
        })
    }
}
//相似歌手
export const simiArtistAction =(data)=>{
    return (dispatch, getState)=>{
        getSimiArtist(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"SIMI_ARTIST",
                    data: res.data
                })
            }
        })
    }
}