import { getNewAlbumAll, getNewAlbum } from '../api'

//热门新碟
export const newAlbumDataAction = (data)=>{
    return (dispatch,getState)=>{
        getNewAlbum().then( (res) =>{
            if( res.data.code === 200){
                dispatch({
                    type:"NEW_ALBUM_DATA",
                    data: res.data
                }) 
            }
        })
    }
}
//全部新碟
export const newAlbumAllDataAction = (area, offset)=>{
    return (dispatch,getState)=>{
        getNewAlbumAll( area, offset).then( (res) =>{
            if( res.data.code === 200){
                dispatch({
                    type:"NEW_ALBUM_ALL_DATA",
                    data: res.data
                })
            }
        })
    }
}