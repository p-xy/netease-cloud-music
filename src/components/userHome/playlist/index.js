import React, { Component } from 'react'
import { Row,Col,Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css'

class UserHomePlayList extends Component {
    render(){
        //创建歌单数组、收藏歌单数组
        let createPlaylist=[];
        let storePlaylist=[];
        const userHomePlaylist = this.props.userHomePlaylist.playlist
        userHomePlaylist.forEach( (item,index)=>{
            if( this.props.userId === item.userId){
                createPlaylist.push(item)
            }else {
                storePlaylist.push(item)
            }
        })
        //渲染创建歌单的内容
        const renderCreatePlaylist = createPlaylist ?
            createPlaylist.map( (item,index)=>(
                <Col  style={{ marginTop:"20px"}} key={item.coverImgUrl}>
                    <div style={{ position:"relative" }}>
                        <img  
                            onClick={()=>this.props.history.push(`/playlist?id=${item.id}`)} 
                            style={{ width:'140px',height:'140px', cursor:"pointer" }} 
                            src={item.coverImgUrl}  
                            alt=""/>
                        <div style={{ width:"140px",height:"27px",lineHeight:"27px",backgroundColor:"#000" ,opacity: '0.5',color:"#fff",position:"absolute",bottom:"0px" }}>
                            <div style={{ float:"left",marginLeft:"10px" }}>
                                <Icon type="customer-service" />
                                <span>{item.playCount}</span>
                            </div>
                            <div style={{ float:"right",marginRight:"10px" }}>
                                <Icon style={{ fontSize:"16px" }} type="right-circle" /> 
                            </div>
                        </div>
                    </div>
                    <div 
                        onClick={()=>this.props.history.push(`/playlist?id=${item.id}`)}  
                        style={{ width:"140px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",marginTop:"10px",cursor:"pointer" }}>{item.name}
                    </div>
                </Col>
            )
        )
        : null
        //渲染收藏歌单内容
        const renderStorePlaylist = storePlaylist ?
            storePlaylist.map( (item,index)=>(
                <Col  style={{ marginTop:"20px"}} key={item.coverImgUrl +item.coverImgUrl}>
                    <div style={{ position:"relative" }}>
                        <img  
                            onClick={()=>this.props.history.push(`/playlist?id=${item.id}`)} 
                            style={{ width:'140px',height:'140px', cursor:"pointer" }} 
                            src={item.coverImgUrl}  
                            alt=""/>
                        <div style={{ width:"140px",height:"27px",lineHeight:"27px",backgroundColor:"#000",opacity:'0.5',color:"#fff",position:"absolute",bottom:"0px" }}>
                            <div style={{ float:"left",marginLeft:"10px" }}>
                                <Icon type="customer-service" />
                                <span>{item.playCount}</span>
                            </div>
                            <div style={{ float:"right",marginRight:"10px" }}>
                                <Icon style={{ fontSize:"16px" }} type="right-circle" /> 
                            </div>
                        </div>
                    </div>
                    <div 
                        onClick={()=>this.props.history.push(`/playlist?id=${item.id}`)}  
                        style={{ width:"140px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",marginTop:"10px",cursor:"pointer" }}>{item.name}
                    </div>
                </Col>
            ))
        :null
        return(
            <div>
                {
                    createPlaylist ?
                        <div >
                            <div style={{ fontSize:"20px",color:"#000",paddingBottom:"10px",borderBottom:"2px solid #C20C0C" }}>
                                <span>{this.props.nickname}</span>
                                <span>创建的歌单</span>
                                <span>({createPlaylist.length})</span>
                            </div>
                            <Row gutter={34} style={{ display: 'flex',flexDirection: 'row', justifyContent: 'flex-start', flexWrap:'wrap'}} > 
                                { renderCreatePlaylist }   
                            </Row>
                        </div>
                    :null
                }
                {
                    storePlaylist ?
                        <div>
                            <div style={{ fontSize:"20px",color:"#000",paddingBottom:"10px",borderBottom:"2px solid #C20C0C",marginTop:"50px" }}>
                                <span>{this.props.nickname}</span>
                                <span>收藏的歌单</span>
                                <span>({storePlaylist.length})</span>
                            </div>
                            <Row gutter={34} style={{ display: 'flex',flexDirection: 'row', justifyContent: 'flex-start', flexWrap:'wrap'}} > 
                                {renderStorePlaylist} 
                            </Row>
                        </div>
                    :null
                }
            </div>
        )
    }
}
export default  withRouter(UserHomePlayList)