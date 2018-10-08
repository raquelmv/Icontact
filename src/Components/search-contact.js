import React, { Component } from 'react';
import { Input, Row} from 'antd';
import axios from "axios";

const Search = Input.Search;

class SearchBar extends Component{

    state = {
        query: '',
        results: []
      }
    
    
      handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
              this.getInfo()
            }
          } 
        })
      }
    
render(){
    return(
    <Row>
        <h3>Search for contacts</h3>
    <Search
      placeholder="type contact name"
      onSearch={value => console.log(value)}
      enterButton
      style={{ width: 300 }}
    />
    </Row>
    );
}
}

export default SearchBar;