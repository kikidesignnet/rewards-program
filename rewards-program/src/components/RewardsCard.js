import React, { Component } from 'react'

export default class RewardsCard extends Component {
  constructor(props) {
    super(props);
      this.state = {
    };
  }

  render() {
    return (
          <tr>
            <td>{this.props.date}</td>
            <td>${this.props.purchase}</td>
            <td className="fit">{this.props.rewardpoints} pts</td>
          </tr>
    )
  }
}
