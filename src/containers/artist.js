
import { connect } from 'react-redux'
import Artist from '../components/artist'
import { singerSongsDataAction,singerAlbumsDataAction,singerMvsDataAction,singerDesDataAction,simiArtistAction } from '../actions/artists'


const mapStateToProps = (state,ownProps)=>{
    return {
        singerSongsData:state.singerSongsDataReducer.data||{},
        singerAlbumsData:state.singerAlbumsDataReducer.data||{},
        singerMvsData:state.singerMvsDataReducer.data||{},
        singerDesData:state.singerDesDataReducer.data||{},
        singerSimiArtistData: state.simiArtistDataReducer.data
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        singerSongsDataFunc:(data)=>{
            dispatch(singerSongsDataAction(data))
        },
        singerAlbumsDataFunc:(data)=>{
            dispatch(singerAlbumsDataAction(data))
        },
        singerMvsDataFunc:(data)=>{
            dispatch(singerMvsDataAction(data))
        },
        singerDesDataFunc:(data)=>{
            dispatch(singerDesDataAction(data))
        },
        singerSimiArtistDataFunc: (data)=>{
            dispatch( simiArtistAction(data) )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Artist)

