import React, { Component } from 'react'

export default class RewardsCard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        purchaseN: this.props.purchased,
        totalR: 0
    };
  }

  calculateRewards = () => {
    // console.log("purchasereward", this.state.purchaseN);
    let purchasedT = this.props.purchased;
    let totalRewards = 0
    if(50 < purchasedT && purchasedT < 100) {
      let getRewards1 = purchasedT - 50;
      totalRewards += getRewards1;
    }
    if(purchasedT > 100) {
      let getRewards2 = (purchasedT - 100) * 2;
      totalRewards += getRewards2;
    }
    this.setState({
      totalR: totalRewards
    })
    this.props.rewardsPoints(totalRewards);
    return totalRewards;
  }

  render() {

    return (
      <div>
        <p>{this.props.date}</p>
        <p>{this.props.purchase}</p>
        <p>{this.calculateRewards()}</p>
      </div>
    )
  }
}
