import { connect } from 'react-redux'
import My from '../components/my'
import {  mySongAction,getLoginPlaylistContentAction } from '../actions/my'

const mapStateToProps = (state,onwProps)=>{
    return {
        getLoginPlaylistInfo:state.getLoginPlaylistInfoReducer.data,
        getLoginPlaylistContent:state.getLoginPlaylistContentReducer.data,
    }
}
const mapDispatchToProps = (dispatch,onwProps)=>{
    return {
        getMysongData: ()=>{
            dispatch(  mySongAction())
        },
        getPlaylistContentData: (playlistID)=>{
            dispatch( getLoginPlaylistContentAction(playlistID))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(My)

