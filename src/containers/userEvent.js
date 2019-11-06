import { connect} from 'react-redux'
import UserEvent from '../components/userHome/userEvent'
import {
    getUserDetailDataActionUserEvent,
    userEventDataAction ,
    userFollowsDataAction , 
    userFansDataAction} from '../actions/userEvent'


const getStateToProps = ( state,ownProps )=>{
    return{
        userDetailData: state.getUserDetailDataReducerUserEven.data,
        userEventData: state.userEventDataReducer.data,
        userFollowsData: state.userFollowsDataReducer.data,
        userFansData: state.userFansDataReducer.data
    }
    
}
const getDispatchToProps = (dispatch, ownProps)=>{
    return {
        userDetailFunc:  (uid)=>{ 
            dispatch(  getUserDetailDataActionUserEvent(uid) ) 
        },
        userEventFunc: (uid)=>{
            dispatch( userEventDataAction(uid)  )
        },
        userFollowsFunc: (uid)=>{
            dispatch(  userFollowsDataAction(uid))
        },
        userFansFunc: (uid)=>{
            dispatch( userFansDataAction(uid))
        }
    }
}
export default connect(getStateToProps,getDispatchToProps )(UserEvent)