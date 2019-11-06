import React,{Component} from 'react';
import { NavLink,withRouter } from 'react-router-dom';
import { Row,Col, Tag,Input } from 'antd';
import 'antd/dist/antd.css';
import LoginMenu from './loginMenu'
import NotLoginMenu from './notLoginMenu'
import './index.scss'
import docCookies from '../../../../api/docCookies';
import axios from 'axios'
import { loginStatusRefresh } from '../../../../api';

class TopPart extends Component {
    constructor(props){
        super(props);
        this.state={
            logined:false
        }
    }
    componentDidMount(){
            loginStatusRefresh().then( (res)=>{
                if(res.data.code===200){
                    axios.get('http://localhost:3000/login/status').then( (res)=>{
                        if(res.data.code)
                        this.props.loginDataFunc(res.data)
                    }) 
                }
            });  
    }
    handleLogin=(boo)=>{
        if(boo) {
            loginStatusRefresh().then( (res)=>{
                if(res.data.code===200){
                    axios.get('http://localhost:3000/login/status',{ withCredentials: true }).then( (res)=>{
                        if(res.data.code)
                        this.props.loginDataFunc(res.data)
                    }) 
                }
            })
        }
        this.setState({ logined:boo })
        this.forceUpdate();
    }
    render(){
        let getItem = docCookies.getItem;
        //获取登录凭证
        let loginCertificate = getItem("__csrf");
        const  Search  = Input.Search;
        return (
            <div className='topPart-wrapper'>
                <Row gutter={30} >
                    <Col  span={4}>
                        <NavLink to='/' >
                            <div className='topPart-logo'>  &nbsp;   </div>
                        </NavLink>
                    </Col>
                    <Col span={10}>
                        <Row className='topPart-selectList' >
                            <Col span={4}>
                                  <NavLink exact  to='/'>发现音乐</NavLink>
                            </Col>
                            <Col span={4}>
                                 <NavLink exact  to='/my'>我的音乐</NavLink>
                            </Col>
                            <Col span={4}>
                                  <NavLink exact  to='/friend'>朋友</NavLink>
                            </Col>
                            <Col span={4}>
                                  <a href='https://music.163.com/store/product' target='_blank'  rel="noopener noreferrer"> 商城 </a>
                            </Col>
                            <Col span={4}>
                                  <a href='https://music.163.com/nmusician/web/index#/' target='_blank'  rel="noopener noreferrer">音乐人</a>
                            </Col>
                            <Col span={4} style={{ position:"relative" }}>
                            <a href='https://music.163.com/#/download' target='_blank'  rel="noopener noreferrer">下载客户端</a>
                                  <Tag style={{ position:"absolute",top:"15px"   }} color="#DD0D0D"> HOT </Tag>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={10}>
                        <Row gutter={20}>
                            <Col span={10}style={{ textAlign:"right" }} >
                                <Search 
                                    placeholder='音乐/视频/电台/用户'
                                    style={{
                                        width:"158px",
                                        height:"32px",
                                        borderRadius:"50px"
                                    }}
                                    onSearch={ (value,event)=> value ? this.props.history.replace(`/search?s=${value}&type=1`) :null }
                                />
                            </Col>
                            <Col span={6}>
                                <div className='creatorCenter'>创作者中心</div>
                            </Col>
                            <Col span={6}>
                                {
                                    loginCertificate?<LoginMenu loginData={this.props.loginData}  handleLogin={(boo)=>this.handleLogin(boo)}/>:<NotLoginMenu  handleLogin={(boo)=>this.handleLogin(boo)} />
                                }

                                {/* <Avatar icon='user' />
                                <Icon type="caret-down"  style={{  fontSize:"20px",marginLeft:"10px",marginTop:"10px",color:"#454545" }}/> */}
                                
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* forkme github */}
                <div>
                    <a href='https://github.com/xiaoyupang/netease-cloud-music' target='_blank' rel="noopener noreferrer">< div className='forkme'> &nbsp;  </div></a>    
                </div>
            </div>
        )
    }
}
export default withRouter(TopPart)
