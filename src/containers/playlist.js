import { connect } from 'react-redux';
import PlayList from '../components/playlist';
import { playlistDataAction,playlistCommentDataAction, hotPlaylistDataAction } from '../actions/playlist';
import { withRouter} from 'react-router-dom'

const mapStateToProps = (state,ownProps)=>{
    return {
        playlistData:state.playlistDataReducer.data||{},
        playlistCommentData:state.playlistCommentDataReducer.data ||{},
        hotPlaylistData:state.hotPlaylistDataReducer.data||{},
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        displayDataFunc:(data)=>{
            dispatch(playlistDataAction(data))
        },
        playlistCommentDataFunc:(id,limit,offset)=>{
            dispatch(playlistCommentDataAction(id,limit,offset))
        },
        hotPlaylistDataFunc:(data)=>{
            dispatch( hotPlaylistDataAction(data) )
        }
    }
}

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(PlayList) )
