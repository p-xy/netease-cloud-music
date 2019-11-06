import React, { Component } from 'react';
import { Row,Col } from 'antd'
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom'
import { formatYearMonthDate } from '../../common/tools';

class AllAlbum extends Component {
    render(){
        const styles = {
            wrap:{
                marginBottom:"20px"
            },
            img:{
                width:"120px",
                height:"120px",
                cursor:"pointer" 
            },
            name:{
                width:"100px",
                overflow:"hidden",
                textOverflow:"ellipsis",
                whiteSpace:"nowrap",
                cursor:"pointer" 
            }

        }
        return(
            <Row gutter={20}>
                {
                    this.props.hotAlbums.map( (item,index)=>(
                        <Col span={6} style={ styles.wrap }>
                            <img 
                                style={ styles.img } 
                                src={item.picUrl} alt=''
                                onClick={ ()=>this.props.history.push(`/album?id=${item.id}`) } />
                           
                            <div 
                                onClick={ ()=>this.props.history.push(`/album?id=${item.id}`) }
                                style={ styles.name}>
                                {item.name}
                            </div>
                            <div>
                                { formatYearMonthDate(item.publishTime) }
                            </div>
                        </Col>
                    ))
                }
            </Row>
        )
    }
}
export default  withRouter(AllAlbum)