import React, { Component } from 'react';
import { Row,Col,Spin } from 'antd'
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom'
import { startPlaySong} from '../common/tools'

import SingerSong from './singerSong'
import Artists from './artists'
import Album from './album'
import Video from './video'
import Lyrics from './lyrics';
import Playlist from './playlist'
import DjRadios from './djRadios'
import User from './user'

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            str:"",
        }
    }
    componentDidMount(){
        this.search = decodeURIComponent(this.props.location.search)
        /*
        this.search.replace("?","").split("&").map( (item,index)=>{
            if(/^s=/.test(item)){
                this.keyword = item.replace("s=","")
                
            }else if(/^type=/.test(item)){
                this.type=item.replace("type=","")
                
            }
            
        })
        */
       let parameters = this.search.replace("?","").split("&")
       for( let item of parameters){
            if(/^s=/.test(item)){
                this.keyword = item.replace("s=","")
                
            }else if(/^type=/.test(item)){
                this.type=item.replace("type=","")
            }
       }
        if(this.keyword){
            this.props.searchDataFunc(this.keyword,this.type)
        }
        //设置url监听函数
        this.props.history.listen( route=>{
            if( route ){
                this.search = route.search
                /*
                this.search.replace("?","").split("&").map( (item,index)=>{
                    if(/^s=/.test(item)){
                        this.keyword = item.replace("s=","")
                    }else if(/^type=/.test(item)){
                        this.type=item.replace("type=","")
                    }
                })
                */
                const url_parameter =  this.search.replace("?","").split("&")
                for( let item of url_parameter){
                    if(/^s=/.test(item)){
                        this.keyword = item.replace("s=","")
                    }else if(/^type=/.test(item)){
                        this.type=item.replace("type=","")
                    }
                }
                if(this.keyword){
                    this.props.searchDataFunc(this.keyword,this.type)
                }
            }
        })
    }

    handlePagination=(page,pageSize)=>{
        this.props.searchDataFunc(this.keyword,this.type,page,30)
            
    }
    
    render(){
        const styles = {
            body:{
                backgroundColor:"#F5F5F5",
                minWidth:"1200px" 
            },
            content: {
                marginTop:"30px", 
                backgroundColor:"#fff",
                padding:"30px",
                border:"1px solid #D3D3D3",
                minWidth:"940px" 
            }
        }
        const searchData = this.props.searchData
        return(
            <Row style={ styles.body}>
                <Col span={4} />
                <Col span={16} style={ styles.content}>
                    {
                        (()=>{ 
                            switch(this.type){
                                case '1':
                                    return  <SingerSong searchData={searchData} keyword={this.keyword} type={ this.type  }  handlePagination={ (page,pageSize)=>this.handlePagination(page,pageSize) } startPlaySongMain={(id)=>startPlaySong(id)} />
                                case '100':
                                    return  <Artists  searchData={searchData} keyword={this.keyword} type={ this.type  } />
                                case '10':
                                    return <Album  searchData={searchData} keyword={this.keyword} type={ this.type  }  handlePagination={ (page,pageSize)=>this.handlePagination(page,pageSize) } />
                                case '1014':
                                    return <Video  searchData={searchData} keyword={this.keyword} type={ this.type  } handlePagination={ (page,pageSize)=>this.handlePagination(page,pageSize) }/>
                                case '1006':
                                    return <Lyrics  searchData={searchData} keyword={this.keyword} type={ this.type  } handlePagination={ (page,pageSize)=>this.handlePagination(page,pageSize) }  startPlaySongMain={(id)=>startPlaySong(id)}/>
                                case '1000':
                                    return <Playlist  searchData={searchData} keyword={this.keyword} type={ this.type  } handlePagination={ (page,pageSize)=>this.handlePagination(page,pageSize) } startPlaySongMain={(id)=>startPlaySong(id)}/>
                                case '1009':
                                    return <DjRadios  searchData={searchData} keyword={this.keyword} type={ this.type  } handlePagination={ (page,pageSize)=>this.handlePagination(page,pageSize) }/>
                                case '1002':
                                    return <User  searchData={searchData} keyword={this.keyword} type={ this.type  } handlePagination={ (page,pageSize)=>this.handlePagination(page,pageSize) }/>
                                default:
                                    return <Spin/>
                            }
                        })()
                    }
                </Col>
                <Col span={4} />
            </Row>
        )
    }
}
export default withRouter(Search)