import React, { Component } from 'react';
import { Row,Col,Icon } from 'antd';
import "antd/dist/antd.css";
import  { withRouter } from 'react-router'

class SimiSong extends Component{
     // eslint-disable-next-line no-useless-constructor
     constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{marginBottom:'20px'}}>
                <div style={{ marginBottom:'20px',paddingBottom:'10px',borderBottom:'1px solid #D3D3D3',fontSize:'12px',fontWeight:'bold',color:'#333333'}}>
                    <span> 相似歌曲 </span>
                </div>
                {
                    this.props.similarSongData.map( (item,index)=>(
                        <Row key={item.name} style={{ height:"32px",marginTop:"20px",marginBottom:"10px" }}>
                            <Col span={18}>
                                <div 
                                    style={{ fontSize:"12px",color:"#333333",cursor:'pointer',overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}
                                    onClick={ ()=>this.props.handleNewSong(`?id=${item.id}`)}> {item.name}
                                </div>
                                <div 
                                    style={{ fontSize:"12px",color:"#A3A3A3" ,cursor:'pointer',overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}
                                    onClick={ ()=>this.props.history.push(`/artist?id=${item.artists[0].id}`)}>{item.artists[0].name}
                                </div>
                            </Col>
                            <Col span={6} style={{ marginTop:"10px",textAlign:'right' }}>
                                <Icon type="caret-right" />
                                <Icon type="plus" /> 
                            </Col>
                        </Row> 
                    ))
                }         
            
            </div>
        )
    }
}
export default withRouter(SimiSong)