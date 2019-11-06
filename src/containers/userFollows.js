import { connect} from 'react-redux'
import UserFollows from '../components/userHome/userFollows'
import { getUserDetailDataActionUserFollows,userFollowsDataActionUserFollows } from '../actions/userFollows'

const getStateToProps = (state,ownProps)=>{
    return {
       userFollowsDetailData: state.getUserDetailDataReducerUserFollows.data,
       userFollowsData: state.userFollowsDataReducerUserFollows.data
    }
}
 const getDispatchToProps = (dispatch,ownProps)=>{
    return {
        getUserDetailData:(uid)=>{
            dispatch( getUserDetailDataActionUserFollows( uid ))
        },
        getUserFollowsData: (uid)=>{
            dispatch(userFollowsDataActionUserFollows(uid) )
        }
    }
}
export default connect(getStateToProps,getDispatchToProps)(UserFollows)
