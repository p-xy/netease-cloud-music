import { getAlbum, getSingerAlbum, getAlbumComment} from '../api'

//专辑数据 和 歌手的其他专辑
export const getAlbumAction = (search)=>{
    return (dispatch,getState)=>{
        getAlbum(search).then( (res)=>{
            if(res.data.code===200){
                const artistId = res.data.album.artist.id;
                getSingerAlbum(artistId,5).then( (response)=>{
                    if(response.data.code===200){
                        dispatch({
                            type:"GET_SINGREOTHERALBUM",
                            data: response.data
                        })
                    }
                })
                dispatch({
                    type:"GET_ALBUMDATA",
                    data: res.data
                })
            }
        })
       
    }
}

//专辑评论
export const getAlbumCommentAction = (id,limit,offset)=>{
    return (dispatch,getState)=>{
        getAlbumComment(id,limit,offset).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"GET_ALBUMCOMMENTDATA",
                    data: res.data
                })
            }
        })
       
    }
} 

/*
//歌手的其他专辑
export const getSingerOtherAlbumAction = (data)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:"GET_SINGREOTHERALBUM",
            data
        })
    }
}
*/