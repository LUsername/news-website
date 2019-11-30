import React,{Component} from 'react';
import { Modal,Button } from 'antd';
import axios from 'axios';
import './style.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            login:false,
            modal:false
        }
        this.showModal =this.showModal.bind(this);
    }

    showModal(){
        this.setState({
            modal:true
        });
    }

    render(){
        const {login} = this.state;
        return(
            <div className='login'>
                {
                    login ?
                    <Button type="primary">退出</Button> :
                    <Button 
                        type="primary"
                        onClick={this.showModal}
                    >登录</Button>
                }
                <Modal
                  title="登录"
                  visible={this.state.modal}
                  onOk={()=>{}}
                  onCancel={()=>{}}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
            </div>
        );
    }

    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/isLogin.json')
        .then(res=>{
            const login =res.data.data.login;
            this.setState({login});
        })
    }
}

export default Login;