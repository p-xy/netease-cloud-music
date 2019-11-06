import React, { Component } from 'react';
import { Row,Col  } from 'antd';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom'
import Head from './head'
import SongList from './songList';
import Comment from '../common/comment'
import LikePlaylistPerson from './likePlaylistPerson'
import RelatedRecommand from './relatedRecommand'
import MulPlatform from'../common/mulPlatform'
import { startPlaySong } from '../common/tools'


class PlayList extends Component {
    componentDidMount(){
        //获取歌单数据、评论数据、相关推荐
        this.props.displayDataFunc( this.props.location.search);
        this.props.playlistCommentDataFunc(this.props.location.search,20,1);
        this.props.hotPlaylistDataFunc(this.props.location.search);
    }
    handleNewPlaylist = (search)=>{
        this.props.history.push(`/playlist${search}`)
        this.props.displayDataFunc( search);
        this.props.playlistCommentDataFunc(search,20,1);
        this.props.hotPlaylistDataFunc(search);
    }
    
    //分页
    handlePagination=(current,size)=>{
        this.props.playlistCommentDataFunc(this.search,size,current)
    }
    render(){
        return(
            <Row style={{ backgroundColor:"#f5f5f5",minWidth:"1300px" }}>
                <Col span={3} />
                <Col span={18} >
                    <Row style={{ backgroundColor:"#fff",borderLeft:"1px solid #D3D3D3",borderRight:"1px solid #D3D3D3" }}>
                        <Col span={18} style={{ borderRight:"1px solid #D3D3D3",padding:'0px 25px' }}>
                            <Head playlistData = { this.props.playlistData } />
                            <SongList playlistData = { this.props.playlistData }   startPlaySong={ startPlaySong } />
                            <Comment  commentData={ this.props.playlistCommentData } handlePagination={ this.handlePagination} />
                        </Col>
                        <Col span={6} style={{ padding:"20px",minWidth:"250px" }}>
                            <LikePlaylistPerson playlistData={this.props.playlistData } style={{paddingTop:'50px'}}/>
                            <RelatedRecommand  hotPlaylistData={this.props.hotPlaylistData} handleNewPlaylist={ this.handleNewPlaylist} />
                            <MulPlatform style={{paddingTop:'20px'}}/>
                        </Col>
                    </Row>
                </Col>
                <Col span={3}/>
            </Row>
        )
    }
}
export default withRouter( PlayList );