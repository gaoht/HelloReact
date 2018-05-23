import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import Renting from './renting'
import Buying from './buying'

class App extends Component {
    render(){
        return <Layout>
            <Header style={{ position: 'fixed', width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">
                        <a href="#/">租房</a></Menu.Item>
                    <Menu.Item key="2">
                        <a href="#/buying">买房</a>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <Router history={hashHistory}>
                        <Route exact path="/" component={Renting} />
                        <Route exact path="/buying" component={Buying}/>
                    </Router>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
            </Footer>
        </Layout>
    }
}

export default App;
