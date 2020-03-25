import React from 'react';
import './App.css';
import Bisection from './Root/Bisection';
import falsePo from './Root/falsePo';
import newton from './Root/newton';
import secant from './Root/secant';
import OnePoint from './Root/OnePoint';
import CompoTrapz from './Integration/compotrapz';
import CompoSimson from './Integration/composimson';
import Forwardh from './Different/forwardh';
import Forwardhh from './Different/forwardhh';
import Backwardh from './Different/ิbackwardh';
import Backwardhh from './Different/backwardhh';
import Centralh from './Different/centralh';
import Centralhh from './Different/centralhh';

import { Layout, Menu  } from 'antd';
import { BrowserRouter,Route, NavLink} from 'react-router-dom';
const {  SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render(){
   return (
    <BrowserRouter>
    <Layout className="layout">
    <Header className='head1'>
      <div className="logo" />
      <Menu className="main1"
        theme="dark"
        onClick={this.handleClick} 
        selectedKeys={[this.state.current]}
        mode="horizontal"
        defaultSelectedKeys={['3']}
        style={{ lineHeight: '63px' }}
      >

        <SubMenu className="sub1"
          title={
            <span className="sp1" style={{fontSize:'1.2em'}}>
              <NavLink to = "/home">Home</NavLink>  
            </span>
          }
        >
        </SubMenu>
        <SubMenu className="sub2"
          title={
            <span  classname=" sp2" style={{fontSize:'1.2em'}}>
              Root Equations
            </span>
          }
            
        >  
          
          <Menu.Item key="R1">
            <NavLink to="/bisection">Bisection Method</NavLink>
          </Menu.Item>
          <Menu.Item key="R2">
            <NavLink to="/falseposition">False Position Method</NavLink>
          </Menu.Item>
          <Menu.Item key="R3">
            <NavLink to="/newton">Newton-Raphson</NavLink>
          </Menu.Item>
          <Menu.Item key="R4">
            <NavLink to="/secant">Secant Method</NavLink>
          </Menu.Item>
          <Menu.Item key="R5">
            <NavLink to="/onepoint">One-Point Itreation Method</NavLink>
          </Menu.Item>
          
       
            
        </SubMenu>

        <SubMenu className="sub4"
          title={
            <span  classname=" sp4" style={{fontSize:'1.2em'}}>
              Integration
            </span>
          }
            
        >  
          
          <Menu.Item key="d1">
            <NavLink to="/compotrapz">Composite Trapzaidal </NavLink>
          </Menu.Item>
          <Menu.Item key="d2">
            <NavLink to="/composimson">Composite Simson's Rule </NavLink>
          </Menu.Item>
                
          
       
            
        </SubMenu>

        <SubMenu className="sub5"
          title={
            <span  classname=" sp5" style={{fontSize:'1.2em'}}>
              Differentation
            </span>
          }
            
        >  
          
          <Menu.Item key="d1">
            <NavLink to="/forwardh">Firstforward Divided-Different </NavLink>
          </Menu.Item>
          <Menu.Item key="d4">
            <NavLink to="/forwardhh">Firstforward Divided-Different 2</NavLink>
          </Menu.Item>
          <Menu.Item key="d2">
            <NavLink to="/backwardh">Backforward Divided-Different </NavLink>
          </Menu.Item>
          <Menu.Item key="d5">
            <NavLink to="/backwardhh">Backforward Divided-Different 2</NavLink>
          </Menu.Item>
          <Menu.Item key="d3">
            <NavLink to="/centralh">Central Divided-Different </NavLink>
          </Menu.Item>
          <Menu.Item key="d6">
            <NavLink to="/centralhh">Central Divided-Different 2</NavLink>
          </Menu.Item>
                
          
       
            
        </SubMenu>  
        
      </Menu>
    </Header>
    
  </Layout>
  <Content style={{ padding: '10px 50px' }}>
    
      
      <div style={{ background: '#F0F8FF', padding: 24, minHeight: 12000 }}>
        <center><h1 style={{letterSpacing:'5px',}}>Numerical Method</h1></center>
        
        
        <Route path="/bisection" component = {Bisection} />
        <Route path="/falseposition" component = {falsePo} />
        <Route path="/newton" component = {newton} />
        <Route path="/secant" component = {secant} />
        <Route path="/onepoint" component = {OnePoint} />

        
        <Route path="/compotrapz" component = {CompoTrapz} />
        <Route path="/composimson" component = {CompoSimson} />

        <Route path="/forwardh" component = {Forwardh}/>
        <Route path="/forwardhh" component = {Forwardhh}/>
        <Route path="/backwardh" component = {Backwardh}/>
        <Route path="/backwardhh" component = {Backwardhh}/>
        <Route path="/centralh" component = {Centralh}/>
        <Route path="/centralhh" component = {Centralhh}/>
       

        
  </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  
</BrowserRouter>
 
    
      ); 
  }
  
}

export default App;
