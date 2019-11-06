import React, { Component } from 'react';
import { Row,Col } from 'antd';
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import './index.scss'
import Category from './category'
import Recommend from './recommend'
import Signed from './signed'

class DiscoverArtists extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
          
        }
    }
    //根据url地址渲染不同页面
    componentDidMount(){
        switch( this.props.location.pathname ){
            case '/discover/artist':
                this.props.enterSingerDataFunc()
                this.props.hotSingerDataFunc()
                break;
            case '/discover/artist/signed':
                this.props.enterSingerDataFunc()
                break;
            default:
                this.props.catSingerDataFunc( this.props.location.search )
        }
    }
    handClickHot = ()=>{
        this.props.history.push('/discover/artist')
        this.props.enterSingerDataFunc()
        this.props.hotSingerDataFunc()
        
    }
    handClikSigned = ()=>{
        this.props.history.push('/discover/artist/signed')
        this.props.enterSingerDataFunc()
       
    }
    handClickCategory = (url_parameter)=>{
        this.props.history.push(`/discover/artist/list${url_parameter}`)
        this.props.catSingerDataFunc( url_parameter )
       
    }
    render(){
        const sidebar_list = [
            {
                title:'推荐', 
                category:[
                    { type:'推荐歌手', url:"/discover/artist/", pathname:'/discover/artist'},
                    { type:'入驻歌手', url:"/discover/artist/signed/", pathname:'/discover/artist/signed'}
                ]
            },
            {
                title:'华语',
                category:[
                    { type:'华语男歌手', url:"/discover/artist/cat?id=1001", url_parameter:'?cat=1001'},
                    { type:'华语女歌手', url:"/discover/artist/cat?id=1002", url_parameter:'?cat=1002'},
                    { type:'华语组合/乐队', url:"/discover/artist/cat?id=1003", url_parameter:'?cat=1003'},
                ]
            },
            {
                title:'欧美',
                category:[
                    { type:'欧美男歌手', url:"/discover/artist/cat?id=2001", url_parameter:'?cat=2001' },
                    { type:'欧美女歌手', url:"/discover/artist/cat?id=2002", url_parameter:'?cat=2002'},
                    { type:'欧美组合/乐队', url:"/discover/artist/cat?id=2003", url_parameter:'?cat=2003'}
                ]
            },
            {
                title:'日本',
                category:[
                    { type:'日本男歌手',url:"/discover/artist/cat?id=6001", url_parameter:'?cat=6001' },
                    { type:'日本女歌手',url:"/discover/artist/cat?id=6002", url_parameter:'?cat=6002' },
                    { type:'日本组合/乐队',url:"/discover/artist/cat?id=6003", url_parameter:'?cat=6003' }
                ]
            },
            {
                title:'韩国',
                category:[
                    { type:'韩国男歌手', url:"/discover/artist/cat?id=7001", url_parameter:'?cat=7001'},
                    { type:'韩国女歌手', url:"/discover/artist/cat?id=7002", url_parameter:'?cat=7002'},
                    { type:'韩国组合/乐队', url:"/discover/artist/cat?id=7003", url_parameter:'?cat=7003'}
                ]
            },
            {
                title:'其他',
                category:[
                    { type:'其他男歌手', url:"/discover/artist/cat?id=4001", url_parameter:'?cat=4001' },
                    { type:'其他女歌手', url:"/discover/artist/cat?id=4002", url_parameter:'?cat=4002' },
                    { type:'其他组合/乐队', url:"/discover/artist/cat?id=4003", url_parameter:'?cat=4003' }
                ]
            }
        ];
        const sidebar = sidebar_list.map( (item,index) =>(
            <div key={ item.title + index } 
                style={{paddingBottom:'10px',borderBottom: index===(sidebar_list.length-1) ? '' : '1px solid #D3D3D3'}}>
                <div style={{padding:'8px',color:'#333333',fontSize:'16px'}}> { item.title }</div>
                {
                    item.category.map( (cat_item, cat_index) =>{
                        if(index === 0){
                            return(
                                <div 
                                    className={this.props.location.pathname===cat_item.pathname?'discoverArtist-siderbar-selected':'discoverArtist-siderbar-select' } 
                                    key={cat_item.type + cat_index}  onClick={ cat_index===0 ? this.handClickHot : this.handClikSigned  } >
                                    <li>
                                        { cat_item.type}
                                    </li>
                                </div>
                            )
                        }else{
                            return(
                                <div 
                                    className={this.props.location.search===cat_item.url_parameter?'discoverArtist-siderbar-selected':'discoverArtist-siderbar-select'}  
                                    key={cat_item.type } onClick={ () =>this.handClickCategory( cat_item.url_parameter) } >
                                    <li >
                                        { cat_item.type }
                                    </li>
                                </div>
                            )
                        } 
                    })
                }
            </div>
        ));
        return(
            <Row  style={{ backgroundColor:"#F5F5F5",minWidth:'1300px' }}>
                <Col span={3}/>
                <Col span={18} >
                    <Row style={{borderLeft:"1px solid #D3D3D3"}}>
                       <Col span={4} style={{ height:"100%",padding:'0px 10px',paddingTop:'60px'}}> { sidebar }</Col>
                       <Col span={20} style={{ backgroundColor:'#fff',padding:'0px 30px',borderRight:'1px solid #D3D3D3',borderLeft:"1px solid #D3D3D3"}}> 
                            { 
                                this.props.location.pathname==='/discover/artist'? 
                                    <Recommend 
                                        enterSingerData={ this.props.enterSingerData }  
                                        hotSingerData={ this.props.hotSingerData }
                                    />
                                : null 
                            } 
                            {
                                this.props.location.pathname==='/discover/artist/signed'?   
                                    <Signed enterSingerData={ this.props.enterSingerData}/>
                                : null
                            }
                            {
                                this.props.location.search ? <Category catSingerDataFunc={this.props.catSingerDataFunc} catSingerData={this.props.catSingerData} /> : null
                            }
                       </Col> 
                    </Row>
                </Col>
                <Col span={3} />
            </Row>
        )
    }
}
export default withRouter( DiscoverArtists )