import React, { Component } from 'react';
import { Col, Row} from 'antd';
import SearchBar from '../Components/search-contact';
import LoadContactsList from '../Components/show-contacts';
import './assets/main.css';


class AllContacts extends Component{
    render(){
        return(
            <div className= "container">
                <div className ="searchBar">
                <Row>
                    <Col sm = {{span: 8}} md = {{span: 16}} lg = {{span: 18}}>
                            <SearchBar/>
                            
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col sm = {{span: 8}} md = {{span: 16}} lg = {{span: 18}}>
                        
                        <LoadContactsList/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AllContacts;