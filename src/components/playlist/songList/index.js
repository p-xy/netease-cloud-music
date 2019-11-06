import React, { Component } from 'react'
import { Row,Col,Icon ,Spin } from 'antd';
import { Link ,withRouter} from 'react-router-dom'
import 'antd/dist/antd.css'
import { formatSongTime, addOrEven } from '../../common/tools'

class SongList extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    startPlaySongSub=(id)=>{
        this.props.startPlaySong(id)
    }
    render(){
        const playlist = this.props.playlistData ? this.props.playlistData.playlist :  []
        const tracks = playlist  ? playlist.tracks : []
        const renderTracks = tracks ?
            tracks.map( (item,index)=>{
                const nth = addOrEven(index)?{backgroundColor:"#F7F7F7",cursor:"pointer"}:{backgroundColor:'#fff',cursor:"pointer"}
                let singer = "";
                item.ar.forEach( (item,index)=>{
                    singer += `${item.name}/`
                })
                return(
                    <Row key={ item+index } style={ nth }>
                        <Col span={3}  style={{ height:"34px",lineHeight:"34px" }}  onClick={ ()=>this.startPlaySongSub(item.id) }>
                            <span  style={{ marginLeft:"10px",marginRight:"20px",color:"#9D9D9D" }} >{index+1}</span>
                            <Icon style={{color:"#9D9D9D"  }} type="play-circle" />
                        </Col>
                        <Col span={7} style={{ height:"34px",lineHeight:"34px",fontSize:"12px",paddingLeft:"10px",position:"relative" }} >
                            <div style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                                <span  style={{ marginRight:"5px",cursor:'pointer',overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }} onClick={()=>this.props.history.push(`/song?id=${item.id}`) }>{item.name}</span>
                                <span  onClick={()=>this.props.history.push(`/mv?id=${item.mv}`) } style= {{cursor:'pointer'}}className={ item.mv>0?"bg-mv":"" }></span>
                            </div>
                        </Col>
                        <Col span={4}  style={{ height:"34px",lineHeight:"34px",fontSize:"12px",paddingLeft:"10px" }} >
                            <span>{  formatSongTime(item.dt) }</span>
                        </Col>
                        <Col span={4}  style={{ height:"34px",lineHeight:"34px",fontSize:"12px",paddingLeft:"10px",cursor:'pointer',overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"  }} >
                            <span  onClick={()=>this.props.history.push(`/artist?id=${item.ar[0].id}`) }>{singer.slice(0,singer.length-1)}</span>
                        </Col>
                        <Col span={6} style={{ cursor:'pointer',fontSize:"12px",height:"34px",lineHeight:"34px", overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>
                            <span  onClick={()=>this.props.history.push(`/album?id=${item.al.id}`) }>{item.al.name}</span>
                        </Col>
                    </Row>  
                )
            })
        :null;
        return(
            <div>
            {
                playlist?
                    <div>
                        <div style={{ minWidth:"540px" }} >
                            <Row gutter={10}>
                                <Col style={{ fontSize:"20px",color:"#000",verticalAlign:"middle" }} span={4}>歌曲列表</Col>
                                <Col span={3} style={{ marginTop:"10px" }}>{ playlist.tracks.lentgh}首歌</Col>
                                <Col span={6} />
                                <Col style={{ fontSize:"12px",marginTop:"10px" }} span={5}><Link to="" style={{ textDecoration:"underline" }}>生成外链播放器</Link></Col>
                                <Col style={{ fontSize:"12px",marginTop:"10px" }} span={6}>播放:<span style={{ color:"#C20C0C",fontWeight:"bold" }}>{playlist.playCount}</span>次</Col>
                            </Row>
                        </div>
                        <div  style={{ borderTop:"2px solid #C20C0C",marginTop:"10px",minWidth:"540px" ,borderLeft:'1px solid #D3D3D3',borderRight:'1px solid #D3D3D3',borderBottom:'1px solid #D3D3D3'}}>
                            <Row style={{ borderBottom:"1px solid #D8D8D8"  }}>
                                <Col span={3} style={{ backgroundColor:"#F3F3F3",height:"34px",lineHeight:"34px" ,borderRight:"1px solid #d8d8d8"}}>&nbsp; </Col>
                                <Col span={7} style={{ backgroundColor:"#F3F3F3",height:"34px",lineHeight:"34px",borderRight:"1px solid #d8d8d8",paddingLeft:"10px" }} >歌曲标题</Col>
                                <Col span={4}  style={{ backgroundColor:"#F3F3F3",height:"34px",lineHeight:"34px",borderRight:"1px solid #d8d8d8",paddingLeft:"10px" }}    >时长</Col>
                                <Col span={4} style={{ backgroundColor:"#F3F3F3",height:"34px",lineHeight:"34px",borderRight:"1px solid #d8d8d8",paddingLeft:"10px" }}>歌手</Col>
                                <Col span={6}  style={{ backgroundColor:"#F3F3F3",height:"34px",lineHeight:"34px",paddingLeft:"10px" }}  >专辑</Col>
                            </Row>
                            <div > {  renderTracks } </div>
                        </div>
                    </div>
                : <Spin />
            }
            </div>
        )
    }
}
export default withRouter( SongList )