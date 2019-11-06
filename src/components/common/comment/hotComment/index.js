import { formatHotCommentPublishTime } from '../../tools'
import React, { Component } from 'react'
import { Row,Col,Icon } from 'antd';
import { Link} from 'react-router-dom'
import 'antd/dist/antd.css'
import './index.scss'

class HotComment extends Component {
    handleClick = (id) =>{ this.props.history.push(`/user/home?id=${id}`)}
    render() {
        const hotComment = this.props.hotComment;
        const realHotComment =  hotComment.length>0? hotComment:[]; 
        const renderHotComment = realHotComment.map( (item,index,arr)=>{
            const str = item.content.replace(/\n\n/g,'<br />');
            //去除最后一条评论的borderbottom
            const showBorder = index === arr.length-1 ? false:true;
            return (
                <div  key={item.content} className={ showBorder? 'hotcomment-showBorder': 'hotcomment-showBorder-no'}>
                    <Row gutter={20}>
                        <Col span={2}>
                            <Link to={ `/user/home?id=${item.user.userId}`}>
                                <img style={{width:"50px" ,height:"50px", cursor: 'pointer'}} 
                                    src={ item.user.avatarUrl } alt="" />
                            </Link>
                        </Col>
                        <Col span={22}>
                            <Link to={ `/user/home?id=${item.user.userId}`} style={{ color:"#1679C5",fontSize:"12px" }}>
                               {item.user.nickname} : 
                            </Link>
                                {/* //对返回的数据中的/n进行替换，替换成<br/>标签 */}
                            <span style={{ fontSize:"12px" }} dangerouslySetInnerHTML={{__html: str}}></span>
                        </Col>
                    </Row>  
                    {
                        item.beReplied && item.beReplied.length>0?
                            <Row>
                                <Col span={2}></Col>  
                                <Col span={22} style={{ backgroundColor:"#F4F4F4",border:"1px solid #DEDEDE",padding:"10px" }} >
                                    <Link to={`/user/home?id=${item.beReplied[0].user.userId?item.beReplied[0].user.userId:null}`} >{item.beReplied[0].user.nickname?item.beReplied[0].user.nickname:null}:</Link>
                                <span>{item.beReplied[0].content?item.beReplied[0].content:null}</span>
                                </Col>  
                             </Row> 
                        :null
                    }
                    <Row>
                        <Col span={2}></Col>
                        <Col span={3} style={{ color:"#9D9D9D",fontSize:"12px" }}>{formatHotCommentPublishTime(item.time)}</Col>
                        <Col span={15}></Col>
                        <Col span={4}>
                            <Icon type="like" theme="twoTone" style={{ fontSize:"16px",marginRight:"10px" }} />
                            <span style={{ marginRight:"10px",cursor:"pointer" }}>({item.likedCount})</span>
                            <span style={{ marginRight:"10px" }}>|</span>
                            <span style={{ fontSize:"12px",cursor:"pointer" }}>回复</span>
                        </Col>

                    </Row>
                </div>
            )
        })
        return (
            <div >
                {
                    hotComment.length>0?
                        <div>
                            <div style={{color:'#000000',fontSize:'12px',fontWeight: 'bold'}}>精彩评论</div>
                            { renderHotComment }
                        </div>
                    :null
                }
            </div>
        )
    }
}
export default  HotComment