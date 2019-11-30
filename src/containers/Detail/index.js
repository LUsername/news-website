import React,{Component} from 'react';
import { Card } from 'antd';

class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'titls',
            content:'content'
        }
    }
    render(){
        return(
            <Card title={this.state.title}>
                <p>{this.state.content}</p>
            </Card>
        )
    }
}

export default Detail;