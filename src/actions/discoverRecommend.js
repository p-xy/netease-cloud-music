import {
    getHotCommend, getNewAlbum, getIncreate,
    getNewList, getOriginalList, getEnteringSinger,
    getHotCommendTags,  getIndexBanner } from '../api';

/*
*获取banner数据 并返回给reducer
*使用react-thunk后， actionCreate返回的可以是函数或者字典对象
*/
export const bannerAction = () =>{
    return (dispatch, getState) =>{
        getIndexBanner().then( (res) => {
            if(res.data.code === 200){
                dispatch({
                    type: "BANNER",
                    data: res.data
                })
            }
        })
    }
}


//热门推荐
export const hotCommendAction = ()=>{
    return (dispatch,getState)=>{
        getHotCommend().then( (res) => {
            if( res.data.code === 200){
                dispatch({
                    type:"HOT_COMMEND",
                    data: res.data
                })
            }
        })
    }
}
//新碟上架
export const newAlbumAction = ()=>{
    return (dispatch,getState)=>{
        getNewAlbum().then( (res)=>{
            if(res.data.code === 200){
                dispatch({
                    type:"NEW_ALBUM",
                    data:res.data
                })
            }
        })
    }
}
//榜单：飙升榜
export const topListAction = ()=>{
    return (dispatch,getState)=>{
        getIncreate().then( (res) =>{
            if(res.data.code === 200){
                dispatch({
                    type:"TOP_LIST",
                    data: res.data
                })
            }
        })
    }
}
//榜单：新歌榜
export const newListAction = ()=>{
    return (dispatch,getState)=>{
        getNewList().then( (res) =>{
            if(res.data.code === 200){
                dispatch({
                    type:"NEW_LIST",
                    data: res.data
                })
            }
        })
    }
}
//榜单：原创榜
export const originalListAction = ()=>{
    return (dispatch,getState)=>{
        getOriginalList().then( (res) =>{
            if(res.data.code === 200){
                dispatch({
                    type:"ORIGIN_LIST",
                    data: res.data
                })
            }
        })
    }
};
//入驻歌手
export const enteringSingerAction = ()=>{
    return (dispatch,getState)=>{
        getEnteringSinger().then( (res) =>{
            if(res.data.code === 200){
                let data = res.data.artists.slice(0,5)
                dispatch({
                    type:"ENTERING_SINGER",
                    data: data
                })
            }
        })
    }
}

//入门推荐标签
export const hotCommendTagsAction = ()=>{
    return (dispatch,getState)=>{
        getHotCommendTags().then( (res) =>{
            if(res.data.code === 200){
                dispatch({
                    type:"HOT_COMMEND_TAGS",
                    data: res.data
                })
            }
        })
    }
}



