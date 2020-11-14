import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import PurchaseMonth from "./purchaseMonth";

class customerRewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerRewards: {},
      purchaseHistory: []
    };
  }

  componentDidMount() {
    console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/customers/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-customerRewards-API-response: " + res.data);
        this.setState({
          customerRewards: res.data[0],
          purchaseHistory: res.data[0].purchase_history
        })
      })
      .catch(err => {
        console.log("Error from customerRewards");
      })
  };


  render() {

    const customerRewards = this.state.customerRewards;
    const purchaseHistory = this.state.purchaseHistory;
    console.log("customerID", customerRewards);
    console.log("purchase History", purchaseHistory);

    return (
      <div >
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Back
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Hello {customerRewards.name}</h1>
              <p className="lead text-center">
                  {customerRewards.account}
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
          {purchaseHistory.map((props, index) => (
            <PurchaseMonth
            {...props}
            key={index}
            />
          ))}
          </div>

        </div>
      </div>
    );
  }
}

export default customerRewards;