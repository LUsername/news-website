import React,{Component} from 'react';
import { List } from 'antd';
import axios from 'axios';

class NewList extends Component{

    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    render(){
        return(
            <List
                style={{background:'#fff'}}
                bordered
                dataSource={this.state.data}
                renderItem={item => <List.Item>{item.title}</List.Item>}
            />
        )
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/list.json?id='+id)
        .then((res)=>{
            this.setState({
                data:res.data.data
            });
        })
    }
}

export default NewList;