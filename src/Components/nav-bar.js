import React, { Component } from 'react';
import {Row, Col } from 'antd';
import '../Containers/assets/main.css'


class NavBar extends Component{
    render()
    {
        return (
        <div>
        <Row>
            <Col sm={12} md={12}>
            <div  className= "title">
                IContact
            </div>
            <div className="subtitle">
                Easiest way to keep your contacts handy.
            </div>
            </Col>
        </Row>    
        </div>
        
            
        )
    }
}

// const NavBar = props => (
// <Icon type="user-add" theme="outlined" />
// <Icon type="user" theme="outlined" />
//   );
  
  export default NavBar;
  