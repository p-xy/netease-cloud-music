import { connect } from 'react-redux';
import UserHome from '../components/userHome'
import { getUserDetailDataAction,userSingerPlayListAction,userHomePlaylistAction } from '../actions/userHome';

const getStateToProps = (state,ownProps)=>{
    return {
        userDetailData: state.getUserDetailDataReducer.data,
        userSingerPlayList: state.userSingerPlayListReducer.data,
        userHomePlaylist: state.userHomePlaylistReducer.data,
    }
}
 const getDispatchToProps = (dispatch,ownProps)=>{
    return {
        userDetailDataFunc:(uid)=>{
            dispatch( getUserDetailDataAction( uid ))
        },
        userSingerPlayListFunc:(uid, type)=>{
            dispatch( userSingerPlayListAction( uid, type))
        },
        userHomePlaylistFunc:( uid )=>{
            dispatch( userHomePlaylistAction( uid ))
        }
    }
}
export default connect(getStateToProps,getDispatchToProps)(UserHome)
