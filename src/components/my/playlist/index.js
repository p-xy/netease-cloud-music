import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import { Row,Col } from 'antd'
import 'antd/dist/antd.css'

class Playlist extends Component{
    render(){
        const styles = {
            content:{
                cursor:'pointer',
                paddingTop:'10px',
                
            },
            img: {
                width:'40px',
                height:'40px',
            },
            playlist_name:{
                overflow:'hidden',
                textOverflow:'ellipsis',
                whiteSpace:'nowrap',
                fontSize:'12px',
                color:'#000000',
                marginLeft:'50px',
            },
            song_total:{
                fontSize:'12px',
                color:'#999999',
                marginLeft:'50px',
            }
        }
        const playlistData =  this.props.playlistData.playlist
        return(
            <div>
                {
                    playlistData.map( (item,index)=>(
                        <Row key={item+index} style={styles.content} onClick={ ()=>this.props.getPlaylistContentData(item.id) }>
                            <Col span={1} >
                                <img style={ styles.img} src={ item.coverImgUrl } alt=''/>
                            </Col>
                            <Col>
                                <Row style={ styles.playlist_name} >
                                    { item.name}
                                </Row>
                                <Row style={ styles.song_total}>
                                    { item.trackCount}首
                                </Row>
                            </Col>
                        </Row>
                    ))
                }
            </div>
        )
    }
}
export default withRouter(Playlist)