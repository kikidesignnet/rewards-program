import React from 'react';
import { Link } from 'react-router-dom';

const CustomerCard = (props) => {
  const  customerCard  = props.customer;

    
    return (
      <tr>
        <td>{customerCard.account}</td>
        <td>{customerCard.name}</td>
        <td>
          <Link to={`/${customerCard.account}`}>view</Link>
          {/* <Link to={`/${customerCard._id}`}>view</Link> */}
        </td>
      </tr>
    )
  
}

export default CustomerCard;