import React, { Component } from 'react';
import {Form, Input, Button, Col, Row, Avatar} from 'antd';
import API from '../API/api.js';
import './assets/main.css';

const FormItem = Form.Item;

class AddContact extends Component {
    state = {
        "id":"",
        "firstName":"",
        "lastName":"",
        "phoneNum":"",
        "email":"",
        "Notes":""
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
          console.log(this.state)
        });

      }
  
      onFormChanged=(event)=>{
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    constructor(){
        super();
        this.state={
            FormLayout:'horizontal'
            
        }
    }
  
    render() {

        //FORMLAYOUT
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
          labelCol: { span: 2 },
          wrapperCol: { span: 14 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
          wrapperCol: { span: 14, offset: 1 },
        } : null;

      return (
        <div className="wrapper">
        <Row>
            <Col>
            <div className="subtitle2">
                Add new contact!
            </div>
            </Col>
        </Row> 
            <Row type="flex" justify="center">
            <Col span={6}>
                <div>
                    <Avatar size={75} style={{ color: '#F2F2F2', backgroundColor: '#F2994A'}}>JD</Avatar>
                </div>
                <div className="edit-btn">
                   <p><a href="https://cdn-images-1.medium.com/max/1600/1*ASPrAbd2qtFVSVuru7Y7Rw.png" >Edit</a></p> 
                </div>
            </Col>

                <Col span={14}  offset={2} >
                    <Form layout={formLayout} onSubmit={this.handleSubmit}>
                        <FormItem label="Name"{...formItemLayout}>
                            <Input
                                name="firstName"
                                placeholder="Jhon"
                                value={this.state.FirstName}
                                onChange={this.onFormChanged} />
                        </FormItem>
                        
                        <FormItem
                            label="Last Name"
                            {...formItemLayout}
                            value={this.state.LastName}
                            onChange={this.onFormChanged}
                            >
                            <Input 
                            name= "lastName"
                            placeholder="Doe" />
                        </FormItem>

                        <FormItem
                            label="Phone"
                            {...formItemLayout}
                            value={this.state.phoneNum}
                            onChange={this.onFormChanged}
                            >
                            <Input placeholder="Jhon" />
                        </FormItem>

                        <FormItem
                            label="E-Mail"
                            {...formItemLayout}
                            >
                            <Input placeholder="John@gmail.com" />
                        </FormItem>

                        <FormItem
                            label="E-Mail"
                            {...formItemLayout}
                            >
                            <Input placeholder="John@gmail.com" />
                        </FormItem>

                        <FormItem
                            label="Notes"
                            {...formItemLayout}
                            >
                            <Input placeholder="Reference this contact" />
                        </FormItem>

                        <FormItem
                            {...buttonItemLayout}>
                            <Button type="primary" onSubmit={this.handleSubmit}>Submit</Button>
                        </FormItem>
                    </Form>
             </Col>

                
              </Row>
          </div>
      
  
      )
    }
  }
  
  export default AddContact;