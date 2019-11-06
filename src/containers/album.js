import { connect } from 'react-redux';
import Album from '../components/album';
import { getAlbumAction,getAlbumCommentAction  } from '../actions/album'

const mapStateToProps = (state,props)=>{
    return {
        //专辑中的数据
        albumData: state.albumData.data,
        //专辑评论数据
        albumCommentData: state.albumCommentData.data,
        //专辑中的歌手的其他专辑
        singerOtherAlbum: state.singerOtherAlbum.data,
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        //专辑数据函数
        getAlbumData:(search)=>{
            dispatch(getAlbumAction(search))
        },
        //专辑评论数据
        getAlbumCommentData:(id,limit,offset)=>{
            dispatch( getAlbumCommentAction(id,limit,offset) )
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Album)
