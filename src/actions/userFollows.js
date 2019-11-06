import { getUserDetailData, getUserFollowsData } from '../api'

//用户详情
export const getUserDetailDataActionUserFollows = (data)=>{
    return (dispatch,getState)=>{
        getUserDetailData(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"USER_DETAIL_DATA",
                    data:res.data
                })
            }
        })
    }
}
//用户关注的人
export const userFollowsDataActionUserFollows = (data)=>{
    return (dispatch,getState)=>{
        getUserFollowsData(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"USER_FOLLOWS_DATA",
                    data:res.data
                })
            }
        })
    }
}