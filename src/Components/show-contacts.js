import React, { Component } from 'react';
import { List, Avatar,Button } from 'antd';


class LoadContactsList extends Component{
  
  
  render(){
    const data = [
      {
        "id":"1",
        "firstName":"Raquel",
        "lastName":"Martinez",
        "phoneNum":"(81) 18-487-526",
        "email":"r_mtz@gmail.com",
        "Notes":"Met at networking night",
        "color":"#BB6BD9"

    },
    {
        "id":"2",
        "firstName":"Ana",
        "lastName":"Perez",
        "phoneNum":"(81) 15-845-964",
        "email":"Ana@gmail.com",
        "Notes":"--",
        "color":"#ffbf00"
    },
    {
        "id":"3",
        "firstName":"Mario",
        "lastName":"Mendoza",
        "phoneNum":"(81) 11-321-854",
        "email":"mario@gmail.com",
        "Notes":"posible business partner",
        "color":"#7265e6"
    },
    {
        "id":"4",
        "firstName":"Jorge",
        "lastName":"Garcia",
        "phoneNum":"(81) 13-116-694",
        "email":"gio@yahoo.com",
        "Notes":"",
        "color":"#f56a00"
    },
    {
      "id":"5",
      "firstName":"Fany",
      "lastName":"Alcazar",
      "phoneNum":"(81) 13-846-694",
      "email":"alzazar@gmail.com",
      "Notes":"cleaning lady",
      "color":"#6FCF97"
  },
  {
      "id":"6",
      "firstName":"Bernardo",
      "lastName":"Garcia",
      "phoneNum":"(81) 12-946-694",
      "email":"berno@outlook.com",
      "Notes":"bussiness assosiate",
      "color":"#EB5757"
  },
  {
      "id":"7",
      "firstName":"Graciela",
      "lastName":"Rodriguez",
      "phoneNum":"(81) 18-596-894",
      "email":"Grace@gmail.com",
      "Notes":"Graphic designer from LA",
      "color":"#65DB2D"
  },
  {
      "id":"8",
      "firstName":"Daniela",
      "lastName":"Santos",
      "phoneNum":"(81) 82-596-694",
      "email":"dany@outlook.com",
      "Notes":"Gerrys cousin",
      "color":"#f56a00"
  },
  {
      "id":"9",
      "firstName":"Fer",
      "lastName":"Mierles",
      "phoneNum":"(81) 82-596-694",
      "email":"Fernanda@gmail.com",
      "Notes":"assistant",
      "color":"#6FCF97"
  },
  {
      "id":"10",
      "firstName":"Bernardo",
      "lastName":"Garcia",
      "phoneNum":"(81) 82-596-694",
      "email":"berno@outlook.com",
      "Notes":"bussiness assosiate",
      "color":"#ffbf00"
  },
    ];

 
    return(

    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item actions={[<a><Button type="primary" shape="circle" icon="edit"  /></a>]}>
          <List.Item.Meta
            avatar={<Avatar style={{ backgroundColor: item.color, verticalAlign: 'middle' }} size="large">
          {item.firstName.charAt(0)}
        </Avatar>}
            title={
              <div>
                 {item.firstName} {item.lastName}
              </div>
              }
            description={
            <div>
              <strong><li>{item.phoneNum}</li></strong>
              <li>{item.email}</li>
              <li>{item.Notes}</li>
            </div> } 
          />
        </List.Item>
      )}
    />
    )
  }
}

export default LoadContactsList;