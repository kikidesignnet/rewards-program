import React, { Component } from 'react';
import RewardsCard from "./RewardsCard";

export default class purchaseMonth extends Component {
  constructor(props) {
    super(props);
      this.state = {
        transitionArr: this.props.transitions,
        monthListSum: {},
        totalRewardsMonth: 0
    };
  }

  TotalMonthRewards = i => totalRewardsM => {
    // console.log("Month Reward T", totalRewardsM);
    let monthListSum = {
      ...this.state.monthListSum,
      [i]: totalRewardsM
    }
    let totalRewardsMonth = 0;
    Object.keys(monthListSum).forEach(key => {
      totalRewardsMonth += monthListSum[key]
    })
    this.setState({
      monthListSum,
      totalRewardsMonth
    });
    // let totalRewardlMonth = 0;
    // totalRewardlMonth += totalRewardsM;
    // this.setState({
    //   totalRewardsMonth: totalRewardlMonth
    // })
    // console.log("totalRewardsMonth", this.state.totalRewardsMonth);
  };

  render() {
    const transitionList = this.state.transitionArr;
    return (
      <div>
        <h2>{this.props.month}</h2>
        {/* <h3>{this.state.totalRewardsMonth}</h3> */}
        <div>
        {transitionList.map((eachTransition, i) => (
          <RewardsCard
          {...eachTransition}
          key={i}
          purchased={eachTransition.purchase}
          rewardsPoints={this.TotalMonthRewards(i)}
          />
        ))}
        </div>
      </div>
    )
  }
}
