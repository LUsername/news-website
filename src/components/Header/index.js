import React,{Component,Fragment} from 'react';
import logo from './logo.png';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './style.css';
import { Menu, Icon } from 'antd';

class AppHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    }

    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/header.json')
        .then((res)=>{
            this.setState({
                list:res.data.data
            })
        });
    }

    getMenuItems(){
        return this.state.list.map(item =>{
            return(
                <Menu.Item key={item.id}>
                    <Link to={`/${item.id}`}>
                        <Icon type={item.icon} />
                        {item.title} 
                    </Link>   
                </Menu.Item>
            )
        })
    }

    render(){
        return(
            <Fragment>
                <Link to='/'>
                    <img src={logo} className="app-header-logo" alt='logo'/>
                </Link>
                <Menu mode="horizontal" className="app-header-menu">
                    {this.getMenuItems()}
                </Menu>
            </Fragment>
        );
    }
}

export default AppHeader;