import React, { Component } from 'react';
import { Row,Col,Spin  } from 'antd';
import "antd/dist/antd.css";
import  { withRouter } from 'react-router'
import Head from './head'
import Comment from '../common/comment'
import SimiUser from './simiUser'
import SimiPlaylist from './simiPlaylist'
import SimiSong from './simiSong'
import MulPlatformDownload from '../common/mulPlatform'

class Song extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    componentDidMount(){
        //获取： 歌曲、评论、歌词、相似用户、相似歌单、相似歌曲
        this.props.songDataFunc(  this.props.location.search );
        this.props.songCommentDataFunc( this.props.location.search, 20, 1)
        this.props.songLyricDataFunc(this.props.location.search)
        this.props.simiUserDataFunc( this.props.location.search)
        this.props.simiPlaylistDataFunc( this.props.location.search )
        this.props.similarSongFunc( this.props.location.search)
    }
    //评论分页
    handlePagination = (current,size)=>{
        this.props.songCommentDataFunc( this.props.location.search, size, current)
    }
    //新歌曲
    handleNewSong=(id)=>{
        this.props.history.push(`/song${id}`)
        this.props.songDataFunc(id );
        this.props.songCommentDataFunc( id, 20, 1)
        this.props.songLyricDataFunc(id )
        this.props.simiUserDataFunc( id )
        this.props.simiPlaylistDataFunc( id )
        this.props.similarSongFunc( id )
    }
    render(){
        return(
            <div style={{minHeight:'400px'}} >
                {
                    ( this.props.songData &&  this.props.songCommentData && this.props.songLyricData ) && 
                    ( this.props.simiUserData &&  this.props.simiPlaylistData && this.props.similarSongData ) ?
                        <Row style={ { backgroundColor:'#F5F5F5' } }>
                            <Col span={3}/>
                            <Col span={18} style={{ backgroundColor:"#fff",borderLeft:"1px solid #D3D3D3",borderRight:"1px solid #D3D3D3" }}>
                                <Row style={{minWidth:'980px'}}>
                                    {/* //内容左侧 */}
                                    <Col span={18} style={{ borderRight:"1px solid #E6E6E6",padding:'0 25px' }} >
                                        { 
                                            this.props.songData && this.props.songData.songs && this.props.songCommentData && this.props.songLyricData ? 
                                                <div>
                                                    <Head 
                                                        songData={ this.props.songData.songs } 
                                                        commentTotal={ this.props.songCommentData.total } 
                                                        songLyricData={this.props.songLyricData}/>
                                                    <Comment commentData={ this.props.songCommentData } handlePagination={ this.handlePagination }/>
                                                </div>
                                            : <Spin/>
                                        }
                                    </Col>
                                    {/* //内容右侧 */}
                                    <Col span={6}  style={{ padding:'0px 20px',paddingTop:'60px' }}>
                                        {
                                            this.props.simiUserData &&  this.props.simiUserData.userprofiles ?
                                                <SimiUser simiUserData={ this.props.simiUserData.userprofiles } />
                                            : null
                                            
                                        }
                                        {
                                            this.props.simiPlaylistData && this.props.simiPlaylistData.playlists?
                                                <SimiPlaylist simiPlaylistData={  this.props.simiPlaylistData.playlists } />
                                            : null
                                        }
                                        {
                                            this.props.similarSongData &&  this.props.similarSongData.songs ?
                                                <SimiSong similarSongData={ this.props.similarSongData.songs } handleNewSong={ this.handleNewSong} />
                                            : null
                                        }
                                        <MulPlatformDownload />
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={3} />
                        </Row>
                    :<Spin style={{margin:'auto'}}/>
                }
            </div>  
        )
    }
}
export default withRouter(Song)