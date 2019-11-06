import React, { Component } from 'react'
import{ Row,Col,Icon } from 'antd';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import './index.scss'
import { formatSongTime } from '../../common/tools';

class SongList extends Component {
    render(){
        const toplistContentData = this.props.toplistContentData ;
      //渲染歌曲列表
        const renderToplistContentData = toplistContentData  && toplistContentData.tracks ? toplistContentData.tracks.map( (item,index)=>{
            return(
                <div key={ item.name+index }style={{backgroundColor:index%2?"#fff":"#F7F7F7"}}>
                    <Row  style={{ height:index<3?"70px":"30px",lineHeight:index<3?"70px":"30px" }}>
                        <Col span={3}> <span className='toplist-songlist-index'>{index+1}</span> </Col>
                        <Col span={12} >
                            <Row gutter={10}>
                                {
                                    index<3?
                                        <Col span={4}>
                                            <Link to={`/song?id=${item.id}`}><img style={{ width:"50px",height:"50px"}} src={item.al.picUrl} alt=""/></Link>
                                        </Col>
                                    :null
                                }
                                <Col span={1} className='songlist-play-cycle' onClick={ ()=> this.props.startPlaySong(item.id) }>
                                   <Icon type="play-circle"  />
                                </Col>
                                <Col span={19} style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block" }} >
                                    <Link className='songlist-song-name' to={`/song?id=${item.id}`}>  {item.name} </Link>
                                    {
                                        item.mv?
                                            <Link  className='songlist-song-mv' to={`/mv?id=${item.mv}`}> <Icon type="video-camera" /> </Link>
                                        :null
                                    }
                                    
                                </Col>
                            </Row>
                        </Col>
                        <Col span={4} className='songlist-songlist-timer'> {formatSongTime(item.dt)} </Col>
                        <Col span={5}  style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block" }} >
                            <Link  className='songlist-songlist-artist' to={`/artist?id=${item.ar[0].id}`}>{item.ar[0].name}</Link>
                        </Col>
                    </Row>  
                </div>
            )
        }):null
        return (
        <div >
            <Row className='toplist-songlist-header'>
                <Col span={4} className='songlist-songList'>歌曲列表</Col>
                <Col span={3} className='songlist-count'> {toplistContentData.trackCount}首歌 </Col>
                <Col span={17} className='songlist-playcount'>
                    播放: <span className= 'songlist-playcount-color'>{toplistContentData.playCount} </span>次&nbsp;
                </Col>
            </Row>
            <Row className='toplist-songlist-content' >
                <Row className='songlist-content-head'>
                    <Col span={3} > </Col>    
                    <Col span={12} className='content-head-text'>标题</Col>    
                    <Col span={4} className='content-head-text'>时长</Col>    
                    <Col span={4} className='content-head-text'>歌手</Col>    
                </Row>    
                { renderToplistContentData }
            </Row>
        </div>
        )
    }
}
export default SongList