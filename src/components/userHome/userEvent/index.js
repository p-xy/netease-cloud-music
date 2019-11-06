import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row,Col,Spin,Empty } from 'antd';
import 'antd/dist/antd.css'
import Introduction from '../introduction'
import Event from './event'
import UserFollows from './follows'
import UserFans from './fans'

class UserEvent extends Component {
    componentDidMount(){
        this.search = this.props.location.search
        this.id = this.search.match( /\d+/gi).toString()
        this.props.userDetailFunc( this.id)
        this.props.userEventFunc( this.id)
        this.props.userFollowsFunc( this.id)
        this.props.userFansFunc( this.id)
    }
    render(){
        console.log(' this.props.userEventData:', this.props.userFansData )
        return(
            <Row  style={{backgroundColor:"#F5F5F5",minWidth:"1200px"}}>
                <Col span={4} />
                <Col span={16} style={{ backgroundColor:"#fff",borderLeft:"1px solid #D3D3D3",borderRight:"1px solid #D3D3D3",padding:'50px 30px' }}>
                    {
                        this.props.userDetailData ?
                            <div >
                                <Introduction  userDetailData={this.props.userDetailData}/>
                                {
                                    this.props.userEventData ?
                                        <div>
                                            <Row style={{borderBottom:'2px solid #c20c0c',paddingBottom:'5px',fontSize:'20px',color:'#666666'}}>
                                                TA的动态({this.props.userEventData.size})
                                            </Row>
                                            <Row>
                                                <Col span={17} style={{borderRight:'1px solid #D3D3D3',}}>
                                                    {
                                                        this.props.userEventData.size?
                                                            <Event userEventData={this.props.userEventData} />
                                                        :<div style={{ margin:"50px 0px" }}><Empty description="暂时没有动态"/></div>
                                                    }
                                                    
                                                </Col>
                                                <Col span={7} style={{paddingLeft:'20px'}} >
                                                    {
                                                         this.props.userFollowsData && this.props.userFollowsData.follow?
                                                            <UserFollows userFollowsData={this.props.userFollowsData}/>
                                                        :null
                                                    }
                                                    {
                                                        this.props.userFansData && this.props.userFansData.followeds? 
                                                            <UserFans userFansData={this.props.userFansData} />
                                                        :null
                                                    }
                                                </Col>
                                            </Row>
                                        </div>
                                    :<Spin/>
                                }
                            </div>
                        :<Spin style={{minHeight:"400px"}}/>
                   }
                </Col>
                <Col span={4} />
            </Row>
        )
      
    }
    
}
export default withRouter(UserEvent)

