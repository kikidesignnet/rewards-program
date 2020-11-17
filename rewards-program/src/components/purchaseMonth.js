import React, { Component } from 'react';
import RewardsCard from "./RewardsCard";

export default class purchaseMonth extends Component {
  constructor(props) {
    super(props);
      this.state = {
        // transitionArr: this.props.transitions,
        transitionArr: this.newTransArray(),
        monthListSum: [],
        totalRewardsMonth: 0
    };
  }

  calculateRewards = (purchased) => {
    let totalRewards = 0;
    if(purchased > 100) {
      totalRewards = ((purchased - 100) * 2) + 50;
    } else if (50 < purchased && purchased < 100) {
      totalRewards = purchased - 50;
    }
    return totalRewards;
  }

  newTransArray = () => {
    let newtransArr = this.props.transitions;
    let ntranstArr = newtransArr.map((trans) => {
      return {...trans, rewardpoints: this.calculateRewards(trans.purchase)}
    })
    return ntranstArr;
  }

  totalRewardsMonth = () => {
    let RewardsArr = [...this.state.transitionArr];
    let filterRewardArr = RewardsArr.map((reward) => reward.rewardpoints).reduce((a, b) => a + b);
    // console.log("rewardArray", filterRewardArr);
    return filterRewardArr;
  }

  render() {
    const transitionList = this.state.transitionArr;

    console.log("new Transition Arr", this.state.transitionArr);

    return (
      <div className="month-card">
        <div>
          <div className="month-title">
            <h2>{this.props.month}</h2>
            <h3>Total Reward Points: {this.totalRewardsMonth()}</h3>
          </div>
          <hr className="title-line" />
        </div>
        <div>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Purchase</th>
              <th className="fit">Reward Points</th>
            </tr>
          </thead>
          <tbody>
          {transitionList.map((eachTransition) => (
            <RewardsCard
            {...eachTransition}
            key={eachTransition.id}
            />
          ))}
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}
