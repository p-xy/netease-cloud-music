import React, { Component } from 'react';
import { Row,Col } from 'antd';
import "antd/dist/antd.css";
import  { withRouter } from 'react-router'

class SimiPlaylist extends Component{
    render(){
        return(
            <div >
                <div style={{ marginBottom:'20px',paddingBottom:'10px',borderBottom:'1px solid #D3D3D3',fontSize:'12px',fontWeight:'bold',color:'#333333'}}>
                    <span> 包含这首歌的歌单 </span>
                </div>
                {
                    this.props.simiPlaylistData.slice(0,4).map( (item,index)=>(
                        <Row  style={{marginBottom:'15px'}}>
                            <Col span={7}>
                                <img 
                                    alt=''
                                    src={ item.coverImgUrl}
                                    style={{width:"50px",height:'50px',cursor:'pointer'}}
                                    onClick={ ()=>this.props.history.push(`/playlist?id=${item.id}`) } />
                            </Col>
                            <Col span={17}>
                                <div 
                                    style={{cursor:'pointer',fontSize:'14px',color:'#000000',overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}
                                    onClick={ ()=>this.props.history.push(`/playlist?id=${item.id}`) }>  {item.name}
                                </div>
                                <div>
                                    <span>by</span>
                                    <span 
                                        style={{cursor:'pointer',color:'#666666',fontSize:'12px',overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}
                                        onClick={ ()=>this.props.history.push(`/user/home?id=${item.creator.userId}`) }>>  {item.creator.nickname} 
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    ))
                }
                
            </div>
        )
    }
}
export default withRouter(SimiPlaylist)