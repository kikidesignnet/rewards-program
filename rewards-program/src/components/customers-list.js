
import React, { Component } from 'react';
import axios from 'axios';
import CustomerCard from "./customerCard";

class CustomersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/customers/')
     .then(response => {
       this.setState({ customers: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  
  
  render() {
    const customers = this.state.customers;
    console.log("customerList", customers);
    let customersList;

    if(!customers) {
      customersList = "there is no customer record!";
    } else {
      customersList = customers.map((customer, k) =>
        <CustomerCard customer={customer} key={k} />
      );
    }

    return (
      <div>
        <h2>Customers List</h2>
        <div>
          <table>
            <thead>
            <tr>
              <th>Account</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
              {customersList}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default CustomersList;