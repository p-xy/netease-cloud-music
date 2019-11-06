import React, { Component } from 'react';
import {withRouter } from 'react-router-dom'
import { Row,Col } from 'antd';
import 'antd/dist/antd.css';
import { formatPublishTime  } from '../../common/tools'

class SingerOtherAlbum extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render(){
        const singerOtherAlbum = this.props.singerOtherAlbum ? this.props.singerOtherAlbum.hotAlbums : [];
        const renderOtherAlbum = singerOtherAlbum ? singerOtherAlbum.map( (item,index)=>{
            const str = formatPublishTime(item.publishTime);
            return(
                    <Row key={item.picId} style={{marginBottom:"15px" }}>
                        <Col span={8} onClick={ ()=>this.props.handleNewAlbum(`?id=${item.id} `) }>
                            {item.picUrl? <img style={{ width:"50px",height:"50px",cursor:'pointer' }} src={item.picUrl} alt="" />:null}
                        </Col>
                        <Col span={16}>
                            <div onClick={ ()=>this.props.handleNewAlbum(`?id=${item.id} `)}
                                style={{ cursor:'pointer',padding:'5px 0px',fontSize:"14px",color:"#000",overflow:'hidden',textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                                {item.name}
                            </div>
                            <div style={{ fontSize:"12px"}}>
                                {
                                    str
                                }
                            </div>
                        </Col>
                </Row>
            )
        } ):null;
        return(
            <div>
                <Row style={{marginBottom:'20px'}}>
                    <Col span={24} style={{ borderBottom:"1px solid #CCCCCC" }}>
                        <div style={{ fontSize:"12px",float:"left",color:"#000",fontWeight:"bold",paddingBottom:"10px" }}>Ta的其他热门专辑</div>
                        <div style={{ float:"right" }}>全部></div>
                    </Col>
                </Row>
                { renderOtherAlbum }
            </div>
        )
    }
}
export default withRouter( SingerOtherAlbum )
