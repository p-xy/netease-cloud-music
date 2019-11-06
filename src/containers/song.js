import { connect } from 'react-redux';
import Song from '../components/song';
import { 
    songDataAction ,songCommentDataAction,songLyricDataAction,
    simiUserDataAction,  simiPlaylistDataAction, similarSongDataAction,
    songUrlDataAction } from '../actions/song';

const mapStateToProps = (state,ownProps)=>{
    return {
        songData: state.songDataReducer.data || {},
        songCommentData: state.songCommentDataReducer.data || {},
        songLyricData: state.songLyricDataReducer.data || {},
        simiUserData: state.simiUserDataReducer.data,
        simiPlaylistData: state.simiPlaylistDataReducer.data,
        similarSongData: state.similarSongData.data || {},
        songUrlData: state.songUrlDataReducer.data||{},
        
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        //单曲数据
        songDataFunc:(data)=>{
            dispatch(songDataAction(data))
        },
        //单曲评论数据
        songCommentDataFunc:(id,limit,offset)=>{
            dispatch(songCommentDataAction(id,limit,offset))
        },
        //单曲歌词数据
        songLyricDataFunc:(data)=>{
            dispatch(songLyricDataAction(data))
        },
        //相似用户
        simiUserDataFunc: (data)=>{
            dispatch(simiUserDataAction(data) )
        },
        //相似歌单
        simiPlaylistDataFunc:(data)=>{
            dispatch( simiPlaylistDataAction(data) )
        },
        //相似歌曲
        similarSongFunc:(data)=>{
            dispatch(similarSongDataAction(data))
        },
        //播放数据
        songUrlDataFunc:(data)=>{
            dispatch(songUrlDataAction(data))
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Song)



