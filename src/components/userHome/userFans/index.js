import React, { Component } from 'react';
import {Empty} from 'antd'
import 'antd/dist/antd.css'

class UserFans extends Component {
    render() {
        return (
            <div style={{height:'400px',margin:'auto',fontSize:'24px',padding:'80px'}}>
               <Empty description="这里和关注页面一样，就不重写了"/>
            </div>
        )
    }
}

export default UserFans;