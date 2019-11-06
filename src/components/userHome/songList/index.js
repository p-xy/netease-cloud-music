import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {  Row,Col, Icon, Empty } from 'antd'
import 'antd/dist/antd.css'
import {startPlaySong } from '../../common/tools'

class SongList extends Component{
    constructor(props){
        super(props)
        this.state = {
            weekData: true 
        }
    }
    //一周播放记录
    recentWeek = ()=>{
        this.props.songListFunc( this.props.uid, 1)
        this.setState({
            weekData: true
        })
    }
    //所有的播放记录
    allTime = ()=>{
        this.props.songListFunc( this.props.uid, 0)
        this.setState({
            weekData: false
        })
    }
    
    render(){
       const songList=this.props.songListContent.hasOwnProperty('weekData') ? this.props.songListContent.weekData : this.props.songListContent.allData
       const userSingerPlayList =  songList ? songList.slice(0,10) : null
        return(
            <div>
                <Row style={{ paddingBottom:"10px", borderBottom:"2px solid #C20C0C", }}> 
                    <Col style={{ float:"left",fontSize:"20px",marginRight:"10px" }}>听歌排行</Col>
                    <Col style={{ float:"right" }}>
                        <div 
                            style={{ float:"left",fontSize:"12px",cursor:"pointer",color:this.state.weekData?"#333":"#666666",fontWeight:this.state.weekData ? "bold":"normal" }}
                            onClick={ this.recentWeek }>最近一周
                        </div>
                        <div style={{ float:"left",marginRight:"5px",marginLeft:"5px",fontSize:"12px"  }}>|</div>
                        <div 
                            style={{ float:"left",fontSize:"12px",cursor:"pointer",color:!this.state.weekData ? "#333":"#666666",fontWeight:!this.state.weekData ? "bold":"normal" }}  
                            onClick={ this.allTime }>所有时间
                        </div>
                        <div style={{ clear:"both" }}></div>
                    </Col>
                </Row>
                <Row style={{ border:"1px solid #E2E2E2" }}>
                    {
                        userSingerPlayList ? 
                            <div>
                                {
                                    userSingerPlayList.map( (item,index)=>(
                                        <div key={index+item} style={{ height:"38px",backgroundColor:(index+1)%2?"#F7F7F7":"#fff" }} >
                                            <div style={{ display:"inline-block",color:"#666666",fontSize:"16px",width:"50px",textAlign:"right" }}>{index+1}.</div>
                                            <div style={{ display:"inline-block" }} >
                                                <Icon  onClick={ ()=>startPlaySong(item.song.id) }  type="play-circle" theme="filled" style={{ fontSize:"20px",cursor:"pointer",color:"#B4B4B4",marginLeft:"15px",verticalAlign:"middle",position:"relative",zIndex:"100"}} />
                                            </div>
                                            <div style={{ display:"inline-block",width:"480px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",verticalAlign:"bottom" }}>
                                                <div 
                                                    style={{ display:"inline-block",marginLeft:"15px",color:"#333",fontWeight:"bold",fontSize:"12px",cursor:"pointer", }}
                                                    onClick={ ()=>this.props.history.push(`/song?id=${item.song.id}`) }> { item.song.name }
                                                </div>
                                                <div 
                                                    style={{ display:"inline-block",marginLeft:"15px",color:"#aeaeae",fontSize:"12px",cursor:'pointer' }}
                                                    onClick={ ()=>this.props.history.push(`/artist?id=${item.song.ar[0].id}`) }> {item.song.ar[0].name}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div> 
                        :<div style={{ margin:"50px 0px" }}><Empty description="暂无听歌记录"/></div>
                    }
                </Row>
            </div>
        )
    }
}
export default withRouter(SongList)