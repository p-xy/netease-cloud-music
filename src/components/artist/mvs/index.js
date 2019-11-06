import React, { Component } from 'react';
import { Row,Col } from 'antd'
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css'

class Mvs extends Component {
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
                    this.props.singerMvsData.map( (item,index)=>(
                        <Col span={6} style={ styles.wrap}>
                            <img 
                                onClick={ ()=>this.props.history.push(`/mv?id=${item.id}`)}
                                style={ styles.img } 
                                src={item.imgurl} alt=''/>
                            <div 
                                onClick={ ()=>this.props.history.push(`/mv?id=${item.id}`)}
                                style={ styles.name }>
                                {item.name}
                            </div>
                        </Col>
                    ))
                }
            </Row>
        )
    }
}

export default withRouter(Mvs)