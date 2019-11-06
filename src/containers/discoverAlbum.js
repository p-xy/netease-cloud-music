import { connect } from 'react-redux';
import DiscoverAlbum from '../components/discoverAlbum'
import { newAlbumDataAction, newAlbumAllDataAction } from '../actions/discoverAlbum';


const mapStateToProps = (state,ownProps)=>{
    return {
        newAlbumData: state.newAlbumDataReducer.data,
        newAlbumAllData: state.newAlbumAllDataReducer.data
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        newAlbumDataFunc:()=>{
            dispatch( newAlbumDataAction( ) )
        },
        newAlbumAllDataFunc:( area, offset )=>{
            dispatch( newAlbumAllDataAction(area, offset) )
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DiscoverAlbum)

