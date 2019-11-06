import { getUserDetailData, getUserEventData,getUserFollowsData,  getUserFansData } from '../api'

//用户详情
export const getUserDetailDataActionUserEvent = (data)=>{
    return (dispatch,getState)=>{
        getUserDetailData(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"USER_DETAIL_DATA",
                    data :res.data
                })
            }
        })
        
    }
}
//用户动态
export const userEventDataAction = (data)=>{
    return (dispatch,getState)=>{
        getUserEventData(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"USER_EVENT_DATA",
                    data: res.data
                })
            }
        })
    }
} 
//用户关注
export const userFollowsDataAction = (data)=>{
    return (dispatch,getState)=>{
        getUserFollowsData(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"USER_FOLLOWS_DATA",
                    data: res.data
                })
            }
        })
    }
}
//粉丝
export const userFansDataAction = (data)=>{
    return (dispatch,getState)=>{
        getUserFansData(data).then( (res)=>{
            if(res.data.code===200){
                dispatch({
                    type:"USER_FANS_DATA",
                    data: res.data
                })
            }
        })
    }
}