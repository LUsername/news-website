import React,{Component,Fragment} from 'react';
import logo from './logo.png';
import './style.css';
import { Menu, Icon } from 'antd';

class AppHeader extends Component{
    render(){
        return(
            <Fragment>
                <img src={logo} className="app-header-logo"/>
                <Menu mode="horizontal" className="app-header-menu">
                    <Menu.Item key="mail1">
                        <Icon type="mail" />
                        VOA慢速英语    
                    </Menu.Item>
                    <Menu.Item key="mail2">
                        <Icon type="mail" />
                        VOA慢速英语    
                    </Menu.Item>
                    <Menu.Item key="mail3">
                        <Icon type="mail" />
                        VOA慢速英语    
                    </Menu.Item>
                    <Menu.Item key="mail4">
                        <Icon type="mail" />
                        VOA慢速英语    
                    </Menu.Item>
                </Menu>
            </Fragment>
        );
    }
}

export default AppHeader;