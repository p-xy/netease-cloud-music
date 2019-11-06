
import { getHotCommendTagsContent, getSelectTagsData } from '../api'

//歌单内容
export const commendTagsContentAction = ( tag,offset)=>{
    return (dispatch,getState)=>{
        getHotCommendTagsContent( tag,offset ).then( (res) =>{
            if(res.data.code === 200){
                dispatch({
                    type:"COMMEND_TAGS_CONTENT",
                    data: res.data
                })
            }
        })
    }
}
//标签
export const selectTagsDataAction = ( )=>{
    return (dispatch,getState)=>{
        getSelectTagsData().then( (res) =>{
            if(res.data.code === 200){
                dispatch({
                    type:"SELECT_TAGS_DATA",
                    data: res.data
                })
            }
        })
    }
}

