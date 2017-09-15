/* eslint-disable */
import React, { Component } from 'react';
import { Transition, Statistic } from 'semantic-ui-react';
import { statisticColumnStyle, statisticFirstStyle, statisticStyle, statisticValueStyle, statisticLabelStyle, statisticMainValueStyle, statisticMainLabelStyle } from '../Constants/RoadmapHeaderStyles';

class RoadmapHeader extends Component {
  state = {

  }
  changeColor = () => {
    statisticMainValueStyle.color = '#03ac13';
    statisticMainLabelStyle.color = '#03ac13';

  }

  resetColor = () => {
    statisticMainValueStyle.color = '#949494';
    statisticMainLabelStyle.color = '#949494';
  }

  render () {
    if (this.props.bannerVisible){
      this.changeColor();
    } else {
      this.resetColor();
    }
    return (
      <Statistic.Group>
      <Statistic style={statisticFirstStyle}>
        <Statistic.Value style={statisticMainValueStyle}>
          {this.props.currentActions}
        </Statistic.Value>
        <Statistic.Label style={statisticMainLabelStyle}>
          current actions
        </Statistic.Label>
      </Statistic>
      {(this.props.numberCompleted > 0) &&
        <Statistic style={statisticStyle} >
          <Statistic.Value style={statisticValueStyle}>
            {this.props.numberCompleted}
          </Statistic.Value>
          <Statistic.Label style={statisticLabelStyle}>
            completed actions
          </Statistic.Label>
        </Statistic>
      }

      </Statistic.Group>
    );
  }
}

export default RoadmapHeader;
