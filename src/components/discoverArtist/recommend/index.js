import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row,Col,Icon } from 'antd';
import 'antd/dist/antd.css'

class Recommend extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render(){
     
        const enterSingerData = this.props.enterSingerData || []
        const hotSingerData = this.props.hotSingerData || []
        const renderEnterSinger = enterSingerData.artists ? enterSingerData.artists.slice(0,10).map( (item,index) =>(
            <div key={index + index }style={{marginBottom:'20px'}}>
                <img onClick={ ()=>this.props.history.push(`/artist?id=${item.id}`)} style={{ width:'140px',height:'140px',cursor:'pointer'}} src={ item.img1v1Url } alt=''></img>
                <Row style={{lineHeight:"30px"}}> 
                    <Col span={12} style={{ fontSize:'12px',color:'#000000',cursor:'pointer'}}onClick={ ()=>this.props.history.push(`/artist?id=${item.id}`)}> { item.name}</Col>
                    { 
                        item.accountId ?
                            <Col span={12} style={{textAlign:'right',color:'#c20c0c',cursor:'pointer'}}onClick={ ()=>this.props.history.push(`/user/home?id=${item.accountId}`)}> 
                                <Icon type='user'></Icon>
                            </Col>
                        : null
                    }
                </Row>
            </div>
        )):null
        const renderHotSinger_ten = hotSingerData.artists ? hotSingerData.artists.slice(0,10).map( (item,index)=>(
            <div style={{marginBottom:'20px'}} key={item.id}>
                <img onClick={ ()=>this.props.history.push(`/artist?id=${item.id}`)} style={{ width:'140px',height:'140px',cursor:'pointer'}} src={ item.img1v1Url } alt=''></img>
                <Row style={{lineHeight:"30px"}}> 
                    <Col span={12} style={{ fontSize:'12px',color:'#000000',cursor:'pointer'}}onClick={ ()=>this.props.history.push(`/artist?id=${item.id}`)}> { item.name}</Col>
                    { 
                        item.accountId ?
                            <Col span={12} style={{textAlign:'right',color:'#c20c0c',cursor:'pointer'}}onClick={ ()=>this.props.history.push(`/user/home?id=${item.accountId}`)}> 
                                <Icon type='user'></Icon>
                            </Col>
                        : null
                    }
                </Row>
            </div>
        )):null
        const  renderHotSinger_ninety = hotSingerData.artists ? hotSingerData.artists.slice(10,).map( (item,index)=>(
            <div key={item.id + item.id }style={{ width:'140px',lineHeight:'30px',overflow:'hidden',textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <span onClick={ ()=>this.props.history.push(`/artist?id=${item.id}`)} style={{color:'#000000',fontSize:'12px',cursor:'pointer'}}> {item.name}</span>
                {
                    item.accountId ?
                        <span onClick={ ()=>this.props.history.push(`/user/home?id=${item.accountId}`)} style={{color:'#c20c0c',cursor:'pointer'}}> <Icon type='user'> </Icon></span>
                    : null
                }
            </div>
        )):null
        return(
            <div>
                <Row  style={{marginBottom:'20px',marginTop:'80px',borderBottom:'2px solid #c20c0c'}}>
                   <Col span={20} style={{lineHeight:'50px',textAlign:'left',fontSize:'24px',color:'#333333'}}> 入驻歌手</Col> 
                   <Col span={4} 
                        onClick={ ()=>this.props.history.push(`/discover/artist/signed`) }
                        style={{paddingTop:'15px',textAlign:'right',lineHeight:'32px',fontSize:'12px',color:'#333333',cursor:'pointer'}}> 更多></Col>
                </Row>
                <div style={{ display:'flex', flexDirection: 'row',  justifyContent: 'space-between',  flexWrap: 'wrap'}}>
                    { renderEnterSinger }
                </div>
                <Row style={{marginBottom:'20px',borderBottom:'2px solid #c20c0c'}}> 
                    <Col span={24} style={{lineHeight:'50px',textAlign:'left',fontSize:'24px',color:'#333333'}}> 热门歌手</Col> 
                </Row>
                <div style={{ display:'flex', flexDirection: 'row',  justifyContent: 'space-between',  flexWrap: 'wrap'}}>
                    { renderHotSinger_ten }
                </div>
                <div style={{border:'1px dotted #D3D3D3',marginBottom:'10px'}} ></div>
                <div style={{ display:'flex', flexDirection: 'row',  justifyContent: 'space-between',  flexWrap: 'wrap',marginBottom:'30px'}} >
                    { renderHotSinger_ninety}
                </div>
            </div>
        )
        
    }
    
}

export default withRouter(Recommend);