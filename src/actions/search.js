import { getSearchData } from  '../api'
//搜索
export const searchDataAction = ( keyword,type,offset,limit )=>{
    return (dispatch,getState)=>{
        getSearchData( keyword,type,offset,limit ).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"SEARCH_DATA",
                    data: res.data
                })
            }
        })
    }
}

