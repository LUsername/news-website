import React,{Component} from 'react';
import { List } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class NewList extends Component{


    render(){
        return(
            <List
                style={{background:'#fff'}}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        )
    }
}

export default NewList;