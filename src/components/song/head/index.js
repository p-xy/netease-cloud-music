import React, { Component } from 'react';
import { Row,Col,Icon } from 'antd';
import "antd/dist/antd.css";
import  { withRouter } from 'react-router'
import './index.scss'
import { startPlaySong } from '../../common/tools'

class Head extends Component{
    constructor(props){
        super(props);
        this.state={
            isExtend:false,//用于确定歌词是否展开
        }
    }
    handleClick = ()=>{
        this.setState({
            isExtend: !this.state.isExtend
        })
    }
    
    render(){
        const renderSongData = this.props.songData[0]
        const renderSongLyric = ( this.props.songLyricData.lrc && this.props.songLyricData.lrc.lyric ) ? this.props.songLyricData.lrc.lyric : ""
        //去除时间和/n得格式化歌词
        const html = renderSongLyric && renderSongLyric.replace(/\[\d+:\d+\.\d+\]/gi,"").replace(/\n/gi,"<br />")
        const extend = (
            <div>
                <div style={{ marginTop:"50px",fontSize:"12px" }} >
                    <span  dangerouslySetInnerHTML={{ __html: html }}></span>
                </div> 
                <div style={{ marginTop:"20px",cursor:"pointer" }} onClick={ this.handleClick }>
                    <span style={{ color:"#2883C9" }}>收起</span>
                    <Icon type="up" />
                </div>
            </div>
        )
        const notExtend = (
            <div>
                <div  style={{ marginTop:"50px",fontSize:"12px",height:"250px",overflow:"hidden"}} dangerouslySetInnerHTML={{ __html:html }}>
                </div> 
                <div style={{ marginTop:"20px",cursor:"pointer"  }} onClick={ this.handleClick }>
                    <span style={{ color:"#2883C9" }}>展开</span>
                    <Icon type="down" />
                </div>
            </div>
        )
        return(
            <Row style={{  paddingTop:'35px'}}>
                <Col span={8}>
                    <div className='song-logo'>
                        <div className='song-logo-bg'></div>
                        <div className='song-logo-img'>
                            <img  src={renderSongData.al && renderSongData.al.picUrl} alt="" />
                        </div>
                    </div>
                    <div className='exact-link'>
                        <span className='exact-link-icon'></span>
                        <span className='exact-link-font'>生成外链播放器</span>
                    </div>
                </Col>
                <Col span={16} style={{paddingTop:"30px",paddingLeft:"20px"}}>
                    <div className='song-content-rightHeader'>
                        <span className='song-content-rightHeader-logo'></span>
                        <span className='song-content-rightHeader-name'>{renderSongData.name}</span>
                    </div>
                        {
                            renderSongData.alia && renderSongData.alia.length>0?
                            <div style={{ marginLeft:"65px",color:"#CACACA",fontSize:"14px" }}>
                                {renderSongData.alia}
                            </div>
                            :null   
                        }
                    <div style={{ padding:'5px 0px '}}>
                        <span style={{ fontSize:"12px" }}>歌手:</span>
                        <span onClick={()=>this.props.history.push(`/artist?id=${renderSongData.ar[0].id}`)} style={{cursor:'pointer', marginLeft:"5px",fontSize:"12px",color:"#2273C2" }}>{ renderSongData.ar[0].name}</span>
                    </div>
                    <div >
                        <span style={{ fontSize:"12px" }}>所属专辑:</span>
                        <span onClick={()=>this.props.history.push(`/album?id=${renderSongData.al.id}`)}style={{cursor:'pointer',marginLeft:"5px",fontSize:"12px",color:"#2273C2"  }}>{ renderSongData.al.name}</span>
                    </div>
                    <div className='cong-content-menu' style={{ marginTop:"10px",minWidth:"420px" }}>
                        <Row gutter={10}>
                            <Col span={6} >
                                <span className='menu-player-bg' style={{ cursor:"pointer" }}>
                                    <span className='menu-player-bgLeft' onClick={ ()=>startPlaySong( renderSongData.id) }>
                                        <Icon type="right-circle" style={{ color:"#fff",marginLeft:"5px",fontSize:"16px",fontWeight:"bold",verticalAlign:"middle" }} />
                                        <span style={{ color:"#fff",fontSize:"12px",fontWeight:"bold",marginLeft:"5px",verticalAlign:"middle" }}>播放</span>
                                    </span>
                                    <span className='menu-player-bgRight'></span>
                                </span>
                                <span className='add'>

                                </span>
                            </Col>
                            <Col span={4} className='menu-player-store'>
                                <span className='menu-player-storeLogo'>收藏 </span>
                                <i className='menu-player-store-bgRight'></i>
                            </Col>
                            <Col span={4} className='menu-player-store'>
                                <span style={{ backgroundPosition:"0 -1225px" }} className='menu-player-storeLogo'>分享 </span>
                                <i className='menu-player-store-bgRight'></i>
                            </Col>
                            <Col span={4} className='menu-player-store'>
                                <span style={{ backgroundPosition:"0 -2761px" }}  className='menu-player-storeLogo'>下载 </span>
                                <i className='menu-player-store-bgRight'></i>
                            </Col>
                            <Col span={6} className='menu-player-store'>
                                <span style={{ backgroundPosition:"0 -1465px" }}  className='menu-player-storeLogo'>{`评论(${this.props.commentTotal}) `}</span>
                                <i className='menu-player-store-bgRight'></i>
                            </Col>
                        </Row>
                        </div>
                        {
                            this.state.isExtend ?
                               extend
                            :  notExtend 
                        }
                </Col>
            </Row> 
        )
    }
}
export default withRouter(Head)