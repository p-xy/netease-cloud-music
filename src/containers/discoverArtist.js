import { connect } from 'react-redux';
import DiscoverArtists from '../components/discoverArtist'
import { enterSingerDataAction,hotSingerDataAction,catSingerDataAction } from '../actions/discoverArtist';

const mapStateToProps = (state,ownProps)=>{
    return {
        enterSingerData: state.enterSingerDataReducer.data,
        hotSingerData: state.hotSingerDataReducer.data,
        catSingerData: state.catSingerDataReducer.data,
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{

    return {
        enterSingerDataFunc:()=>{
            dispatch( enterSingerDataAction() )
        },
        hotSingerDataFunc:()=>{
            dispatch( hotSingerDataAction() )
        },
        catSingerDataFunc:( data )=>{
            dispatch (catSingerDataAction(data) )
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DiscoverArtists)
