import React, { Component } from 'react';
import {Tabs, Icon } from 'antd';

import AddContact from '../Containers/add-contact';
import AllContacts from '../Containers/all-conctacts';


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class TabBar extends Component{
    render()
    {
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab={<span><Icon type="plus-circle" theme="outlined"  />Add</span>} key="1">
                    <AddContact/>           
             </TabPane>
            <TabPane tab={<span><Icon type="user" theme="outlined"  />All</span>} key="2">
                    <AllContacts/>
             </TabPane>
            </Tabs>
        );
    }
}
  
  export default TabBar;