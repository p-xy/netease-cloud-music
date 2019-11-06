import React, { Component } from 'react'
import { Row,Col,Empty,Spin} from 'antd'
import 'antd/dist/antd.css'
import Playlist from './playlist'
import Info from './Info'
import Songlist from './songlist'

import docCookies from '../../api/docCookies'

class My extends Component {
    componentDidMount(){
        this.csrf = docCookies.getItem("__csrf")
        if(this.csrf){
            this.props.getMysongData() 
        }
    }
    render(){
        const styles = {
            body: { 
                backgroundColor:"#F5F5F5",
                minWidth:'1200px'
            },
            content_wrap: {
                borderLeft:'1px solid #D3D3D3',
                borderRight:'1px solid #D3D3D3',
                backgroundColor:"#fff",
                minWidth:'940px'
               
            },
            playlist:{
                paddingLeft: '20px',
                paddingTop:'50px',
            },
            content:{
                borderLeft:'1px solid #D3D3D3',
            },
            empty:{ 
                marginTop:"30px",
                paddingTop:"50px",
                paddingBottom:"50px" 
            }
        }
        let csrf = docCookies.getItem("__csrf")
        return(
            <div>
                {
                    csrf ?
                        <div>
                            {
                                this.props.getLoginPlaylistInfo && this.props.getLoginPlaylistContent ?
                                    <Row style={ styles.body}>
                                        <Col span={3}/>
                                        <Col span={18} style={ styles.content_wrap }>
                                            <Row>
                                                <Col span={6} style={ styles.playlist }>
                                                    <Playlist 
                                                        playlistData={ this.props.getLoginPlaylistInfo }  
                                                        getPlaylistContentData={ this.props.getPlaylistContentData} />
                                                </Col>
                                                
                                                <Col span={18} style={ styles.content }>
                                                    <Info playlistContent={this.props.getLoginPlaylistContent.playlist} />
                                                    <Songlist getLoginPlaylistContent={this.props.getLoginPlaylistContent} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={3}/>
                                    </Row>
                                :<Spin />
                            }
                        </div>
                    :
                        <div style={ styles.empty} >
                            <Empty  description="请登录,登录可以获取更好的体验" />
                        </div>
                }
            </div>
        )
    }
}
export default My