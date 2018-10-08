import axios from "axios";

export default{
     //POST NEW CONTACT
     postNewContact: function(newContact) {
        return axios.post(process.env.REACT_APP_API_URL + "/api/contacts/newcontact", newContact);
    },
    getContacts: function(name) {
        return axios.get(process.env.REACT_APP_API_URL + "/api/" + name);
      },
}