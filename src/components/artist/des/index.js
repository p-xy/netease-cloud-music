import React, { Component } from 'react';

class Des extends Component {
    render() {
        const singerDesData = this.props.singerDesData
        return(
            <div >
                <div style={{ marginTop:"20px",marginBottom:"20px" }}>
                    <div style={{ color:"#333333",fontSize:"20px" }}>
                        简介
                    </div>
                    <div style={{ fontSize:"12px",lineHeight:"24px",textIndent:"20px" }}>
                        { singerDesData.briefDesc }
                    </div>
                </div>
                {
                    singerDesData.introduction&&singerDesData.introduction.map( (item,index)=>(
                        <div  style={{ marginTop:"20px",marginBottom:"20px" }}>
                            <div  style={{ color:"#333333",fontSize:"20px" }}>
                                {
                                    singerDesData.introduction[index].ti
                                }
                            </div>
                            <div
                                dangerouslySetInnerHTML={{ __html:singerDesData.introduction[index].txt.replace(/\n/gi,"<br />") }} 
                                style={{ fontSize:"12px",lineHeight:"24px",textIndent:"20px" }}>
                            
                            </div>
                       </div>
                    ))
                }
                
            </div>
        )
    }
}
export default Des