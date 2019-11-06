import React, { Component } from 'react'
import { Button,Icon,Row,Col } from 'antd';
import { withRouter} from 'react-router-dom'
import 'antd/dist/antd.css';
import './index.scss'

class SelectTags extends Component {
    constructor(props){
        super(props);
        this.state={
            icons:[
                <Icon type="global" />,
                <Icon type="database" />,
                <Icon type="coffee" />,
                <Icon type="smile" />,
                <Icon type="tags" />
            ]
        }
    }
    //点击标签刷新页面
    handleClick=(newTag)=>{
        if(newTag){
            this.props.history.push(`/discover/playlist?cat=${newTag}`)
            this.props.handleNewTagContent( newTag )
        }else{
            this.props.history.push('/discover/playlist')
            this.props.handleNewTagContent( '全部' )
        }
    }
   
    render() {
    //种类分类
    const categories = this.props.selectTagsData.categories ? this.props.selectTagsData.categories :null;
    //种类分类的菜单
    const sub = this.props.selectTagsData.sub || this.props.selectTagsData.length >0 ? this.props.selectTagsData.sub:[];
    //将categories对象转化为数组
    let categoriesArr = [];
    for(let index in categories) {
      categoriesArr.push(categories[index])
    }
    //将sub分组
    let subArr = [ [],[],[],[],[] ];
    sub.forEach( (item,index)=>{
        switch(item.category) {
            case 0:
                subArr[0].push(item)
                break
            case 1:
                subArr[1].push(item)
                break
            case 2 :
                subArr[2].push(item)
                break
            case 3 :
                subArr[3].push(item)
                break
            case 4 :
                subArr[4].push(item)
                break
            default:
                break
        }
    })
    //渲染分类
    const renderCategories = categoriesArr && categoriesArr.length>0 ?categoriesArr.map( (item,index)=>{
      return (
        <div key={item}>
          <Row style={{ marginBottom:"30px" }}>
              <Col span={4} style={{ textAlign:"center" }}>
                <div>
                    <span style={{ fontSize:"20px",verticalAlign:"middle",marginRight:"10px" }}>{this.state.icons[index]}</span>
                    <span style={{ color:"#515151",fontWeight:"bold",verticalAlign:"middle" }}>{item}</span>
                </div>
              </Col>
              <Col span={20}>
                <div>
                  {
                    subArr[index].map( (item,index)=>{
                      return (
                        <span key={item.name} style={{ 
                            lineHeight:"20px",height:"20px",paddingLeft:"10px",paddingRight:"10px",
                            borderRight:"1px solid #dddddd",
                             }}>
                             <span  onClick={ ()=>{ this.handleClick(item.name) } } style={{ color:"#333333",fontSize:"12px",cursor:"pointer" }} >
                                  {item.name}
                             </span>
                        </span>
                      )
                    } )
                  }
                 </div>
              </Col>
          </Row>
        </div>
      )
    } ):null;

    return(
        <div  className='select-tag' >
            <div className='select-tag-all'>
                <Button onClick={ ()=>this.handleClick() } style={{ backgroundColor:"#F6F6F6" }} >全部风格</Button>
            </div>
            <div> {renderCategories } </div>
      </div>
    )
  }
}
export default withRouter(SelectTags)