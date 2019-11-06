import React, { Component } from 'react';
import { Row, Col, Icon, Tag,Spin ,Button} from 'antd';
import 'antd/dist/antd.css';
import { withRouter, Link } from 'react-router-dom'
import {  formatPublishTime } from '../../common/tools'
import './index.scss'

class Head extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render(){
        const realPlaylist = this.props.playlistData ? this.props.playlistData.playlist : {}
        const renderHead = realPlaylist ?
            <Row gutter={20} style={{ paddingTop:'60px'}}>
                <Col span={7}>
                    <img style={{ width:"100%",height:"100%",padding:"3px",border:" 1px solid #EAEAEA" }} src={ realPlaylist.coverImgUrl }  alt="" />
                </Col>
                <Col span={17}>
                    <div  style={{ marginBottom:"10px" }}>
                        <span className='playlist-icon'></span>
                        <span style={{ fontSize:"20px",color:"#000",fontWeight:"normal" }}>{realPlaylist.name}</span>
                    </div>
                    <div style={{ marginBottom:"20px" }}>
                        <img style={{ width:"35px",height:"35px",verticalAlign:"middle",marginRight:"10px" }} src={realPlaylist.creator?realPlaylist.creator.avatarUrl:""} alt="" />
                        <Link style={{ fontSize:"12px" }} to={ `/user/home?id=${realPlaylist.creator?realPlaylist.creator.userId:''} ` }>{realPlaylist.creator?realPlaylist.creator.nickname:""}</Link>
                        <span style={{ marginLeft:"20px",color:"#9D9D9D" }}>{realPlaylist.createTime?formatPublishTime(realPlaylist.createTime):""} 创建</span>
                    </div>
                    <Row gutter={5} style={{marginBottom:"20px",paddingLeft:'10px'  }}>
                        <span  className='button-wrapped'>
                            <Button.Group >
                                <Button type='primary' style={{padding:'3px'}} >
                                    <Icon  type="play-circle"  />
                                    <span>播放</span>
                                </Button>
                                <Button type='primary'style={{padding:'2px'}}   >
                                    <span >+</span>
                                </Button>
                            </Button.Group>
                        </span>
                        <span  className='button-wrapped'>
                            <Button style={{padding:'3px'}}>
                                <Icon  type="file-add"  />
                                <span>({realPlaylist.subscribedCount})</span>
                            </Button>
                        </span>
                        <span  className='button-wrapped'>
                            <Button style={{padding:'3px'}}>
                                <Icon type="share-alt" />
                                <span> ({realPlaylist.shareCount}) </span>
                            </Button>
                        </span>
                        <span  className='button-wrapped'>
                            <Button style={{padding:'3px'}} > 
                                <Icon type="download" />
                                <span>下载</span>
                            </Button>
                        </span>
                        <span  className='button-wrapped'>
                            <Button style={{padding:'3px'}} >
                                <Icon type="edit" />
                                <span>({realPlaylist.commentCount})</span>
                            </Button>
                        </span>
                    </Row>
                    <div >
                        <span style={{ marginRight:"15px" }}>标签:</span>
                        { realPlaylist.tags.map( (item,index)=> <Tag key={item}> {item} </Tag> ) }
                    </div>
                    <div  style={{ fontSize:"12px",marginTop:"15px" }}>
                        <span>介绍:&nbsp;&nbsp;</span>
                        <span dangerouslySetInnerHTML={{ __html:  realPlaylist.description ? realPlaylist.description.replace(/\n/gi,"<br />"): null }}></span>
                    </div>
                </Col>
            </Row>
        : <Spin/>
        return <div> { renderHead } </div>
    }
}
export default withRouter(Head)