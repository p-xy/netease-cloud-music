import React,{Component} from 'react'
import OwnComment from './ownComment'
import HotComment from './hotComment'
import NewComment from './newComment'

/*
*评论组件，需要传入两个参数： 评论数据 commentData，分页函数 handlePagination
*/
class Comment extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render(){
        const commentData = this.props.commentData
        const handlePagination = this.props.handlePagination
        return(
            <div>
                {
                    commentData && commentData.total ?
                        <div>
                            <OwnComment commentCount={  commentData.total } />
                            <div>
                                { commentData.hotComments ? <HotComment hotComment={ commentData.hotComments }/> : null }
                                {   
                                    commentData.comments ?
                                        <NewComment 
                                            total={commentData.total} 
                                            handlePagination={ handlePagination } 
                                            comments={ commentData.comments } />  
                                    :null
                                }
                            </div>
                        </div>
                    :<OwnComment commentCount={ 0 } />
                }
            </div>
        ) 
    }
}

export default Comment;