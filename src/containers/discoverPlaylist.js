import { connect } from  'react-redux';
import DiscoverPlaylist from '../components/discoverPlaylist';
import { commendTagsContentAction,selectTagsDataAction } from '../actions/discoverPlaylist';

const mapStateToProps = (state,ownProps)=>{
    return {
        commendTagsContentData: state.commendTagsContentReducer.data||{},
        selectTagsData: state.selectTagsDataReducer.data || {},
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        hotCommendTagsContentFunc:(tag, offset)=>{
            dispatch( commendTagsContentAction( tag, offset) )
        },
        selectTagsDataFunc:()=>{
            dispatch(selectTagsDataAction());
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(DiscoverPlaylist)



