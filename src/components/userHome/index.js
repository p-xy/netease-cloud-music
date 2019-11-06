import React, { Component } from 'react'
import {  Row,Col,Spin  } from 'antd';
import { withRouter} from 'react-router-dom'
import 'antd/dist/antd.css';
import './index.scss'
import Introduction from './introduction';
import SongList from './songList'
import UserHomePlayList from './playlist'

class UserHome extends Component{
    componentDidMount(){
        this.search = this.props.location.search;
        this.id = this.search.match(/\d+/gi).toString();
        //获取用户信息
        this.props.userDetailDataFunc( this.id )
        //获取用户最近一周所听的歌曲
        this.props.userSingerPlayListFunc( this.id,1)
        //请求userhome的歌单数据
        this.props.userHomePlaylistFunc( this.id )
    }
    render(){
        return(
            <Row  style={{backgroundColor:"#F5F5F5",minWidth:"1200px"}}>
                <Col span={4} />
                <Col span={16} style={{ backgroundColor:"#fff",borderLeft:"1px solid #D3D3D3",borderRight:"1px solid #D3D3D3",padding:'50px 30px' }}>
                    {
                        this.props.userDetailData ? 
                            <div>
                                {/*用户详情*/}
                                <Introduction  userDetailData={this.props.userDetailData}/>
                                {/*播放记录*/}
                                {
                                    this.props.userSingerPlayList ?
                                        <div  style={{ marginTop:"50px" }}> 
                                            <SongList 
                                                uid={ this.id } 
                                                songListContent={ this.props.userSingerPlayList } 
                                                songListFunc={ this.props.userSingerPlayListFunc } />
                                        </div>
                                    :null
                                }
                                {/*用户歌单*/}
                                {
                                    this.props.userHomePlaylist && this.props.userDetailData.profile ?
                                        <div style={{ marginTop:"50px" }}>
                                            <UserHomePlayList 
                                                userId={ this.id } 
                                                nickname ={ this.props.userDetailData.profile.nickname } 
                                                userHomePlaylist={this.props.userHomePlaylist}/>
                                        </div>
                                    :null
                                }
                            </div>
                        :<Spin style={{minHeight:'500px' }}/>
                    }
                </Col>
                <Col span={4} />
            </Row>
        )
    }
}
export default withRouter( UserHome )