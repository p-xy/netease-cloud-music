import { connect } from 'react-redux';
import DiscoverToplist from '../components/discoverToplist'
import { allPlaylistDataAction, toplistContentDataAction,toplistCommentDataAction } from '../actions/discoverToplist';


const mapStateToProps = (state,ownProps)=>{
    return {
        allPlaylistData: state.allPlaylistDataReducer.data,
        toplistContentData: state.toplistContentDataReducer.data,
        toplistCommentData: state.toplistCommentDataReducer.data
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        allPlaylistDataFunc:( )=>{
            dispatch( allPlaylistDataAction() )    
        },
        toplistContentDataFunc:( id )=>{
            dispatch( toplistContentDataAction( id ))
        },
        toplistCommentDataFunc:( id,limit,offset)=>{
            dispatch(toplistCommentDataAction( id,limit,offset ))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DiscoverToplist)
