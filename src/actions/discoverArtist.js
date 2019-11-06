import { getHotSingerData, getEnteringSinger,  getCatSingerData  } from '../api'

//入驻歌手
export const enterSingerDataAction = ()=>{
    return (dispatch,getState)=>{
        getEnteringSinger().then( (res) =>{
            if( res.data.code === 200){
                dispatch({
                    type:"ENTER_SINGER_DATA",
                    data: res.data
                })
            }
        })
    }
}
//热门歌手
export const hotSingerDataAction = ()=>{
    return (dispatch,getState)=>{
        getHotSingerData().then( (res) => {
            if( res.data.code === 200){
                dispatch({
                    type:"HOT_SINGER_DATA",
                    data: res.data
                })
            }
        })
    }
}
//不同类型歌手
export const catSingerDataAction = (data)=>{
    return (dispatch,getState)=>{
        getCatSingerData( data).then( (res)=>{
            if(res.data.code === 200){
                dispatch({
                    type:"CAT_SINGER_DATA",
                    data: res.data
                })
            }
        })
    }
}
