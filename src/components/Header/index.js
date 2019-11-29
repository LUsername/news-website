import React,{Component} from 'react';
import logo from './logo.png';

class AppHeader extends Component{
    render(){
        return(
            <div>
                <img src={logo} />
            </div>
        );
    }
}

export default AppHeader;