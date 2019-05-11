import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import {Icon, Layout, Menu} from "antd";
import 'antd/lib/layout/style';
import 'antd/lib/menu/style';
import {DoctorCharts} from "./components/Doctor-Charts";
import {Patient} from "./components/Patient";
import {DoctorResults} from "./components/Doctor-Results";
import {Breadcrumbs} from "./components/Breadcrumbs";
import {MenuWrapper} from "./components/MenuWrapper";

const {
  Header, Content, Footer, Sider,
} = Layout;

const { SubMenu } = Menu;

const App = () => {
  return (
      <BrowserRouter>
        <Layout className="layout">
          <Header className="header">
            <MenuWrapper/>
          </Header>
          <Layout>
            <Sider width={200} style={{background: '#fff'}}>
              <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{height: '100%', borderRight: 0}}
              >
                <SubMenu key="sub1" title={<span><Icon type="user"/>Kardiolog</span>}>
                  <Menu.Item key="1">EKG</Menu.Item>
                  <Menu.Item key="2">Holter</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop"/>Laryngolog</span>}>
                  <Menu.Item key="5">Prześwietlenie zatok</Menu.Item>
                  <Menu.Item key="6">Punkcja</Menu.Item>
                  <Menu.Item key="7">USG</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification"/>Badania ogólne</span>}>
                  <Menu.Item key="9">Krew</Menu.Item>
                  <Menu.Item key="10">Mocz</Menu.Item>
                  <Menu.Item key="11">Spirometria</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{padding: '0 24px 24px'}}>
              <Breadcrumbs/>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
                <Switch>
                  <Route exact path="/pacjent" component={Patient}/>
                  <Route path="/lekarz-wykresy" component={DoctorCharts}/>
                  <Route path="/lekarz-badania" component={DoctorResults}/>
                </Switch>
              </Content>
            </Layout>
          </Layout>
          <Footer style={{textAlign: 'center'}}>2019, jm</Footer>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
