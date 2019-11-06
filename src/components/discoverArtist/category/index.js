import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Row,Col,Icon } from 'antd';
import 'antd/dist/antd.css'

class Category extends Component {
    constructor(props){
        super(props)
        this.title = {
            '1001': '华语男歌手',
            '1002': '华语女歌手',
            '1003': '华语组合/乐队',
            '2001': '欧美男歌手',
            '2002': '欧美女歌手',
            '2003': '欧美组合/乐队',
            '6001': '日本男歌手',
            '6002': '日本女歌手',
            '6003': '日本组合/乐队',
            '7001': '韩国男歌手',
            '7002': '韩国女歌手',
            '7003': '韩国组合/乐队',
            '4001': '其他男歌手',
            '4002': '其他女歌手',
            '4003': '其他组合/乐队'
        };
        this.alpha = [
            { text:'热门',value:'0' },
            { text:'A',value:'A' },
            { text:'B',value:'B' },
            { text:'C',value:'C' },
            { text:'D',value:'D' },
            { text:'E',value:'E' },
            { text:'F',value:'F' },
            { text:'H',value:'G' },
            { text:'G',value:'H' },
            { text:'I',value:'I' },
            { text:'J',value:'J' },
            { text:'K',value:'K' },
            { text:'L',value:'L' },
            { text:'M',value:'M' },
            { text:'N',value:'N' },
            { text:'O',value:'O' },
            { text:'P',value:'P' },
            { text:'Q',value:'Q' },
            { text:'R',value:'R' },
            { text:'S',value:'S' },
            { text:'T',value:'T' },
            { text:'U',value:'U' },
            { text:'V',value:'V' },
            { text:'W',value:'W' },
            { text:'X',value:'X' },
            { text:'Y',value:'Y' },
            { text:'Z',value:'Z' },
            { text:'其他',value:'1' },

        ]
       
    }
    render(){
        const category_id = this.props.location.search.match('cat=([0-9]+)')[1] 
        const catSingerData = this.props.catSingerData ? this.props.catSingerData.artists : []
        const renderCatSinger_10 = catSingerData && catSingerData.slice(0,10).map( (item,index)=>(
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
        ))
        const renderCatSinger_90 = catSingerData && catSingerData.slice(10,).map( (item,index)=>(
            <div style={{ width:'140px',lineHeight:'30px',overflow:'hidden',textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <span onClick={ ()=>this.props.history.push(`/artist?id=${item.id}`)} style={{color:'#000000',fontSize:'12px',cursor:'pointer'}}> {item.name}</span>
                {
                    item.accountId ?
                        <span onClick={ ()=>this.props.history.push(`/user/home?id=${item.accountId}`)} style={{color:'#c20c0c',cursor:'pointer'}}> <Icon type='user'> </Icon></span>
                    : null
                }
            </div>
        ))
        const renderAlpha = this.alpha.map( (item,index) =>{
            const url_parameter = (item.value==='1' || item.value==='0') ? `?cat=${category_id}` :`?cat=${category_id}&initial=${item.value}` 
            return(
                <div style={ this.props.location.search===`?cat=${category_id}&initial=${item.value}`? 
                        {cursor:'pointer',color:'white',background:'#c20c0c',padding:'0px 5px' }:{cursor:'pointer',color:'#000000'}} 
                        onClick={ ()=>{ 
                                this.props.catSingerDataFunc(url_parameter);
                                this.props.history.push(`/discover/artist/list?cat=${category_id}&initial=${item.value}`)
                            }} >
                            
                    {item.text}  
                </div>
            )   
        });
        return(
            <div>
                <Row  style={{marginBottom:'20px',marginTop:'80px',borderBottom:'2px solid #c20c0c'}}>
                    <Col span={20} style={{lineHeight:'50px',textAlign:'left',fontSize:'24px',color:'#333333'}}> { this.title[category_id]}</Col> 
                </Row>
                <div style={{ display:'flex', flexDirection: 'row',  justifyContent: 'space-between',  flexWrap: 'wrap',marginBottom:'20px'}}>
                    { renderAlpha }
                </div>
                <div style={{ display:'flex', flexDirection: 'row',  justifyContent: 'space-between',  flexWrap: 'wrap'}}>
                    { renderCatSinger_10 }
                </div>
                <div style={{border:'1px dotted #D3D3D3',marginBottom:'10px'}} ></div>
                <div style={{ display:'flex', flexDirection: 'row',  justifyContent: 'space-between',  flexWrap: 'wrap'}}>
                    {renderCatSinger_90}
                </div>
                <div style={{height:'50px'}}></div>
            </div>

        )
    }
}

export default withRouter( Category );         
       
      