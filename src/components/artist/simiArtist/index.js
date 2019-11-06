import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Row,Col } from 'antd'
import 'antd/dist/antd.css' 


class SimiArtist extends Component{
    render(){
        const styles = {
            wrap:{
                marginBottom:'40px'
            },
            title:{
                fontSize:'12px',
                fontWeight:'bold',
                color:'#333',
                borderBottom:'1px solid #D3D3D3',
                paddingBottom:'5px',
                marginBottom:'10px'
            },
            img:{
                width:'50px',
                height:'50px',
                marginTop:'10px',
                cursor:'pointer'
            },
            name:{
                width:'50px',
                color:'#333333',
                fontSize:'12px',
                cursor:'pointer',
                textAlign:'center',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                padding:'5px 0px'
            }
        }
        return(
            <div style={ styles.wrap}>
                <Row style={ styles.title } > 相似歌手  </Row>
                <Row gutter={10}>
                    {
                        this.props.simiArtistData.artists.slice(0,6).map( (item,index)=>(
                            <Col span={8}>
                                <img 
                                    src={ item.img1v1Url }
                                    onClick={ ()=>this.props.handleNewArtist(item.id) }
                                    style={ styles.img }
                                    alt='歌手头像'
                                    />
                                <div 
                                    style={ styles.name }
                                    onClick={ ()=>this.props.handleNewArtist(item.id) }> {item.name}
                                </div>
                            </Col>
                        ))
                    }
                    </Row>
            </div>
        )
    }
}

export default withRouter(SimiArtist)