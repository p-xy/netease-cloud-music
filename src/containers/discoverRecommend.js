import { connect } from 'react-redux';
import Index from '../components/discoverRecommend'
import {
    hotCommendAction, newAlbumAction, topListAction,
    newListAction, originalListAction, enteringSingerAction,
    hotCommendTagsAction, bannerAction }
    from '../actions/discoverRecommend'


const mapStateToProps = (state,ownProps) =>{
    return {
        banner: state.banner.data || [],
        hotCommend: state.hotCommend.data,
        newAlbum: state.newAlbumReducer.data||{},
        topList: state.topListReducer.data || {},
        newList: state.newListReducer.data||{},
        originalList:  state.originalListReducer.data||{},
        enteringSinger: state.enteringSingerReducer.data||{},
        hotCommendTags: state.hotCommendTagsReducer.data||{},
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{   
    return {
        //轮播图
        bannerActionFunc: ()=> {
            dispatch( bannerAction() )
        },
        hotCommendFunc:()=>{
        //请求热门推荐中的歌单
           dispatch( hotCommendAction())
        },
        //请求新碟上架的数据
        newDishShelfFunc: ()=>{
            dispatch(newAlbumAction())
        } ,
        // 榜单云音乐的飙升榜
        topListFunc:()=>{
            dispatch(topListAction())
        },
        //云音乐新歌榜 
        newListFunc:()=>{
            dispatch( newListAction() )
        },
        //原创歌曲榜
        originalListFunc:()=>{
            dispatch(originalListAction())
        },
        //获取入驻歌手数据 
        entertingSingerFunc:()=>{
            dispatch(enteringSingerAction())
        },
        //获取热门推荐的标签
        hotCommendTagsFunc:()=>{
            dispatch(hotCommendTagsAction())
        }      
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Index);

