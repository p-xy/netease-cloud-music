import React, { Component } from 'react'
import { Progress, Button  } from 'antd'
import { Link } from 'react-router-dom'


class Notfound extends Component {
    render() {
        return (
            <div span={24} style={{ textAlign:"center" ,height:'300px', marginTop:'80px'}}>
                <Progress percent={100} type="circle"  format={() => '404'} width={200} status="active" />
                <div  style={{ marginTop:'20px'}}>
                    <Link to='/' >
                        <Button type="primary" > 返回首页 </Button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Notfound;