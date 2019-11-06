import React, { Component } from 'react';
import { Row,Col,Button } from 'antd'
import 'antd/dist/antd.css'
import { formatYearMonthDate } from '../../common/tools'
import { withRouter } from 'react-router-dom'

class Info extends Component{
    dumpUser=()=>{
        this.props.history.push(`/user/home?id=${this.props.userId}`)
    }
    render(){
        const  playlistContent = this.props.playlistContent
        const styles = {
            body:{
                paddingTop:"70px"
            },
            img:{
                width:"208px",
                height:"208px",
                border:"3px solid #ccc",
                marginLeft:'30px' 
            },
            text_wrap:{
                paddingLeft:'70px'
            },
            playlist_name:{
                color:"#000",
                fontSize:"20px",
                paddingLeft:'10px'
            },
            creator:{
                marginTop:"15px"
            },
            avator:{
                width:"35px",
                height:"35px",
                cursor:"pointer"
            },
            nickname:{
                color:"#1A7BC6",
                cursor:"pointer",
                paddingLeft:'10px'
            },
            time:{
                color:"#ACACAC",
                paddingLeft:'10px'
            }


        }
        return(
            <Row style={ styles.body}>
                <Col span={6}>
                    <img src={ playlistContent.coverImgUrl} style={ styles.img } alt=''/>
                </Col>
                <Col span={18} style={ styles.text_wrap}>
                    <Row>
                        <Button type='primary'  >歌单</Button>
                        <span style={ styles.playlist_name }>{ playlistContent.name}</span>
                    </Row>
                    <Row style={ styles.creator }> 
                        <img 
                            style={ styles.avator } 
                            alt='' 
                            src={ playlistContent.creator.avatarUrl }
                            onClick={ ()=>this.props.history.push(`/user/home?id=${playlistContent.creator.userId }`)}
                            />
                        <span 
                            style={ styles.nickname} 
                            onClick={ ()=>this.props.history.push(`/user/home?id=${playlistContent.creator.userId }`)}>
                            { playlistContent.creator.nickname}
                        </span>
                        <span style={styles.time}>{formatYearMonthDate( playlistContent.createTime)}创建</span>
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default withRouter(Info)