import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import AppHeader from './components/Header/index';
import Detail from './containers/Detail';
import List from './containers/List';
import 'antd/dist/antd.css';
import './style.css';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

class App extends Component{
    render(){
        return(   
            <BrowserRouter>
                <Layout style={{minWidth:1300, height:'100%'}}>
                    <Header className="header"><AppHeader/></Header>
                    <Content className="content">         
                        <Switch>
                            <Route path='/detail' component={Detail}></Route>
                            <Route path='/:id' component={List}></Route>
                        </Switch>
                    </Content>
                    <Footer className="footer">@copyright Aaron 2019</Footer>
                </Layout>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

