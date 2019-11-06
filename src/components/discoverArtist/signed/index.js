import React, { Component } from 'react'
import { Row,Col,Icon } from 'antd';
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
class Signed extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state = {
            showMore: false
        }
    }
    render(){
        const enterSingerData = this.props.enterSingerData || []
        const renderEnterSinger_50 = enterSingerData.artists ? enterSingerData.artists.slice(0,50).map( (item,index) =>(
            <div style={{marginBottom:'20px'}}>
                <img onClick={ ()=>this.props.history.push(`/artist?id=${item.id}`)} style={{ width:'140px',height:'140px',cursor:'pointer'}} src={ item.img1v1Url } alt=''></img>
                <Row style={{lineHeight:"30px"}}> 
                    <Col span={22} style={{ fontSize:'12px',color:'#000000',cursor:'pointer'}}onClick={ ()=>this.props.history.push(`/artist?id=${item.id}`)}> { item.name}</Col>
                    { 
                        item.accountId ?
                            <Col span={2} style={{textAlign:'right',color:'#c20c0c',cursor:'pointer'}}onClick={ ()=>this.props.history.push(`/user/home?id=${item.accountId}`)}> 
                                <Icon type='user'></Icon>
                            </Col>
                        : null
                    }
                </Row>
            </div>
        )):null
        const renderEnterSinger_100 = enterSingerData.artists ? enterSingerData.artists.slice(50,).map( (item,index) =>(
            <div style={{marginBottom:'20px'}}>
                <img onClick={ ()=>this.props.history.push(`/artist?id=${item.id}`)} style={{ width:'140px',height:'140px',cursor:'pointer'}} src={ item.img1v1Url } alt=''></img>
                <Row style={{lineHeight:"30px"}}> 
                    <Col span={22} style={{ fontSize:'12px',color:'#000000',cursor:'pointer'}}onClick={ ()=>this.props.history.push(`/artist?id=${item.id}`)}> { item.name}</Col>
                    { 
                        item.accountId ?
                            <Col span={2} style={{textAlign:'right',color:'#c20c0c',cursor:'pointer'}}onClick={ ()=>this.props.history.push(`/user/home?id=${item.accountId}`)}> 
                                <Icon type='user'></Icon>
                            </Col>
                        : null
                    }
                </Row>
            </div>
        )):null
        return(
            <div>
                <Row  style={{marginBottom:'20px',marginTop:'80px',borderBottom:'2px solid #c20c0c'}}>
                   <Col span={20} style={{lineHeight:'50px',textAlign:'left',fontSize:'24px',color:'#333333'}}> 入驻歌手</Col> 
                </Row>
                <div style={{ display:'flex', flexDirection: 'row',  justifyContent: 'space-between',  flexWrap: 'wrap'}}>
                    { renderEnterSinger_50 }
                </div>
                <div style={{ display:'flex', flexDirection: 'row',  justifyContent: 'space-between',  flexWrap: 'wrap'}}>
                {
                    this.state.showMore ? renderEnterSinger_100 :
                        <div style={{ margin:'auto',cursor:'pointer',textAlign:'center',fontSize:'16px',color:'#000000'}}onClick={ ()=>this.setState({showMore: true})}>
                            点击加载更多...
                        </div>
                }
                </div>
                <div style={{height:'50px'}}></div>
            </div>

        )
    }
}

export default withRouter( Signed );