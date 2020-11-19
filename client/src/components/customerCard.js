import React from 'react';
import { Link } from 'react-router-dom';

const CustomerCard = (props) => {
  const  customerCard  = props.customer;

    
    return (
      <tr>
        <td>{customerCard.account}</td>
        <td>{customerCard.name}</td>
        <td className="fit">
          <Link className="btn btn-outline-primary" to={`/${customerCard.account}`}>view</Link>
        </td>
      </tr>
    )
  
}

export default CustomerCard;