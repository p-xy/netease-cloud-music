import React, { Component } from 'react'
import { Row,Col } from 'antd';
import 'antd/dist/antd.css'
import { withRouter } from 'react-router-dom'
import './index.scss'

class HotDj extends Component {
    //由于入门主播这个接口没有,但是只有某个dj的详细信息,用this.state去模拟数据
    constructor(props){
        super(props);
        this.state={
            redenrHotDjData:[
                {
                    picUrl: "http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg",
                    name:"陈立",
                    position:"心理学家、美食家陈立教授",
                    url:"/user/home?id=278438485"
                },
                {
                    picUrl: "http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg",
                    name:"DJ艳秋",
                    position:"著名音乐节目主持人",
                    url:"/user/home?id=91239965",
                },
                {
                    picUrl: "http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg",
                    name:"国家大剧院古典音乐频道",
                    position:"国家大剧院古典音乐官方",
                    url:"/user/home?id=324314596",
                },
                {
                    picUrl:  "http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg",
                    name:"谢谢收听",
                    position:"南京电台主持人王馨",
                    url:"/user/home?id=1611157",
                },
                {
                    picUrl: "http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg",
                    name:"DJ晓苏",
                    position:"独立DJ，CRI环球旅游广播特邀DJ",
                    url:"/user/home?id=2313954"
                }
            ]
        }
    }

    handleClick=(url)=>{
        this.props.history.push(url)
    }

    render(){
        return(
            <div className='hotdj'>
                <div className='hotdj-title' >热门主播</div>
                {
                    this.state.redenrHotDjData.map( (item,index)=>(
                        <Row key={item.name}>
                            <Col span={6} >
                                <img className='hotdj-img' src={item.picUrl} alt="" onClick={ ()=>this.handleClick(item.url) }/>
                            </Col>
                            <Col span={18}>
                                <div className='hotdj-name' onClick={ ()=>this.handleClick(item.url) } >{item.name}</div>
                                <span className='hotdj-icon'></span>
                                <div className='hotdj-position'>{item.position}</div>
                            </Col>
                        </Row>
                    ))
                }
            </div>
        )
    }
}
export default  withRouter(HotDj)